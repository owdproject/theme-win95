<script setup lang="ts">
const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
  src: string
}>()
</script>

<template>
  <Window v-bind="$props">
    <iframe :src="src" />
  </Window>
</template>

<style scoped lang="scss">
:deep(.owd-window__content) {
  height: 100%;
}

iframe {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>