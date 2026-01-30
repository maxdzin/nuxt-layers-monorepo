<script setup lang="ts">
  const { appName } = useEnvironment()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ appName }}
    <NuxtWelcome />
  </div>
</template>
