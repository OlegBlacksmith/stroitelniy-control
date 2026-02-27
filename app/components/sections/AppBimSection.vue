<template>
  <section id="bimSection" class="bim-section">
    <div class="wrapper">
      <h2 class="section-title add-margin">Работаем с BIM</h2>
      <div class="content">
        <p>
          Наша компания выполняет строительный надзор с использованием
          BIM‑моделей: работаем с информационными моделями объектов, объединяем
          данные проектирования, строительства и эксплуатации, что помогает
          принимать более точные решения и снижать риски на всех этапах проекта.
        </p>
        <img
          src="~/assets/images/backgrounds/sections/bim-building.png"
          alt="bim"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bim-section {
  display: flex;
  justify-content: center;
  padding: 162px 0;
}

.content {
  display: flex;
  margin-top: 76px;
}

.content p {
  font-size: 20px;
  color: #062e30;
  font-family: "Russo One", sans-serif;
  line-height: 120%;
  
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
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
    padding: 0px 20px;
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  img {
    padding-top: 30px;
  }

  .bim-section {
    padding: 70px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .bim-section {
    padding: 60px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content p {
    font-size: 16px;
    color: #062e30;
    font-family: "Russo One", sans-serif;
    line-height: 120%;
  }
}
</style>
