// @ts-check
import { defineConfig } from 'eslint/config'
import oxlint from 'eslint-plugin-oxlint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import vitest from '@vitest/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export const configIgnores = defineConfig({
  ignores: [
    '**/.nitro/**',
    '**/.nuxt/**',
    '**/.output/**',
    '**/.data/**',
    '**/.vscode/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/coverage/**',
    '**/pnpm*',
  ],
})

/** @type {import('eslint').Linter.Config[]} */
export const configGeneral = defineConfig({
  name: 'nuxt-monorepo/eslint-base',

  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.mts',
    '**/*.cts',
    '**/*.js',
    '**/*.jsx',
    '**/*.mjs',
    '**/*.cjs',
    '**/*.vue',
  ],

  rules: {
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        // allowInterfaces: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-console': 'warn',
    'vue/no-v-html': 'warn',
  },
})

/** @type {import('eslint').Linter.Config[]} */
export const configI18n = defineConfig({
  rules: {
    '@intlify/vue-i18n/key-format-style': [
      'error',
      'kebab-case',
      {
        allowArray: false,
        splitByDots: false,
      },
    ],
    '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
    '@intlify/vue-i18n/no-unknown-locale': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.mts', '.vue'],
      },
    ],
    '@intlify/vue-i18n/prefer-sfc-lang-attr': 'error',
    '@intlify/vue-i18n/no-raw-text': [
      'warn',
      {
        ignorePattern: '^[.+-_#:()&!*%$€©]+$',
        ignoreText: [],
      },
    ],
  },

  settings: {
    'vue-i18n': {
      localeDir: './i18n/locales/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^11.0.0',
    },
  },
})

/** @type {import('eslint').Linter.Config[]} */
export const configTest = defineConfig({
  files: ['tests/**'],

  plugins: {
    vitest,
  },

  rules: {
    ...vitest.configs.recommended.rules,
  },

  // settings: {
  //   vitest: {
  //     typecheck: true,
  //   },
  // },

  languageOptions: {
    globals: {
      ...vitest.environments.env.globals,
    },
  },
})

/**
 * Configuration for usage within a Nuxt context.
 *
 * This configuration is intended to be used by the `withNuxt` helper from
 * auto-generated `.nuxt/eslint.config.mjs` file in a Nuxt app.
 * @see {@link https://eslint.nuxt.com/packages/module}
 *
 * It will also add all best-practices rules for js/ts/vue from
 * `@nuxt/eslint-config`.
 * @see {@link https://eslint.nuxt.com/packages/config}
 *
 * @type {import('eslint').Linter.Config[]}
 */
export const configNuxt = defineConfig(
  ...configIgnores,

  ...configGeneral,

  ...vueI18n.configs['flat/recommended'],
  ...configI18n,

  configTest,

  ...oxlint.configs['flat/recommended'],

  eslintConfigPrettier,
)

export const configStandalone = createConfigForNuxt({
  features: {
    tooling: true,
  },
}).append(configIgnores, configGeneral)
