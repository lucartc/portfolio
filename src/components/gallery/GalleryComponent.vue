<script setup>
    import { ref,onMounted } from 'vue'
    import { search_projects } from '@/helpers/api';
    import GalleryGroupComponent from './GalleryGroupComponent.vue';

    const projects = ref()
    const presentation_groups = ref()

    function generate_presentation_groups(){
        presentation_groups.value = []
        let available_projects = projects.value
        let project_quantity = projects.value.length
        let gallery_panels = 0
        let group_sequence = []

        while(gallery_panels < project_quantity){
            let new_group_type = Math.floor(Math.random() * 3)
            let last_group_type = group_sequence[group_sequence.length-1]

            if(last_group_type != new_group_type){
                group_sequence.push(new_group_type)
                switch(new_group_type){
                    case 1:
                        gallery_panels += 5
                        break;
                    case 2:
                        gallery_panels += 6
                        break;
                    case 3:
                        gallery_panels += 4
                        break;
                    default:
                        break;
                }
            }
        }

        for(let group_index in group_sequence){
            let group_projects = []
            switch(group_sequence[group_index]){
                case 1:
                    for(let i = 0; i < 5; i++){
                        group_projects.push(available_projects.shift())
                    }
                    presentation_groups.value.push({type: group_sequence[group_index], projects: group_projects})
                    gallery_panels += 5
                    break;
                case 2:
                    for(let i = 0; i < 6; i++){
                        group_projects.push(available_projects.shift())
                    }
                    presentation_groups.value.push({type: group_sequence[group_index], projects: group_projects})
                    break;
                case 3:
                    for(let i = 0; i < 4; i++){
                        group_projects.push(available_projects.shift())
                    }
                    presentation_groups.value.push({type: group_sequence[group_index], projects: group_projects})
                    break;
                default:
                    break;
            }
        }
    }

    onMounted(() => {
        search_projects()
        .then(data => data.json())
        .then(data => {
            projects.value = data.projects
            generate_presentation_groups()
        })
    })

</script>
<template>
    <GalleryGroupComponent v-for="group in presentation_groups" v-bind="group"></GalleryGroupComponent>
    <!-- <div class="gallery-content_one">
        <div class="column-one">
            <div class="row-one">
                <div class="gallery-content__loading-panel_one">
                    <div class="gallery-content__content-panel_one">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_two">
                    <div class="gallery-content__content-panel_two">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="gallery-content__loading-panel_three">
                    <div class="gallery-content__content-panel_three">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_four">
                    <div class="gallery-content__content-panel_four">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_five">
                <div class="gallery-content__content-panel_five">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="gallery-content_two">
        <div class="column-one">
            <div class="gallery-content__loading-panel_one">
                <div class="gallery-content__content-panel_one">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_two">
                <div class="gallery-content__content-panel_two">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
            <div class="gallery-content__loading-panel_three">
                <div class="gallery-content__content-panel_three">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-three">
            <div class="row-one">
                <div class="gallery-content__loading-panel_four">
                    <div class="gallery-content__content-panel_four">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
                <div class="gallery-content__loading-panel_five">
                    <div class="gallery-content__content-panel_five">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="gallery-content__loading-panel_six">
                    <div class="gallery-content__content-panel_six">
                        <label class="title">Project title</label>
                        <div class="links">
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                            <div class="links__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="gallery-content_three">
        <div class="column-one">
            <div class="gallery-content__loading-panel_one">
                <div class="gallery-content__content-panel_one">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-two">
            <div class="gallery-content__loading-panel_two">
                <div class="gallery-content__content-panel_two">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
            <div class="gallery-content__loading-panel_three">
                <div class="gallery-content__content-panel_three">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-three">
            <div class="gallery-content__loading-panel_four">
                <div class="gallery-content__content-panel_four">
                    <label class="title">Project title</label>
                    <div class="links">
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                        <div class="links__item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>