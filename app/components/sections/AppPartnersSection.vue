<script setup lang="ts">
const buttonText = "ХОЧУ СТАТЬ ПАРТНЕРОМ!"
const padding = "20px 50px"
</script>

<template>
    <section id="partnerSection" class="partner-section">
        <div class="wrapper content">
            <img class="partners-section-logo" src="~/assets/images/logos/logo-big.webp" alt="logo-big">
            <div class="text-content">
                <h3 class="section-subtitle">Настоящий успех приходит к тем, кто выбирает надежных партнеров. Ваш ход!
                </h3>
                <AppPartnerButton :padding="padding" :button-text="buttonText" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.partner-section {
    display: flex;
    justify-content: center;
    padding: 162px 0;
}

.content {
    display: flex;
    align-items: center;
    gap: 95px;
    justify-content: space-between;
}

.text-content {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
}

.section-subtitle {
    font-family: 'Bebas Neue Cyrillic', sans-serif;
    font-size: 48px;
    text-align: center;
    color: #0B5457;
}
</style>