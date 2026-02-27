<script setup lang="ts">
const emit = defineEmits<{
  (e: "open-order"): void;
}>();

const openOrder = () => emit("open-order");

const text = "Бесплатная консультация!";
const padding = "20px 50px";
const fontSize = "26px";
</script>

<template>
  <section id="appStartSection" class="start-section">
    <div class="wrapper content">
      <div class="start-pic">
        <img
          src="~/assets/images/backgrounds/sections/start-building.webp"
          alt="start-pic"
        />
      </div>
      <div class="text-section">
        <h1 class="main-title">Строительный Контроль</h1>
        <div class="points-w-icons">
          <div class="point">
            <p>Гарантия качества на каждом этапе строительства</p>
            <img
              class="point-icon"
              src="~/assets/icons/diploma.svg"
              alt="diploma"
            />
          </div>
          <div class="point">
            <p>
              Надежный технический надзор залог безопасности и долговечности
            </p>
            <img
              class="point-icon"
              src="~/assets/icons/helmet.svg"
              alt="helmet"
            />
          </div>
          <div class="point">
            <p>Экспертное обследование и контроль - исключаем любые риски</p>
            <img
              class="point-icon"
              src="~/assets/icons/search.svg"
              alt="search"
            />
          </div>
        </div>
        <AppOrderButton
          :button-text="text"
          :padding="padding"
          :font-size="fontSize"
          @click="openOrder"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.start-section {
  display: flex;
  justify-content: center;
  margin: 100px 0 33px 0;
}

.content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  height: 100vh;
}

.start-pic {
  height: 100%;
}

.start-pic img {
  height: 92%;
}

.main-title {
  font-size: 54px;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 400;
  color: #0b5457;
}

.text-section {
  display: flex;
  text-align: end;
  flex-direction: column;
  gap: 50px;
}

.points-w-icons {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
}

.point {
  display: flex;
  gap: 12px;
}

.point p {
  font-size: 24px;
  font-family: "Russo One", sans-serif;
  text-align: end;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
  .start-pic {
    display: none;
  }
  .content {
    gap: clamp(24px, 6vw, 48px);
  }
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
  .start-pic {
    display: none;
  }

  .content {
    justify-content: center;
    align-items: center;
    gap: clamp(24px, 10vh, 40px);
    padding: clamp(1rem, 6vw, 2rem);
  }

  .text-section {
    align-items: center;
    /* text-align: center; */
    gap: clamp(20px, 8vh, 36px);
  }

  /* .points-w-icons {
    align-items: center;
  } */
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .start-section {
    margin: clamp(70px, 12vh, 90px) 0;
  }
  .main-title {
    font-size: clamp(28px, 10vw, 40px);
    letter-spacing: 1px;
  }
  .point p {
    font-size: clamp(16px, 5vw, 20px);
    padding: 0 clamp(0.5rem, 3vw, 1rem);
  }
  .content {
    height: 90vh;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .point p {
    font-size: 16px;
  }

  .content {
    height: 90vh;
  }
}
</style>
