<script setup>
    import { ref } from 'vue'
    import GalleryGroupComponent from './GalleryGroupComponent.vue';

    const current_projects = ref()
    const presentation_groups = ref()

    function update_projects(projects){
        current_projects.value = projects
        generate_presentation_groups()
    }

    function generate_presentation_groups(){
        presentation_groups.value = []
        let available_projects = current_projects.value
        let project_quantity = current_projects.value.length
        let gallery_panels = 0
        let group_sequence = []

        while(gallery_panels < project_quantity){
            let new_group_type = Math.floor(Math.random() * 4)
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

    defineExpose({
        update_projects
    })

</script>
<template>
    <div>
        <GalleryGroupComponent v-for="group in presentation_groups" v-bind="group"></GalleryGroupComponent>
    </div>
</template>