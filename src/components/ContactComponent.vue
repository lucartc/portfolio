<script setup>
    import { ref, onMounted } from 'vue'
    import { send_email } from '../helpers/api.js'
    import StatusComponent from './StatusComponent.vue'

    const self = ref()
    const status = ref()
    const sender_email = ref()
    const message = ref()
    const status_message = ref()

    function show(){
        self.value.style.display = 'flex'
    }

    function hide(){
        self.value.style.display = 'none'
    }

    function show_status(){
        status.value.show()
    }

    function clear_form(){
        sender_email.value.value = null
        message.value.value = null
    }

    function send_message(){
        let content = {
            sender_email: sender_email.value.value,
            message: message.value.value
        }

        send_email(content)
        .then(data => {
            if(data.ok){
                status_message.value = 'Your message was sent!'
                clear_form()
            }else{
                status_message.value = 'Email could not be sent. Please, try again.'
            }
            status.value.show()
        })
    }

    defineExpose({
        show,
        hide
    })

    onMounted(() => {
        hide()
    })
</script>

<template>
        <div class="contact" ref="self">
            <StatusComponent :message="status_message" ref="status"></StatusComponent>
            <div class="contact-header">
                <div class="contact-header__title">Contact me</div>
                <div class="contact-header__sub">Send me a message!</div>
            </div>
            <div class="contact-form">
                <div class="contact-form__sender-email">
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input ref="sender_email" type="text" class="input-group__input">
                    </div>
                </div>
                <div class="contact-form__message">
                    <div class="input-group">
                        <label class="input-group__label">Message</label>
                        <textarea ref="message" rows="8" cols="10" type="text" class="input-group__input_textarea"></textarea>
                    </div>
                </div>
                <button @click="send_message" class="contact-form__submit">Send message</button>
            </div>
            <div class="contact-controls">
                <div class="contact-controls__title">...Or contact me through these</div>
                <div class="contact-controls-list">
                    <div class="contact-controls-list-item">
                        <img src="../assets/gmail.svg" class="contact-controls-list-item__icon">
                    </div>
                    <div class="contact-controls-list-item">
                        <img src="../assets/github.svg" class="contact-controls-list-item__icon">
                    </div>
                    <div class="contact-controls-list-item">
                        <img src="../assets/linkedin.svg" class="contact-controls-list-item__icon">
                    </div>
                    <div class="contact-controls-list-item">
                        <img src="../assets/figma.svg" class="contact-controls-list-item__icon">
                    </div>
                    <div class="contact-controls-list-item">
                        <img src="../assets/telegram.svg" class="contact-controls-list-item__icon">
                    </div>
                    <div class="contact-controls-list-item">
                        <img src="../assets/discord.svg" class="contact-controls-list-item__icon">
                    </div>
                </div>
            </div>
        </div>
</template>

<style></style>