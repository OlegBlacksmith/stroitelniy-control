<template>
    <header id="header" class="header">
        <div class="wrapper content">
            <img class="logo" src="~/assets/images/logos/logo-header.svg" alt="logo-header">
            <nav class="navigation-bar">
                <a class="nav-point" href="#serviceSection">УСЛУГИ</a>
                <a class="nav-point" href="#aboutCompany">О КОМПАНИИ</a>
                <a class="nav-point" href="#docsSection">ДОКУМЕНТЫ</a>
                <a class="nav-point" href="#partnerSection">ПАРТНЕРЫ</a>
            </nav>
            <div class="contacts">
                <div class="contact-item">
                    <a href="tel:+78005553535">+7 (800) 555-35-35</a>
                    <img class="contact-icon" src="~/assets/icons/phone.svg" alt="phone">
                </div>
                <div class="contact-item">
                    <a href="mailto: info@stroy-kontrol-ufa.ru">info@stroy-kontrol-ufa.ru</a>
                    <img class="contact-icon" src="~/assets/icons/mail.svg" alt="mail">
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    height: 100px;
    font-family: 'Bebas Neue Cyrillic', sans-serif;
    text-transform: uppercase;
}

.content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation-bar{
    display: flex;
    gap: 42px;
}

.nav-point{
    font-size: 24px;
}

.nav-point,
.contact-item a{
    color: #0B5457;
    transition: 0.3s;
}

.nav-point:hover,
.contact-item a:hover{
    color: #14a3a8;
}

.contacts{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
}

.contact-item{
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>