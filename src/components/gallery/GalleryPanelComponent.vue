<script setup>

    const props = defineProps({
        panel: {type: Number},
        project: {type: Object},
        image: {type: String}
    })

    function should_show_github_link(){
        return props.project != undefined && props.project.github_link != undefined && props.project.github_link != ''
    }

    function should_show_live_link(){
        return props.project != undefined && props.project.live_link != undefined && props.project.live_link != ''
    }

    function should_show_play_store_link(){
        return props.project != undefined && props.project.play_store_link != undefined && props.project.play_store_link != ''
    }

    function should_show_chrome_link(){
        return props.project != undefined && props.project.chrome_link != undefined && props.project.chrome_link != ''
    }

    function panel_animation(){
        return props.project != undefined ? 'loading' : 'none'
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
    <div @click="emit('show_project',project)" :class="'gallery-content__loading-panel_'+panel_number_string()" :style="{animation: panel_animation(), backgroundImage: project != undefined ? 'url('+image+')' : 'none'}">
        <div :class="'gallery-content__content-panel_'+panel_number_string()">
            <label class="title">{{ project != undefined ? project.title : '' }}</label>
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
        </div>
    </div>
</template>