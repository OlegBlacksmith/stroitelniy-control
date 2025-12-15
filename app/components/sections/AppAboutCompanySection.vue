<template>
    <section id="aboutCompany" class="about-company-section">
        <div class="wrapper">
            <h2 class="section-title">О компании</h2>
            <div class="content">
                <img class="company-pic" src="~/assets/images/backgrounds/sections/about-pic.webp" alt="about">
                <div class="text">
                    <h3 class="section-subtitle">ООО "Строительный Контроль"</h3>
                    <div class="points-w-icons">
                        <div class="point">
                            <p>Компания "Строительный контроль" предоставляет услуги строительного контроля на всех этапах строительства, реконструкции и ремонта. </p>
                            <img class="point-icon" src="~/assets/icons/helmet.svg" alt="helmet">
                        </div>
                        <div class="point">
                            <p>Мы гарантируем тщательный надзор за качеством работ, соблюдением сроков и нормативов. Наши специалисты обладают высоким профессионализмом и большим опытом.</p>
                            <img class="point-icon" src="~/assets/icons/diploma.svg" alt="diploma">
                        </div>
                        <div class="point">
                            <p>В работе мы применяем современные инструменты и технологии, что позволяет обеспечивать надежность и прозрачность процессов контроля.</p>
                            <img class="point-icon" src="~/assets/icons/gear.svg" alt="gear">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-company-section{
    display: flex;
    justify-content: center;
    margin-top: 33px;
    padding: 75px 0 156px;
}

.content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-top: 76px;
}

.company-pic{
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
}

.section-subtitle{
    font-size: 32px;
    font-family: "Russo One", sans-serif;
    color: #062E30;
    font-weight: 600;
    text-align: end;
}

.points-w-icons{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    margin-top: 30px;
}

.point{
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: "Russo One", sans-serif;
    color: #062E30;
}

.point p{
    text-align: end;
}
</style>