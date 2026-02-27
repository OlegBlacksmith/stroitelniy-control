<script setup lang="ts">
import { AccordionItems } from "../../../data/accordion-items-content";
const laws = AccordionItems;
</script>

<template>
  <section id="lawSection" class="law-section">
    <div class="wrapper add-padding">
      <h2 class="section-title">Законы и акты</h2>
      <div class="accordion-items-container">
        <AppAccordion
          v-for="l in laws"
          :id="l.id"
          :key="l.id"
          :title="l.title"
          :text="l.text"
          :link="l.link"
          :update="l.update"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-items-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 49px;
}
.law-section {
  display: flex;
  justify-content: center;
  padding: 162px 0;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .law-section {
    display: flex;
    justify-content: center;
    padding: 60px 0;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .law-section {
    display: flex;
    justify-content: center;
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  .add-padding {
    padding: 20px;
  }
}
</style>
