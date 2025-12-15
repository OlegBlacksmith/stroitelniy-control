<template>
    <section id="startSection" class="start-section">
        <div class="wrapper content">
            <div class="start-pic">
                <img src="~/assets/images/backgrounds/sections/start-building.webp" alt="start-pic">
            </div>
            <div class="text-section">
                <h1 class="main-title">Строительный Контроль</h1>
                <div class="points-w-icons">
                    <div class="point">
                        <p>Гарантия качества на каждом этапе строительства</p>
                        <img class="point-icon" src="~/assets/icons/diploma.svg" alt="diploma">
                    </div>
                    <div class="point">
                        <p>Надежный технический надзор залог безопасности и долговечности</p>
                        <img class="point-icon" src="~/assets/icons/helmet.svg" alt="helmet">
                    </div>
                    <div class="point">
                        <p>Экспертное обследование и контроль - исключаем любые риски</p>
                        <img class="point-icon" src="~/assets/icons/search.svg" alt="search">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.start-section{
    display: flex;
    justify-content: center;
    margin-top: 33px;
}

.content{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    height: 100vh;
}

.start-pic{
    height: 100%;
}

.start-pic img{
    height: 100%;
}

.main-title{
    font-size: 58px;
    font-weight: 400;
    font-family: 'Bebas Neue Cyrillic', sans-serif;
    color: #0B5457;
    margin-bottom: 62px;
}

.text-section{
    display: flex;
    text-align: end;
    flex-direction: column;
}

.points-w-icons{
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
}

.point{
    display: flex;
    gap: 12px;
}

.point p{
    font-size: 24px;
    font-family: "Russo One", sans-serif;
    text-align: end;
}

</style>