// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $meta: { name: 'core' },

  modules: ['@nuxt/eslint', '@nuxt/test-utils'],

  components: [{ path: '#layers/core/app/components', prefix: 'Core' }],

  devtools: { enabled: true },

  compatibilityDate: '2025-12-12',
})
