<script setup>
    const emit = defineEmits(['about_me','contact_me','portfolio','home'])
</script>

<template>
        <div class="content-header">
            <div @click="emit('home')" class="content-header-logo"></div>
            <div class="content-header-menu">
                <a href="#" @click="emit('about_me')" class="content-header-menu__item">About me</a>
                <a href="#" @click="emit('portfolio')" class="content-header-menu__item">Portfolio</a>
                <a href="#" @click="emit('contact_me')" class="content-header-menu__item">Contact me</a>
            </div>
            <div class="content-header-dropdown">
                <div class="content-header-dropdown__logo"></div>
                <div class="content-header-dropdown__list">
                    <a href="#" @click="emit('about_me')" class="content-header-dropdown-list__item">About me</a>
                    <a href="#" @click="emit('portfolio')" class="content-header-dropdown-list__item">Portfolio</a>
                    <a href="#" @click="emit('contact_me')" class="content-header-dropdown-list__item">Contact me</a>
                </div>
            </div>
        </div>
</template>