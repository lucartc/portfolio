<script setup>
    import { ref } from 'vue'
    const list = ref()

    function toggle_list(){
        if(list.value.style.display == 'none'){
            list.value.style.display = 'flex'
        }else{
            list.value.style.display = 'none'
        }
    }
</script>

<template>
        <div class="navbar">
            <div class="navbar__left">
                <div class="navbar__icon"></div>
                <div class="navbar__menu">
                    <a href="#about_me" class="navbar-menu__item">About me</a>
                    <a href="#portfolio" class="navbar-menu__item">Portfolio</a>
                    <a href="#contact_me" class="navbar-menu__item">Contact me</a>
                </div>
            </div>
            <div class="navbar__right">
                <div class="navbar__button-list">
                    <a class="navbar-button-list__item" href="https://github.com/jlucartc" target="_blank">
                        <img class="navbar-button-list-item__icon" src="../assets/github.svg" alt="">
                    </a>
                    <a class="navbar-button-list__item" href="https://linkedin.com/in/joão-luca-ripardo-623a91142" target="_blank">
                        <img class="navbar-button-list-item__icon" src="../assets/linkedin.svg" alt="">
                    </a>
                </div>
                <div class="navbar__dropdown">
                    <div @click="toggle_list" class="navbar-dropdown__icon"></div>
                    <div class="navbar-dropdown__list" ref="list">
                        <a href="#about_me" @click="toggle_list" class="navbar-dropdown-list__item">About me</a>
                        <a href="#portfolio" @click="toggle_list" class="navbar-dropdown-list__item">Portfolio</a>
                        <a href="#contact_me" @click="toggle_list" class="navbar-dropdown-list__item">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
</template>