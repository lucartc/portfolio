<script setup>
    import { ref,onMounted } from 'vue'

    const status = ref()

    const props = defineProps({
        message: {type: String, default: 'Status message'}
    })

    function show(){
        status.value.style.display = 'flex'
    }

    function hide(){
        status.value.style.display = 'none'
    }

    onMounted(() => {
        hide()
    })

    defineExpose({
        show
    })
</script>

<template>
    <button @click="hide" ref="status" class="contact__status">{{ props.message }}</button>
</template>