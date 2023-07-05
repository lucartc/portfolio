<script setup>
    import { ref } from 'vue'
    import GalleryGroupComponent from './GalleryGroupComponent.vue';

    const current_projects = ref()
    const presentation_groups = ref()
    const dialog = ref(false)
    const dialog_project = ref()
    const current_gallery_item = ref()

    function change_displayed_gallery_item(src){
        current_gallery_item.value = src
    }

    function update_projects(projects){
        current_projects.value = projects
        generate_presentation_groups()
    }

    function show_dialog(project){
        current_gallery_item.value = project.gallery[0].path
        dialog_project.value = project
        let body = document.querySelector('body')
        body.style.overflowY = 'hidden'
        dialog.value = true
    }

    function hide_dialog(){
        let body = document.querySelector('body')
        body.style.overflowY = 'scroll'
        dialog.value = false
    }

    function generate_presentation_groups(){
        presentation_groups.value = []
        let available_projects = JSON.parse(JSON.stringify(current_projects.value))
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
    <div class="flex flex-row flex-wrap gap-[20px] w-full min-w-full max-w-full mb-[120px]">
        <div class="rounded-lg flex flex-row w-[calc((100%-4*20px)/5)] min-w-[calc((100%-4*20px)/5)] max-w-[calc((100%-4*20px)/5)] aspect-[3/4] drop-shadow-lg relative" v-for="project in current_projects">
            <img class="rounded-lg w-full min-w-full max-w-full h-full min-h-full max-h-full object-cover absolute" :src="project.display">
            <div class="flex opacity-0 hover:opacity-100 hover:backdrop-brightness-[20%] flex-col gap-6 h-full min-h-full max-h-full w-full min-w-full max-w-full p-4 box-border z-[1]">
                <div class="flex flex-col gap-3">
                    <label class="text-lg font-bold text-white">{{ project.title }}</label>
                    <div class="flex flex-row gap-3">
                        <a target="_blank" v-if="project.github_link" :href="project.github_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                            <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/github.svg">
                        </a>
                        <a target="_blank" v-if="project.live_link" :href="project.live_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                            <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/live.svg">
                        </a>
                        <a target="_blank" v-if="project.play_store_link" :href="project.play_store_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                            <img class="w-[55%] min-w-[55%] max-w-[55%]" src="../../assets/play_store.svg">
                        </a>
                        <a target="_blank" v-if="project.chrome_web_store_link" :href="project.chrome_web_store_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                            <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/chrome.svg">
                        </a>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-white text-md font-bold">Description</label>
                    <p class="tet-start text-white text-md max-w-full leading-6 break-all line-clamp-4">{{ project.description }}</p>
                </div>
                <div @click="show_dialog(project)" class="mt-auto mb-3 hover:brightness-125 whitespace-nowrap text-lg flex flex-row justify-center items-center bg-tag-background min-w-[30%] px-4 py-2 box-border max-w-[100%] rounded-lg drop-shadow-md text-white">See more</div>
            </div>
        </div>
        <dialog v-if="dialog_project" :class="[dialog ? 'flex' : 'hidden','overflow-y-auto','flex-col','z-[10]','bg-transparent','backdrop-brightness-50','backdrop-blur-sm','min-w-full','min-h-full','fixed','top-0','max-h-full']">
            <div class="flex flex-col min-w-full max-w-full gap-3 box-border items-center">
                <div class="flex flex-col gap-10 max-w-[70%] min-w-[70%] bg-default-background p-10 rounded-lg drop-shadow-lg relative">
                    <div class="flex flex-col gap-3">
                        <label class="text-4xl font-bold text-white">{{ dialog_project.title }}</label>
                        <div class="flex flex-col">
                            <a target="_blank" v-if="dialog_project.github_link" :href="dialog_project.github_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                                <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/github.svg">
                            </a>
                            <a target="_blank" v-if="dialog_project.live_link" :href="dialog_project.live_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                                <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/live.svg">
                            </a>
                            <a target="_blank" v-if="dialog_project.play_store_link" :href="dialog_project.play_store_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                                <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/play_store.svg">
                            </a>
                            <a target="_blank" v-if="dialog_project.chrome_web_store_link" :href="dialog_project.chrome_web_store_link" class="hover:brightness-125 flex flex-row justify-center items-center rounded-[100%] w-[40px] aspect-square bg-links-color drop-shadow-md">
                                <img class="w-[60%] min-w-[60%] max-w-[60%]" src="../../assets/chrome.svg">
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2">
                            <label class="text-white text-2xl font-bold">Description</label>
                            <p class="text-white text-lg leading-7">{{ dialog_project.description }}</p>
                        </div>
                        <div class="flex flex-row gap-3 flex-wrap">
                            <div class="flex flex-row justify-center items-center bg-tag-background min-w-[10%] max-w-[20%] px-4 py-3 text-white text-sm rounded-lg drop-shadow-md" v-for="tag in dialog_project.tags">{{ tag.name }}</div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full min-w-full max-w-full gap-4">
                        <div class="flex flex-row gap-3 min-w-full max-w-full aspect-[3/1]">
                            <div class="h-full min-h-full max-h-full basis-[10%] p-3 box-border flex flex-col items-center gap-3 overflow-y-scroll snap-y rounded-lg bg-[#101010]">
                                <div v-for="image in dialog_project.gallery" @click="change_displayed_gallery_item(image.path)" class="flex flex-row justify-center w-full min-w-full max-w-full aspect-square bg-[#202020] snap-start rounded-lg drop-shadow-lg">
                                    <img class="min-h-full min-w-full object-contain rounded-lg" :src="image.path" alt="">
                                </div>
                            </div>
                            <div class="flex flex-row justify-center items-center h-full min-h-full max-h-full basis-[90%] bg-[#202020] drop-shadow-lg rounded-lg">
                                <img v-if="dialog_project.gallery.length" :src="current_gallery_item" class="h-full min-h-full max-h-full w-full min-w-full max-w-full object-contain">
                            </div>
                        </div>
                    </div>
                    <div @click="hide_dialog" class="bg-avatar-background absolute right-[30px] top-[30px] min-w-[60px] max-w-[60px] aspect-square rounded-full drop-shadow-lg flex flex-row justify-center items-center">
                        <img src="/src/assets/close.svg" class="h-[30%] min-h-[30%] max-h-[30%] aspect-square">
                    </div>
                </div>
            </div>
        </dialog>
    </div>
</template>