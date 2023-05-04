<script setup>
    import { onMounted } from 'vue';

    const props = defineProps({
        type: {type: Number},
        projects: {type: Array}
    })

    onMounted(() => {
        console.log('projects: ',props.projects)
    })
</script>

<template>
    <div v-if="props.type == 1" class="gallery-content_one">
        <div class="column-one">
            <div class="row-one">
                <div class="gallery-content__loading-panel_one">
                    <div class="gallery-content__content-panel_one">
                        <label class="title">{{ projects[0] != undefined ? projects[0].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[0] != undefined && projects[0].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[0] != undefined && projects[0].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[0] != undefined && projects[0].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[0] != undefined && projects[0].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_two">
                    <div class="gallery-content__content-panel_two">
                        <label class="title">{{ projects[1] != undefined ? projects[1].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[1] != undefined && projects[1].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[1] != undefined && projects[1].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[1] != undefined && projects[1].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[1] != undefined && projects[1].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="gallery-content__loading-panel_three">
                    <div class="gallery-content__content-panel_three">
                        <label class="title">{{ projects[2] != undefined ? projects[2].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[2] != undefined && projects[2].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[2] != undefined && projects[2].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[2] != undefined && projects[2].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[2] != undefined && projects[2].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_four">
                    <div class="gallery-content__content-panel_four">
                        <label class="title">{{ projects[3] != undefined ? projects[3].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[3] != undefined && projects[3].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_five">
                <div class="gallery-content__content-panel_five">
                    <label class="title">{{ projects[4] != undefined ? projects[4].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[4] != undefined && projects[4].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                        <a v-if="projects[4] != undefined && projects[4].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                        <a v-if="projects[4] != undefined && projects[4].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                        <a v-if="projects[4] != undefined && projects[4].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.type == 2" class="gallery-content_two">
        <div class="column-one">
            <div class="gallery-content__loading-panel_one">
                <div class="gallery-content__content-panel_one">
                    <label class="title">{{ projects[0] != undefined ? projects[0].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[0] != undefined && projects[0].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                        <a v-if="projects[0] != undefined && projects[0].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                        <a v-if="projects[0] != undefined && projects[0].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                        <a v-if="projects[0] != undefined && projects[0].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_two">
                <div class="gallery-content__content-panel_two">
                    <label class="title">{{ projects[1] != undefined ? projects[1].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[1] != undefined && projects[1].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                        <a v-if="projects[1] != undefined && projects[1].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                        <a v-if="projects[1] != undefined && projects[1].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                        <a v-if="projects[1] != undefined && projects[1].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div class="gallery-content__loading-panel_three">
                <div class="gallery-content__content-panel_three">
                    <label class="title">{{ projects[2] != undefined ? projects[2].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[2] != undefined && projects[2].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                        <a v-if="projects[2] != undefined && projects[2].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                        <a v-if="projects[2] != undefined && projects[2].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                        <a v-if="projects[2] != undefined && projects[2].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-three">
            <div class="row-one">
                <div class="gallery-content__loading-panel_four">
                    <div class="gallery-content__content-panel_four">
                        <label class="title">{{ projects[3] != undefined ? projects[3].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[3] != undefined && projects[3].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[3] != undefined && projects[3].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_five">
                    <div class="gallery-content__content-panel_five">
                        <label class="title">{{ projects[4] != undefined ? projects[4].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[4] != undefined && projects[4].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[4] != undefined && projects[4].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[4] != undefined && projects[4].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[4] != undefined && projects[4].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="gallery-content__loading-panel_six">
                    <div class="gallery-content__content-panel_six">
                        <label class="title">{{ projects[5] != undefined ? projects[5].title : '' }}</label>
                        <div class="links">
                            <a v-if="projects[5] != undefined && projects[5].github_link != ''" class="links__item" :href="projects[0].github_link" target="_blank"></a>
                            <a v-if="projects[5] != undefined && projects[5].live_link != ''" class="links__item" :href="projects[0].live_link" target="_blank"></a>
                            <a v-if="projects[5] != undefined && projects[5].play_store_link != ''" class="links__item" :href="projects[0].play_store_link" target="_blank"></a>
                            <a v-if="projects[5] != undefined && projects[5].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.type == 3" class="gallery-content_three">
        <div class="column-one">
            <div class="gallery-content__loading-panel_one">
                <div class="gallery-content__content-panel_one">
                    <label class="title">{{ projects[0] != undefined ? projects[0].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[0] != undefined && projects[0].github_link != ''" class="links__item" :href="projects[0].github_link"></a>
                        <a v-if="projects[0] != undefined && projects[0].live_link != ''" class="links__item" :href="projects[0].live_link"></a>
                        <a v-if="projects[0] != undefined && projects[0].play_store_link != ''" class="links__item" :href="projects[0].play_store_link"></a>
                        <a v-if="projects[0] != undefined && projects[0].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_two">
                <div class="gallery-content__content-panel_two">
                    <label class="title">{{ projects[1] != undefined ? projects[1].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[1] != undefined && projects[1].github_link != ''" class="links__item" :href="projects[0].github_link"></a>
                        <a v-if="projects[1] != undefined && projects[1].live_link != ''" class="links__item" :href="projects[0].live_link"></a>
                        <a v-if="projects[1] != undefined && projects[1].play_store_link != ''" class="links__item" :href="projects[0].play_store_link"></a>
                        <a v-if="projects[1] != undefined && projects[1].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link"></a>
                    </div>
                </div>
            </div>
            <div class="gallery-content__loading-panel_three">
                <div class="gallery-content__content-panel_three">
                    <label class="title">{{ projects[2] != undefined ? projects[2].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[2] != undefined && projects[2].github_link != ''" class="links__item" :href="projects[0].github_link"></a>
                        <a v-if="projects[2] != undefined && projects[2].live_link != ''" class="links__item" :href="projects[0].live_link"></a>
                        <a v-if="projects[2] != undefined && projects[2].play_store_link != ''" class="links__item" :href="projects[0].play_store_link"></a>
                        <a v-if="projects[2] != undefined && projects[2].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-three">
            <div class="gallery-content__loading-panel_four">
                <div class="gallery-content__content-panel_four">
                    <label class="title">{{ projects[3] != undefined ? projects[3].title : '' }}</label>
                    <div class="links">
                        <a v-if="projects[3] != undefined && projects[3].github_link != ''" class="links__item" :href="projects[0].github_link"></a>
                        <a v-if="projects[3] != undefined && projects[3].live_link != ''" class="links__item" :href="projects[0].live_link"></a>
                        <a v-if="projects[3] != undefined && projects[3].play_store_link != ''" class="links__item" :href="projects[0].play_store_link"></a>
                        <a v-if="projects[3] != undefined && projects[3].chrome_web_store_link != ''" class="links__item" :href="projects[0].chrome_web_store_link"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>