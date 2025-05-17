<script setup lang="ts">
defineProps<{
  window: Window
}>()
</script>

<template>
  <WindowDirectory v-bind="$props" />
</template>

<style scoped lang="scss"></style>
