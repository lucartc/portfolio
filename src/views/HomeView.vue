<script setup>
    import { ref } from 'vue'
    import PortfolioComponent from '../components/PortfolioComponent.vue'
    import AboutMeComponent from '../components/AboutMeComponent.vue'
    import ContactComponent from '../components/ContactComponent.vue'

    const portfolio_component = ref()
    const about_me_component = ref()
    const contact_me_component = ref()
</script>

<template>
    <div class="content">
        <div class="content-header">
            <div class="content-header-logo"></div>
            <div class="content-header-menu">
                <a href="#" class="content-header-menu__item">About me</a>
                <a href="#" class="content-header-menu__item">Portfolio</a>
                <a href="#" class="content-header-menu__item">Contact me</a>
            </div>
            <div class="content-header-dropdown">
                <div class="content-header-dropdown__logo"></div>
                <div class="content-header-dropdown__list">
                    <a href="#" class="content-header-dropdown-list__item">About me</a>
                    <a href="#" class="content-header-dropdown-list__item">Portfolio</a>
                    <a href="#" class="content-header-dropdown-list__item">Contact me</a>
                </div>
            </div>
        </div>
        <div class="content-sides">
            <div class="content__left">
                <div class="hero-section">
                    <p class="hero-section__main">Beautiful,<br>Clean &<br>Functional<br>applications</p>
                    <p class="hero-section__sub">Web & mobile developer</p>
                    <button class="hero-section__cta">Check my profile</button>
                </div>
            </div>
            <div class="content_right">
                <ContactComponent></ContactComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>