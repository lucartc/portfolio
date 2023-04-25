<script setup>
    const emit = defineEmits(['about_me'])
</script>

<template>
    <div class="hero-section">
        <p class="hero-section__main">Beautiful,<br>Clean &<br>Functional<br>applications</p>
        <p class="hero-section__sub">Web & mobile developer</p>
        <button class="hero-section__cta" @click="emit('about_me')">Check my profile</button>
    </div>
</template>