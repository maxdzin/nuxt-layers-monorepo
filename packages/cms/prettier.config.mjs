import configBase from '@nuxt-layers-monorepo/tooling/prettier'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  ...configBase,
  plugins: ['prettier-plugin-tailwindcss'],
  // tailwindStylesheet: "./app/assets/styles/main.css",
}
