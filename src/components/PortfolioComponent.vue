<script setup>
    import { ref, onMounted } from 'vue'
    import { get_tags, search_projects } from '../helpers/api.js'
    import ProjectComponent from './ProjectComponent.vue'

    const self = ref()
    const projects = ref([])
    const tags = ref([])
    const search_string = ref()
    const tag_selector = ref()

    function show(){
        self.value.style.display = 'flex'
    }

    function hide(){
        self.value.style.display = 'none'
    }

    function update_projects(){
        let data = {
            tags: [tag_selector.value.value],
            search_string: search_string.value.value
        }
        search_projects(data)
        .then(data => data.json())
        .then(data => projects.value = data.projects)
    }

    defineExpose({
        show,
        hide
    })

    onMounted(() => {
        hide()
        get_tags()
        .then(data => data.json())
        .then(data => {console.log('data: ',data); return data})
        .then(data => {tags.value = data.tags; return data})
        .then(data => {
            let message = {tags: [data.tags[0].id]}
            return search_projects(message)
        })
        .then(data => data.json())
        .then(data => projects.value = data.projects)
        
        // search_projects({})
        // .then(data => data.json())
        // .then(data => projects.value = data.projects)
    })
</script>

<template>
        <div class="portfolio" ref="self">
            <div class="portfolio-header">
                <div class="portfolio-header__title">My projects</div>
                <div class="portfolio-header__sub">+999 projects</div>
            </div>
            <div class="portfolio-filters">
                <div class="input-group">
                    <div class="input-group__label">Search project</div>
                    <input ref="search_string" @keyup="update_projects" type="text" class="input-group__input" placeholder="field content">
                </div>
                <div class="input-group">
                    <div class="input-group__label">Tag</div>
                    <select ref="tag_selector" @change="update_projects" type="text" class="input-group__input_select" placeholder="field content">
                        <option v-for="tag in tags" :value="tag.id">{{ tag.name }}</option>
                    </select>
                </div>
                <div class="input-group">
                    <div class="input-group__label">Order by</div>
                    <select type="text" class="input-group__input_select" placeholder="field content">
                        <option value="1">Name(a-z)</option>
                        <option value="2">Name(z-a)</option>
                        <option value="3">Oldest first</option>
                        <option value="4">Newest first</option>
                    </select>
                </div>
            </div>
            <div class="portfolio-list">
                <ProjectComponent v-for="project in projects"
                v-bind="project"
                ></ProjectComponent>
            </div>
        </div>
</template>

<style></style>