<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest(".mobile-menu-btn") &&
      !target.closest(".mobile-menu")
    ) {
      closeMobileMenu();
    }
  });
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <header id="header" class="header">
    <div class="wrapper content">
      <NuxtLink href="/" class="logo-link">
        <img
          class="logo"
          src="~/assets/images/logos/logo-header.svg"
          alt="logo-header"
        />
      </NuxtLink>
      <nav class="navigation-bar">
        <a class="nav-point" href="#serviceSection">УСЛУГИ</a>
        <a class="nav-point" href="#aboutCompany">О КОМПАНИИ</a>
        <a class="nav-point" href="#docsSection">ДОКУМЕНТЫ</a>
        <a class="nav-point" href="#partnerSection">ПАРТНЕРЫ</a>
      </nav>
      <div class="contacts">
        <div class="contact-item">
          <a href="tel:+78005553535">+7 (800) 555-35-35</a>
          <img
            class="contact-icon"
            src="~/assets/icons/phone.svg"
            alt="phone"
          />
        </div>
        <div class="contact-item">
          <a href="mailto:info@stroy-kontrol-ufa.ru"
            >info@stroy-kontrol-ufa.ru</a
          >
          <img class="contact-icon" src="~/assets/icons/mail.svg" alt="mail" />
        </div>
      </div>
      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ active: isMobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <nav class="mobile-nav">
        <a
          class="mobile-nav-point"
          href="#serviceSection"
          @click="closeMobileMenu"
          >УСЛУГИ</a
        >
        <a
          class="mobile-nav-point"
          href="#aboutCompany"
          @click="closeMobileMenu"
          >О КОМПАНИИ</a
        >
        <a class="mobile-nav-point" href="#docsSection" @click="closeMobileMenu"
          >ДОКУМЕНТЫ</a
        >
        <a
          class="mobile-nav-point"
          href="#partnerSection"
          @click="closeMobileMenu"
          >ПАРТНЁРЫ</a
        >
      </nav>
      <div class="mobile-contacts">
        <div class="mobile-contact-item">
          <a href="tel:+78005553535">+7 (800) 555-35-35</a>
          <img
            class="mobile-contact-icon"
            src="~/assets/icons/phone.svg"
            alt="phone"
          />
        </div>
        <div class="mobile-contact-item">
          <a href="mailto:info@stroy-kontrol-ufa.ru"
            >info@stroy-kontrol-ufa.ru</a
          >
          <img
            class="mobile-contact-icon"
            src="~/assets/icons/mail.svg"
            alt="mail"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  height: 100px;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  width: 100vw;
}

.content {
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.navigation-bar {
  display: flex;
  gap: 42px;
}

.nav-point {
  font-size: 16px;
}

.nav-point,
.contact-item a {
  color: #0b5457;
  transition: 0.3s;
}

.nav-point:hover,
.contact-item a:hover {
  color: #14a3a8;
}

.contacts {
  display: flex;
  font-size: 13px;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* БАЗОВЫЕ - скрыты на десктопе */
.mobile-menu,
.mobile-menu-btn {
  display: none;
}

/* БОЛЬШИЕ МОБИЛЬНЫЕ (768px-) */
@media (max-width: 767px) {
  .header {
    height: clamp(70px, 12vw, 90px);
    padding: 0 clamp(1rem, 4vw, 2rem);
    z-index: 1003 !important; /* Хедер выше всего */
  }

  .content {
    flex-wrap: nowrap;
    padding: 0 clamp(0.75rem, 3vw, 1.25rem);
    gap: clamp(1rem, 5vw, 2rem);
  }

  .logo {
    height: clamp(40px, 10vw, 60px);
    width: auto;
    flex-shrink: 0;
  }

  .navigation-bar {
    display: none !important;
  }

  .contacts {
    display: none !important;
  }

  .contact-item a {
    font-size: clamp(12px, 2.8vw, 14px);
    white-space: nowrap;
  }

  /* ★ КНОПКА - САМЫЙ ВЫСОКИЙ Z-INDEX ★ */
  .mobile-menu-btn {
    display: flex !important;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0px;
    width: 32px !important;
    height: 24px !important;
    z-index: 1004 !important; /* ★ Выше всего! */
    position: relative !important; /* В контексте .content */
  }

  .mobile-menu-btn span {
    display: block !important;
    width: 100%;
    height: 4px;
    background: #0b5457 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
    position: relative;
  }

  .mobile-menu-btn:hover span {
    background: #14a3a8;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  /* МЕНЮ - ниже кнопки */
  .mobile-menu.open {
    display: flex !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important; /* ← Добавь это */
    width: 100vw !important;
    height: 100vh !important;
    background: rgb(250, 255, 255) !important;
    z-index: 1000 !important; /* Ниже кнопки (1004) и хедера (1003) */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 20px;
    margin: 0 !important;
    box-sizing: border-box !important;
    animation: slideIn 0.3s ease-out;
  }

  /* Остальные стили без изменений */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .mobile-nav-point {
    font-size: 24px;
    color: #0b5457;
    text-decoration: none;
    padding: 15px;
    transition: color 0.3s;
  }

  .mobile-nav-point:hover {
    color: #14a3a8;
  }

  .mobile-contacts {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    font-size: 16px;
  }

  .mobile-contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0b5457;
  }

  .mobile-contact-icon {
    width: 20px;
    height: 20px;
  }
}

/* МАЛЕНЬКИЕ ТЕЛЕФОНЫ (479px-) */
@media (max-width: 479px) {
  .content {
    flex-direction: row;
    padding: 0.75rem clamp(0.5rem, 4vw, 1rem);
    gap: clamp(0.75rem, 6vw, 1.5rem);
    justify-content: space-between;
  }

  .logo {
    height: clamp(32px, 12vw, 48px);
  }
}

/* КРОХОТНЫЕ ЭКРАНЫ */
@media (max-width: 359px) {
  .content {
    padding: 0.5rem 0.4rem;
  }
}
</style>
