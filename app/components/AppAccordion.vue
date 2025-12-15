<script setup lang="ts">
import type AccordionItem from '../../shared/models/AccordionItem.model'
const props = defineProps<AccordionItem>()

const openId = ref<number | null>(null)

const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <button class="outter-container" type="button" @click="toggle(props.id)">
    <div class="accordion-item">
      <div class="accordion-header">
        <span class="accordion-index">{{ props.id }}.</span>
        <span class="accordion-title">{{ props.title }}</span>
        <div class="accordion-icon" :class="{ 'is-open': openId === props.id }">
          <img src="~/assets/icons/arrow-up.svg" alt="^">
        </div>
      </div>

      <div class="accordion-body-wrapper" :class="{ 'is-open': openId === props.id }">
        <div class="accordion-body">
          <p class="accordion-text">
            {{ props.text }}
          </p>
        </div>

        <div class="link">
          <p class="link_prefix">Более подробная информация доступна по ссылке:</p>
          <a class="link_a" :href="props.link">{{ props.link }}</a>
        </div>
      </div>
    </div>
    <div class="last-update">
      <p><b>Последнее обновление:</b></p>
      <p class="link_prefix">{{ props.update }}</p>
    </div>
  </button>
</template>

<style scoped>
.outter-container{
  background-color: unset;
  border-radius: 12px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  outline: none;
}

.outter-container:hover{
  background-color: #0b545744;
}

.accordion-item {
  border-bottom: 1px solid #000;
}

.accordion-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background: transparent;
  border: none;
}

.accordion-index {
  font-family: 'Bebas Neue Cyrillic', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-right: 4px;
}

.accordion-title {
  font-family: 'Bebas Neue Cyrillic', sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
}

.accordion-icon {
  margin-left: auto;
  transition: transform 0.2s ease;
  font-size: 16px;
}

.accordion-icon.is-open {
  transform: rotate(180deg);
}

.accordion-body-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.accordion-body-wrapper.is-open {
  max-height: 500px;
}

.accordion-body {
  padding-top: 8px;
}

.accordion-text {
  font-family: "Russo One", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
}

.link{
  display: flex;
  gap: 5px;
  padding: 12px 0 8px 0;
}

.link_prefix,
.link_a,
.last-update p {
  font-family: "Russo One", sans-serif;
  font-size: 12px;
  line-height: 1.5;
}

.link_prefix {
  font-weight: 600;
}

.link_a {
  color: blueviolet;
  transition: 0.2s;
}

.link_a:hover {
  color: #343434;
  text-decoration: underline;
}

.last-update{
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  padding: 12px 0 8px 0;
}
</style>