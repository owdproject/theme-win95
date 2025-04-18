<script setup lang="ts">
const windowContent = inject<WindowContent>('windowContent')

const classes = computed(() => {
  const list = []

  if (windowContent?.padded) {
    list.push('p-2')
  }

  return list
})
</script>

<template>
  <CoreWindowContent :class="classes">
    <slot />
  </CoreWindowContent>
</template>

<style scoped lang="scss">
.owd-window__content {
  position: relative;
  display: block;
  flex: 1;

  &--centered {
    align-content: center;
    height: 100%;
  }
}
</style>