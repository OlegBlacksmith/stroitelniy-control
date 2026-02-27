<template>
  <section id="aboutCompany" class="about-company-section ">
    <div class="wrapper">
      <h2 class="section-title">О компании</h2>
      <div class="content">
        <img
          class="company-pic"
          src="~/assets/images/backgrounds/sections/about-pic.webp"
          alt="about"
        />
        <div class="text">
          <h3 class="section-subtitle">ООО "Строительный Контроль"</h3>
          <div class="points-w-icons">
            <div class="point">
              <p>
                Компания "Строительный контроль" предоставляет услуги
                строительного контроля на всех этапах строительства,
                реконструкции и ремонта.
              </p>
              <img
                class="point-icon"
                src="~/assets/icons/helmet.svg"
                alt="helmet"
              />
            </div>
            <div class="point">
              <p>
                Мы гарантируем тщательный надзор за качеством работ, соблюдением
                сроков и нормативов. Наши специалисты обладают высоким
                профессионализмом и большим опытом.
              </p>
              <img
                class="point-icon"
                src="~/assets/icons/diploma.svg"
                alt="diploma"
              />
            </div>
            <div class="point">
              <p>
                В работе мы применяем современные инструменты и технологии, что
                позволяет обеспечивать надежность и прозрачность процессов
                контроля.
              </p>
              <img
                class="point-icon"
                src="~/assets/icons/gear.svg"
                alt="gear"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-company-section {
  display: flex;
  justify-content: center;
  margin-top: 33px;
  
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 76px;
}

.company-pic {
  box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.section-subtitle {
  font-size: 32px;
  font-family: "Russo One", sans-serif;
  color: #062e30;
  font-weight: 600;
  text-align: end;
}

.points-w-icons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin-top: 30px;
}

.point {
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: "Russo One", sans-serif;
  font-size: 18px;
  color: #062e30;
}

.point p {
  text-align: end;
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
  .about-company-section {
    padding: 0 20px; /* 20px от стенок секции */
  }
  
  .wrapper {
    max-width: calc(100vw - 40px); /* Контейнер уже viewport */
    margin: 0 auto;
    padding: 0;
  }
  
  .company-pic {
    width: 100% !important; /* 100% контейнера, не viewport */
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .points-w-icons {
    padding-right: 10px; /* Иконки не прилипают справа */
  }

  .point{
    font-size: 16px;
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .about-company-section {
    padding: 60px 15px; /* 15px отступы */
  }
  
  .wrapper {
    max-width: calc(100vw - 30px);
  }
  
  .points-w-icons {
    padding-right: 8px;
  }

  .point{
    font-size: 16px;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .about-company-section {
    padding: 40px 10px;
  }
  
  .wrapper {
    max-width: calc(100vw - 20px);
  }

  .point{
    font-size: 16px;
  }
}
</style>
