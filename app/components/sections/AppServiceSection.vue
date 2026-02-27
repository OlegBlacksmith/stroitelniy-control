<script setup lang="ts">
import { ServiceCardContent } from "../../../data/service-card-content";

const emit = defineEmits<{
  (e: "open-order"): void;
}>();

const openOrder = () => emit("open-order");
const items = ServiceCardContent;
</script>

<template>
  <section id="serviceSection" class="service-section">
    <div class="wrapper">
      <h2 class="section-title add-margin">Наши услуги</h2>
      <div class="cards-container">
        <AppServiceCard
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          :bg-image="item.bgImage"
          :title="item.title"
          :text="item.text"
          :points="item.points"
          @order="openOrder"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-section {
  display: flex;
  justify-content: center;
  margin-top: 33px;
  padding: 147px 0;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 115px;
  margin-top: 76px;
  justify-content: center;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
}

/* МОБИЛЬНЫЕ (767px-) */
@media (max-width: 767px) {
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px !important;
    justify-content: center;
    max-width: calc(100vw - 40px); /* ← Ширина минус отступы от viewport */
    margin: 40px auto 0; /* Центрируем с отступами */
    padding: 0 20px; /* Только у контейнера карточек */
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ */
@media (max-width: 479px) {
  .cards-container {
    max-width: calc(100vw - 30px);
    gap: 25px 15px !important;
    padding: 0 15px;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .cards-container {
    max-width: calc(100vw - 20px);
    gap: 20px 10px !important;
    padding: 0 10px;
  }
}

</style>
