<script setup lang="ts">
const emit = defineEmits<{
  (e: "open-partner"): void;
}>();

const openPartner = () => emit("open-partner");

const buttonText = "ХОЧУ СТАТЬ ПАРТНЕРОМ!";
const padding = "20px 50px";
</script>

<template>
  <section id="partnerSection" class="partner-section">
    <div class="wrapper content">
      <img
        class="partners-section-logo"
        src="~/assets/images/logos/logo-big.webp"
        alt="logo-big"
      />
      <div class="text-content">
        <h3 class="section-subtitle">
          Настоящий успех приходит к тем, кто выбирает надежных партнеров. Ваш
          ход!
        </h3>
        <AppPartnerButton
          :padding="padding"
          :button-text="buttonText"
          @click="openPartner"
        />
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
  font-family: "Bebas Neue Cyrillic", sans-serif;
  font-size: 48px;
  text-align: center;
  color: #0b5457;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
  .partner-section {
    padding: 60px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
  .content {
    display: flex;
    flex-direction: column;
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .section-subtitle {
    font-family: "PT Sans Narrow", sans-serif;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    color: #0b5457;
  }

  .partners-section-logo {
    height: 100px;
  }

  .partner-section {
    padding: 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .partner-section {
    padding: 30px;
  }

  .section-subtitle {
    font-family: "Bebas Neue Cyrillic", sans-serif;
    font-size: 32px;
    text-align: center;
    color: #0b5457;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}
</style>
