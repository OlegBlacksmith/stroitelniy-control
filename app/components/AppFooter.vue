<template>
  <footer id="footer" class="footer">
    <div class="wrapper content">
      <NuxtLink href="/" class="footer-link">
        <img
          src="~/assets/images/logos/logo-footer.svg"
          alt="logo-footer"
          class="logo-footer"
        />
      </NuxtLink>
      <div class="footer-links">
        <div class="contact-item">
          <a href="tel:+78005553535">+7 (800) 555-35-35</a>
          <img
            class="contact-icon"
            src="~/assets/icons/phone-white.svg"
            alt="phone"
          />
        </div>
        <div class="contact-item">
          <a href="mailto: info@stroy-kontrol-ufa.ru"
            >info@stroy-kontrol-ufa.ru</a
          >
          <img
            class="contact-icon"
            src="~/assets/icons/mail-white.svg"
            alt="mail"
          />
        </div>
        <a href="">Документы и нормативные акты</a>
        <NuxtLink href="/documents" class="doc-link">
          <p>Политика обработки перс. данных</p>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  background-color: #2f2f2f;
  padding: 30px 0;
}

.content {
  display: flex;
  justify-content: space-between;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: flex-end;
}

.footer-links a,
.contact-item a {
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 16px;
}

.footer-links a:hover,
.contact-item a:hover {
  color: #d5cadf;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mobile-break {
  display: none !important;
}

/* ПЛАНШЕТ (992px-) */
@media (max-width: 991px) {
}

/* МОБИЛЬНЫЕ (767px-) — СКРЫТЬ КАРТИНКУ */
@media (max-width: 767px) {
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .logo-footer {
    padding-left: 3px;
  }

  .mobile-break {
    display: none;
  }
}

/* КРОХОТНЫЕ */
@media (max-width: 359px) {
  .footer-links a,
  .contact-item a {
    color: white;
    font-family: "Russo One", sans-serif;
    font-size: 13px;
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: flex-end;
  padding-right: 12px;
}

.mobile-break {
  display: block;
}
</style>
