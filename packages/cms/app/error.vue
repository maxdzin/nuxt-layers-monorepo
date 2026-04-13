<script setup lang="ts">
  import type { AppError } from '#layers/core/shared/types/error'

  const props = defineProps<{
    error: AppError
  }>()

  const { t } = useI18n()

  if (props.error.status === 404) {
    useSeoMeta({
      title: t('error.page.not-found.title'),
      description: t('error.page.not-found.description'),
    })
  }
</script>

<template>
  <UApp>
    <UError :error="error" />
  </UApp>
</template>
