<script setup>
    import { ref } from 'vue'
    import PortfolioComponent from '../components/PortfolioComponent.vue'
    import AboutMeComponent from '../components/AboutMeComponent.vue'
    import ContactComponent from '../components/ContactComponent.vue'
    import NavComponent from '../components/NavComponent.vue'
    import HeroComponent from '../components/HeroComponent.vue'

    const portfolio_component = ref()
    const about_me_component = ref()
    const contact_me_component = ref()

    function show_about_me(){
        about_me_component.value.show()
        portfolio_component.value.hide()
        contact_me_component.value.hide()
    }

    function show_contact_me(){
        about_me_component.value.hide()
        portfolio_component.value.hide()
        contact_me_component.value.show()
    }

    function show_portfolio(){
        about_me_component.value.hide()
        portfolio_component.value.show()
        contact_me_component.value.hide()
    }

    function home(){
        about_me_component.value.hide()
        portfolio_component.value.hide()
        contact_me_component.value.hide()
    }

</script>

<template>
    <div class="content">
        <NavComponent
        @about_me="show_about_me"
        @contact_me="show_contact_me"
        @portfolio="show_portfolio"
        @home="home"
        ></NavComponent>
        <div class="content-sides">
            <div class="content__left">
                <HeroComponent
                @about_me="show_about_me"
                ></HeroComponent>
            </div>
            <div class="content__right">
                <ContactComponent
                ref="contact_me_component"
                ></ContactComponent>
                <AboutMeComponent
                ref="about_me_component"
                @portfolio="show_portfolio"
                ></AboutMeComponent>
                <PortfolioComponent
                ref="portfolio_component"
                ></PortfolioComponent>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>