<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        panel: {type: Number},
        project: {type: Object},
        image: {type: String}
    })

    const has_project_loaded = computed(() => {
        return props.project
    })

    function should_show_github_link(){
        return props.project && props.project.github_link && props.project.github_link
    }

    function should_show_live_link(){
        return props.project && props.project.live_link && props.project.live_link
    }

    function should_show_play_store_link(){
        return props.project && props.project.play_store_link && props.project.play_store_link
    }

    function should_show_chrome_link(){
        return props.project && props.project.chrome_link && props.project.chrome_link
    }

    function panel_animation(){
        return props.project ? 'loading' : 'none'
    }

    function panel_number_string(){
        switch(props.panel){
            case 1:
                return 'one'
            case 2:
                return 'two'
            case 3:
                return 'three'
            case 4:
                return 'four'
            case 5:
                return 'five'
            case 6:
                return 'six'
            default:
                break;
        }
    }

    const emit = defineEmits([
        'show_project'
    ])
</script>

<template>
    <div @click="emit('show_project',project)" :class="'gallery-content__loading-panel_'+panel_number_string()" :style="{animation: panel_animation(), backgroundImage: project ? 'url('+image+')' : 'none'}">
        <div :class="'gallery-content__content-panel_'+panel_number_string()">
            <label class="title">{{ project ? project.title : '' }}</label>
            <div class="links">
                <a v-if="should_show_github_link()" class="links__item_github" :href="project.github_link">
                    <img v-if="should_show_github_link()" src="../../assets/github.svg" class="links-item__icon">
                </a>
                <a v-if="should_show_live_link()" class="links__item_live" :href="project.live_link">
                    <img v-if="should_show_live_link()" src="../../assets/live.svg" class="links-item__icon">
                </a>
                <a v-if="should_show_play_store_link()" class="links__item_play_store" :href="project.play_store_link">
                    <img v-if="should_show_play_store_link()" src="../../assets/play_store.svg" class="links-item__icon">
                </a>
                <a v-if="should_show_chrome_link()" class="links__item_chrome" :href="project.chrome_web_store_link">
                    <img v-if="should_show_chrome_link()" src="../../assets/chrome.svg" class="links-item__icon">
                </a>
            </div>
            <div v-if="has_project_loaded" class="description">
                {{ project.description }}
            </div>
            <div v-if="has_project_loaded" class="tags">
                <div class="tag_item" v-for="tag in project.tags">{{ tag.name }}</div>
            </div>
        </div>
    </div>
</template>