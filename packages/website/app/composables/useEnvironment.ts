export const useEnvironment = () => {
  const config = useRuntimeConfig()

  const test = ref<number>(0)
  const appName = computed<string>(
    () => config.public.app.name || 'Nuxt CMS Website',
  )

  return {
    test,
    appName,
  }
}
