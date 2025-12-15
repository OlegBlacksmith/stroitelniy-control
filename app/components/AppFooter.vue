<template>
    <footer id="footer" class="footer">
        <div class="wrapper content">
            <img src="~/assets/images/logos/logo-footer.svg" alt="logo-footer">
            <div class="footer-links">
                <div class="contact-item">
                    <a href="tel:+78005553535">+7 (800) 555-35-35</a>
                    <img class="contact-icon" src="~/assets/icons/phone-white.svg" alt="phone">
                </div>
                <div class="contact-item">
                    <a href="mailto: info@stroy-kontrol-ufa.ru">info@stroy-kontrol-ufa.ru</a>
                    <img class="contact-icon" src="~/assets/icons/mail-white.svg" alt="mail">
                </div>
                <a href="">Политика конфиденциальности</a>
                <a href="">Документы и нормативные акты</a>
                <a href="">Политика обработки персональных данных</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer{
    display: flex;
    justify-content: center;
    background-color: #2F2F2F;
    padding: 30px 0;
}

.content{
    display: flex;
    justify-content: space-between;
}

.footer-links{
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-end;
}

.footer-links a,
.contact-item a{
    color: white;
    font-family: 'Bebas Neue Cyrillic', sans-serif;
    font-size: 16px;
}

.footer-links a:hover,
.contact-item a:hover{
    color: #d5cadf;
}

.contact-item{
    display: flex;
    align-items: center;
    gap: 4px;
}
</style>