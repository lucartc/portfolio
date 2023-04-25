<script setup>
    import { ref, onMounted } from 'vue'

    const self = ref()

    function show(){
        self.value.style.display = 'flex'
    }

    function hide(){
        self.value.style.display = 'none'
    }

    const emit = defineEmits(['portfolio'])

    defineExpose({
        show,
        hide
    })

    onMounted(() => {
        hide()
    })
</script>

<template>
    <div class="about-me" ref="self">
        <div class="about-me-header">
            <div class="about-me-header__title">About me</div>
            <div class="about-me-header__sub">My experience as a developer</div>
        </div>
        <div class="about-me-main">
            <div class="about-me-main__portrait"></div>
            <div class="about-me-main-info">
                <div class="about-me-main-info__name">John Doe</div>
                <div class="about-me-main-info__exp_time">2+ years as web & mobile developer</div>
                <div class="about-me-main-info__role">Fullstack web developer</div>
            </div>
        </div>
        <div class="about-me__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae erat congue, faucibus nibh quis, convallis elit. Curabitur convallis, lorem eget malesuada cursus, nisi orci semper ipsum, a tristique nibh magna non ipsum. Aliquam lacinia at neque id dignissim. Cras eget sapien quis lacus aliquam condimentum eget eu mauris. Sed placerat magna eget nibh lacinia, a pretium leo laoreet.
        </div>
        <div class="about-me-stack">
            <div class="about-me-stack__title">My favorite stack</div>
            <div class="about-me-stack-list">
                <div class="about-me-stack-list-item">
                    <img src="../assets/ruby.svg" class="about-me-stack-list-item__logo">
                </div>
                <div class="about-me-stack-list-item">
                    <img src="../assets/rails.svg" class="about-me-stack-list-item__logo">
                </div>
                <div class="about-me-stack-list-item">
                    <img src="../assets/vue.svg" class="about-me-stack-list-item__logo">
                </div>
            </div>
        </div>
        <button @click="emit('portfolio')" class="about-me__cta">View my projects</button>
    </div>
</template>

<style></style>