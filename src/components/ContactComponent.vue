<script setup>
    import { ref, onMounted } from 'vue'

    const self = ref()

    function show(){
        self.value.style.display = 'flex'
    }

    function hide(){
        self.value.style.display = 'none'
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
            <button class="contact__status">Your message was sent!</button>
            <div class="contact-header">
                <div class="contact-header__title">Contact me</div>
                <div class="contact-header__sub">Send me a message!</div>
            </div>
            <div class="contact-form">
                <div class="contact-form__sender-email">
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input type="text" class="input-group__input">
                    </div>
                </div>
                <div class="contact-form__message">
                    <div class="input-group">
                        <label class="input-group__label">Message</label>
                        <textarea rows="8" cols="10" type="text" class="input-group__input_textarea"></textarea>
                    </div>
                </div>
                <button class="contact-form__submit">Send message</button>
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