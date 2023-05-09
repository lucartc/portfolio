<script setup>
    import { ref, onMounted } from 'vue'
    import { send_email } from '../helpers/api.js'
    import StatusComponent from './StatusComponent.vue'

    const status = ref()
    const sender_email = ref()
    const message = ref()
    const status_message = ref()
    const success = ref(false)

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
                success.value = true
                clear_form()
            }else{
                status_message.value = 'Email could not be sent. Please, try again.'
                success.value = false
            }
            status.value.show()
        })
    }
</script>

<template>
        <div @click="hide" class="contact-me">
            <div class="contact-me__title">Contact me</div>
            <div class="contact-me__content">
                <StatusComponent :message="status_message" :success="success" ref="status"></StatusComponent>
                <div class="input-group">
                    <label class="input-group__label">Email</label>
                    <input type="text" class="input-group__input" ref="sender_email">
                </div>
                <div class="input-group">
                    <label class="input-group__label">Message</label>
                    <textarea rows="10" type="text" class="input-group__input_textarea" ref="message"></textarea>
                </div>
                <button @click="send_message" class="contact-me-content__call-to-action">Send message</button>
                <div class="contact-me-content__platforms">
                    <div class="contact-me-content-platforms__header">... or reach me in these platforms</div>
                    <div class="contact-me-content-platforms__list">
                        <a href="mailto:johndoe@fakeemail.com" target="_blank" class="contact-me-content-platforms-list__item">
                            <div class="tooltip">Click to mail me</div>
                            <img class=".contact-me-content-platforms-list-item__icon" src="../assets/gmail.svg" alt="gmail">
                        </a>
                        <a href="https://github.com/jlucartc" target="_blank" class="contact-me-content-platforms-list__item">
                            <div class="tooltip">Click to visit profile</div>
                            <img class=".contact-me-content-platforms-list-item__icon" src="../assets/github.svg" alt="github">
                        </a>
                        <a href="https://linkedin.com/in/joão-luca-ripardo-623a91142" target="_blank" class="contact-me-content-platforms-list__item">
                            <div class="tooltip">Click to visit profile</div>
                            <img class=".contact-me-content-platforms-list-item__icon" src="../assets/linkedin.svg" alt="linkedin">
                        </a>
                        <a href="" target="_blank" class="contact-me-content-platforms-list__item">
                            <div class="tooltip">Click to visit profile</div>
                            <img class=".contact-me-content-platforms-list-item__icon" src="../assets/figma.svg" alt="figma">
                        </a>
                        <a href="https://t.me/jlucartc" target="_blank" class="contact-me-content-platforms-list__item">
                            <div class="tooltip">Click to visit profile</div>
                            <img class=".contact-me-content-platforms-list-item__icon" src="../assets/telegram.svg" alt="telegram">
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style></style>