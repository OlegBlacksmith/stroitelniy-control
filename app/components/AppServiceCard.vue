<script setup lang="ts">
import type ServiceCardContent from "../../shared/models/ServiceCard.model";

const props = defineProps<ServiceCardContent>();

const emit = defineEmits<{
  (e: "order"): void;
}>();

const buttonText = "ОСТАВИТЬ ЗАЯВКУ";
const padding = "20px 50px";
</script>

<template>
  <div class="card-body">
    <div class="card-bg" :style="{ '--bg-image': `url(${props.bgImage})` }" />
    <h3 class="card-title">{{ props.title }}</h3>
    <div v-if="props.points" class="points-list">
      <div v-for="p in props.points" :key="p.id" class="point-w-bullit">
        <img
          class="point-bullit"
          src="~/assets/icons/bullit.svg"
          alt="bullit"
        />
        <p class="point-text">{{ p.text }}</p>
      </div>
    </div>
    <div class="card-text">
      <p>
        {{ props.text }}
      </p>
    </div>
    <AppOrderButton
      :padding="padding"
      :button-text="buttonText"
      @click="emit('order')"
    />
  </div>
</template>

<style scoped>
.card-body {
  position: relative;
  padding: 75px 33px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 516px;
  height: 516px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.3);
}

.card-bg {
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background: var(--bg-image) no-repeat center/cover;
  filter: blur(2px) brightness(0.4);
  z-index: 1;
}

.card-body > *:not(.card-bg) {
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: 32px;
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 700;
}

.points-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.point-w-bullit {
  display: flex;
  gap: 10px;
  align-items: center;
}

.point-text,
.card-text {
  color: white;
  font-size: 18px;
  font-family: "Russo One", sans-serif;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
  .card-body {
    width: 100vw;
  }
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
  .card-body {
    width: 100vw;
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .card-body {
    width: 100vw;
  }

  .point-text,
  .card-text {
    font-size: 14px;
    font-family: "Russo One", sans-serif;
  }

  .card-title,
  h3 {
    font-size: 24px;
    color: white;
    font-family: "PT Sans Narrow", sans-serif, sans-serif;
  }

  .card-body > *:not(.card-bg){
    padding-bottom: 10px;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .card-body {
    width: 100vw;
  }

  .point-text,
  .card-text {
    font-size: 16px;
    font-family: "Russo One", sans-serif;
  }

  .card-title {
    font-size: 28px;
    color: white;
    font-family: "PT Sans Narrow", sans-serif, sans-serif;
    gap: 10px;
    padding-bottom: 10px;
  }
}
</style>
