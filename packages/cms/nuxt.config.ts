// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    // '@nuxt/hints',
  ],

  compatibilityDate: '2025-12-12',

  devtools: { enabled: true },
})
