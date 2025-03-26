<script setup lang="ts">
defineProps<{
  application: ApplicationController
  arrow?: boolean
}>()
</script>

<template>
  <SystemBarMenuListItem
      class="owd-system-bar__menu__item"
      primary
      density="compact"
      :arrow="arrow"
      close-on-click
  >
    {{ application.config.name }}
  </SystemBarMenuListItem>
</template>

<style scoped lang="scss">
.owd-system-bar__menu__item {
  cursor: pointer;
}
</style>