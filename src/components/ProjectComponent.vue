<script setup>

    const props = defineProps({
        title: { type: String, default: 'My project' },
        icon: { type: String, default: '' },
        description: { type: String, default: 'Brief project description' },
        github_link: { type: String, default: 'https://github.com/jlucartc' },
        live_link: { type: String, default: '' },
        play_store_link: { type: String, default: '' },
        chrome_web_store_link: { type: String, default: '' },
        tags: { type: Array , default: []}
    })

    function has_github_link(){
        return props.github_link != null && props.github_link.length > 0
    }

    function has_live_link(){
        return props.live_link != null && props.github_link.length > 0
    }

    function has_play_store_link(){
        return props.play_store_link != null && props.github_link.length > 0
    }

    function has_chrome_web_store_link(){
        return props.chrome_web_store_link != null && props.github_link.length > 0
    }

</script>

<template>
    <div class="portfolio-list-item">
    <div class="portfolio-list-item-info">
        <div class="portfolio-list-item-info__title">{{ props.title }}</div>
        <div class="portfolio-list-item-info-main">
            <img :src="props.icon" class="portfolio-list-item-info-main__icon">
            <div class="portfolio-list-item-info-main__description">{{ props.description }}</div>
        </div>
    </div>
    <div class="portfolio-list-item-controls">
        <a v-if="has_github_link()" target="_blank" class="portfolio-list-item-controls-item" :href="props.github_link">
            <img class="portfolio-list-item-controls-item__icon" src="../assets/github.svg" alt="">
        </a>
        <a v-if="has_live_link()" target="_blank" class="portfolio-list-item-controls-item" :href="props.live_link">
            <img class="portfolio-list-item-controls-item__icon" src="../assets/live.svg" alt="">
        </a>
        <a v-if="has_play_store_link()" target="_blank" class="portfolio-list-item-controls-item" :href="props.play_store_link">
            <img class="portfolio-list-item-controls-item__icon" src="../assets/play_store.svg" alt="">
        </a>
        <a v-if="has_chrome_web_store_link()" target="_blank" class="portfolio-list-item-controls-item" :href="props.chrome_web_store_link">
            <img class="portfolio-list-item-controls-item__icon" src="../assets/chrome.svg" alt="">
        </a>
    </div>
</div>
</template>