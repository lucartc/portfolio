<script setup></script>

<template>
    <div class="about-me">
        <div class="about-me__title">About me</div>
        <div class="about-me__content">
            <div class="about-me-content__card">
                <div class="about-me-content-card__left-column">
                    <div class="about-me-content-card__image"></div>
                </div>
                <div class="about-me-content-card__right-column">
                    <div class="about-me-content-card__header">
                        <div class="about-me-content-card-header__title">Hi, I'm Luca!</div>
                        <div class="about-me-content-card-header__subtitle">2+ years of experience with web and mobile development</div>
                        <div class="about-me-content-card-header__subtitle">Fullstack developer</div>
                    </div>
                    <div class="about-me-content-card__description">
                        I'm a web developer with experience with HTML, CSS and Javascript. Besides web apps,
                        I've also developed mobile apps with Android, Ionic and Flutter. My background is mainly
                        of a backend developer, dealing with database query writing and optimization, VPS server configuration,
                        REST API creation, etc.<br><br>My development philosophy is centered around keeping a small and versatile set of tools,
                        which allow me to tackle the majority of possible projects demanded. Since it's a small set, the workflow needed to develop
                        and application will also be simple, with each tool playing a specific role in the project. You will know
                        which tools I use in the next section.
                    </div>
                </div>
            </div>
            <div class="about-me-content__stack">
                <div class="about-me-content-stack__title">My stack</div>
                <div class="about-me-content-stack__list">
                    <div class="about-me-content-stack-list__item">
                        <div class="tooltip">Ruby</div>
                        <img src="../assets/ruby.svg" alt="" class="about-me-content-stack-list-item__icon">
                    </div>
                    <div class="about-me-content-stack-list__item">
                        <div class="tooltip">Rails</div>
                        <img src="../assets/rails.svg" alt="" class="about-me-content-stack-list-item__icon">
                    </div>
                    <div class="about-me-content-stack-list__item">
                        <div class="tooltip">Vue.js</div>
                        <img src="../assets/vue.svg" alt="" class="about-me-content-stack-list-item__icon">
                    </div>
                </div>
                <div class="about-me-content-stack__description">
                    My stack is composed of three tools: Ruby as a scripting language, Rails as an API framework and Vue.js as a frontend application framework.
                    These three tools are more than enough to develop most web applications, and I try to focus on them since it would take more time to learn and manage
                    a wider set of tools. If you want to see projects where I use these and other tools, check my portfolio next!
                </div>
            </div>
            <a href="#portfolio" class="about-me-content__call-to-action">Check my projects!</a>
        </div>
    </div>
</template>

<style></style>