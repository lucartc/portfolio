<script setup>
    import { ref,onMounted } from 'vue'

    const status = ref()

    const props = defineProps({
        message: {type: String, default: 'Status message'},
        success: {type: Boolean, default: false}
    })

    function show(){
        status.value.style.display = 'flex'
    }

    function hide(){
        status.value.style.display = 'none'
    }

    function message_status(){
        if(props.success){
            return 'status__success'
        }else{
            return 'status__error'
        }
    }

    onMounted(() => {
        hide()
    })

    defineExpose({
        show
    })
</script>

<template>
    <button @click="hide" ref="status" :class="message_status()">{{ props.message }}</button>
</template>