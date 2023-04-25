<script setup>
    import { ref, onMounted } from 'vue'
    import { search_projects } from '../helpers/api.js'
    import ProjectComponent from './ProjectComponent.vue'

    const self = ref()
    const projects = ref([])

    function show(){
        self.value.style.display = 'flex'
    }

    function hide(){
        self.value.style.display = 'none'
    }

    function update_projects(){
        search_projects().then(data => projects.value = data)
    }

    defineExpose({
        show,
        hide
    })

    onMounted(() => {
        hide()
        search_projects()
        .then(data => {
            projects.value = data
        })
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
                    <input @keyup="update_projects" type="text" class="input-group__input" placeholder="field content">
                </div>
                <div class="input-group">
                    <div class="input-group__label">Tag</div>
                    <select @change="update_projects" type="text" class="input-group__input_select" placeholder="field content">
                        <option value="0">Suggested projects</option>
                    </select>
                </div>
                <div class="input-group">
                    <div class="input-group__label">Order by</div>
                    <select @change="update_projects" type="text" class="input-group__input_select" placeholder="field content">
                        <option value="">Name(a-z)</option>
                        <option value="">Name(z-a)</option>
                        <option value="">Oldest first</option>
                        <option value="">Newest first</option>
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