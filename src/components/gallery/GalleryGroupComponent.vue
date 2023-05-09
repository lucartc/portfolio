<script setup>
    import GalleryPanelComponent from './GalleryPanelComponent.vue';

    const props = defineProps({
        type: {type: Number},
        projects: {type: Array}
    })
</script>

<template>
    <div v-if="type == 1" class="gallery-content_one">
        <div class="column-one">
            <div class="row-one">
                <GalleryPanelComponent :panel="1" :project="projects[0]" :image="projects[0]?.desktop"></GalleryPanelComponent>
                <GalleryPanelComponent :panel="2" :project="projects[1]" :image="projects[1]?.desktop"></GalleryPanelComponent>
            </div>
            <div class="row-two">
                <GalleryPanelComponent :panel="3" :project="projects[2]" :image="projects[2]?.desktop"></GalleryPanelComponent>
                <GalleryPanelComponent :panel="4" :project="projects[3]" :image="projects[3]?.portrait"></GalleryPanelComponent>
            </div>
        </div>
        <div class="column-two">
            <GalleryPanelComponent :panel="5" :project="projects[4]" :image="projects[4]?.design_sheet"></GalleryPanelComponent>
        </div>
    </div>
    <div v-if="type == 2" class="gallery-content_two">
        <div class="column-one">
            <GalleryPanelComponent :panel="1" :project="projects[0]" :image="projects[0]?.design_sheet"></GalleryPanelComponent>
        </div>
        <div class="column-two">
            <GalleryPanelComponent :panel="2" :project="projects[1]" :image="projects[1]?.portrait"></GalleryPanelComponent>
            <GalleryPanelComponent :panel="3" :project="projects[2]" :image="projects[2]?.portrait"></GalleryPanelComponent>
        </div>
        <div class="column-three">
            <div class="row-one">
                <GalleryPanelComponent :panel="4" :project="projects[3]" :image="projects[3]?.desktop"></GalleryPanelComponent>
                <GalleryPanelComponent :panel="5" :project="projects[4]" :image="projects[4]?.icon"></GalleryPanelComponent>
            </div>
            <div class="row-two">
                <GalleryPanelComponent :panel="6" :project="projects[5]" :image="projects[5]?.desktop"></GalleryPanelComponent>
            </div>
        </div>
    </div>
    <div v-if="type == 3" class="gallery-content_three">
        <div class="column-one">
            <GalleryPanelComponent :panel="1" :project="projects[0]" :image="projects[0]?.design_sheet"></GalleryPanelComponent>
        </div>
        <div class="column-two">
            <GalleryPanelComponent :panel="2" :project="projects[1]" :image="projects[1]?.desktop"></GalleryPanelComponent>
            <GalleryPanelComponent :panel="3" :project="projects[2]" :image="projects[2]?.portrait"></GalleryPanelComponent>
        </div>
        <div class="column-three">
            <GalleryPanelComponent :panel="4" :project="projects[3]" :image="projects[3]?.design_sheet"></GalleryPanelComponent>
        </div>
    </div>
</template>