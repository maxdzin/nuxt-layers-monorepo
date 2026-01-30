// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt-layers-monorepo/layer-core'],

  // https://nuxt.com/modules
  modules: [
    // 'nuxt-security',
    // '@pinia/nuxt',
    // '@nuxt/content',
    // '@nuxtjs/i18n',
    // '@nuxtjs/robots',
    // '@nuxt/fonts',
    // '@nuxt/icon',
    // '@nuxt/image',
    // '@nuxt/scripts',
    // '@nuxt/ui',
    // '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/hints',
  ],

  // https://nuxt.com/docs/getting-started/upgrade
  compatibilityDate: '2026-01-22',

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      htmlAttrs: {
        lang: process.env.NUXT_PUBLIC_LOCALE_DEFAULT || 'en',
      },
      link: [{ rel: 'icon', href: '/favicon.svg' }],
    },

    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  routeRules: {
    '/api/**': { cors: true },
  },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      app: {
        name: process.env.NUXT_PUBLIC_APP_NAME,
        url: process.env.NUXT_PUBLIC_APP_URL,
      },
    },
  },
})
