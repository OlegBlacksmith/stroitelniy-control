<script setup lang="ts">
defineProps<{
  buttonText?: string;
  padding?: string;
  fontSize?: string;
}>();

defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button class="order-button" @click="$emit('click')">
    <p class="button-text">{{ buttonText }}</p>
  </button>
</template>

<style scoped>
.order-button {
  padding: 20px 50px;
  border-radius: 8px;
  background-color: #2d56ec;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.3);
}

.order-button:hover {
  background-color: #4c70f4;
}

.button-text {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: white;
  font-weight: 900;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  /* .order-button {
    padding: 20px 50px;
  } */

  .button-text {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: white;
    font-weight: 900;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .order-button {
    padding: 10px 30px;
  }

  .button-text {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: white;
    font-weight: 900;
  }
}
</style>
