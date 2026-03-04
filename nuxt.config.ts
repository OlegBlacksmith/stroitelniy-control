// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/styles/zero.css",
    "~/assets/styles/fonts.css",
    "~/assets/styles/main.css",
  ],
  plugins: [],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Allow: "/",
        BlankLine: true,
      },
    ],
    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://stroy-kontrol-ufa.ru",
      },
    ],
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === "vue-easy-lightbox",
    },
  },
  runtimeConfig: {
    orderSmtpUser: process.env.ORDER_SMTP_USER,
    orderSmtpPass: process.env.ORDER_SMTP_PASS,
    partnerSmtpUser: process.env.PARTNER_SMTP_USER,
    partnerSmtpPass: process.env.PARTNER_SMTP_PASS,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    orderEmail: process.env.NUXT_ORDER_EMAIL,
    partnerEmail: process.env.NUXT_PARTNER_EMAIL,

    public: {
      orderEmail: "",
      partnerEmail: "",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // title: "Строительный Контроль",
      meta: [
        {
          name: "description",
          content:
            "Строительный контроль в Уфе. Услуги строительного контроля на всех этапах строительства, реконструкции и ремонта. Сотрудничество и партнерство.",
        },
        { name: "author", content: "Строительный Контроль" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Строительный Контроль" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.jpg" }, // положи в public/
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
        { rel: "canonical", href: "https://stroy-kontrol-ufa.ru" },
      ],
    },
  },
  site: {
    url: "https://stroy-kontrol-ufa.ru",
    name: "Строительный Контроль",
    description:
      "Строительный контроль в Уфе. Услуги строительного контроля на всех этапах строительства, реконструкции и ремонта. Сотрудничество и партнерство.",
  },
});
