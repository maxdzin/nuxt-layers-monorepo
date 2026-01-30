// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt-layers-monorepo/layer-core'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    // '@nuxt/hints',
  ],

  compatibilityDate: '2026-01-22',

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      app: {
        name: process.env.NUXT_PUBLIC_APP_NAME,
        url: process.env.NUXT_PUBLIC_APP_URL,
      },

      website: {
        url: process.env.NUXT_PUBLIC_WEBSITE_URL,
      },
    },
  },
})
