<script setup lang="ts">
const desktop = useDesktopManager()

const classes = computed(() => {
  const list = ['owd-desktop__content']

  if (desktop.config.systemBar?.position) {
    list.push(
        `owd-desktop__content--system-bar-position-${desktop.config.systemBar.position}`
    )
  }

  return list
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.owd-desktop__content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &--system-bar-position-top {
    height: calc(100% - var(--p-system-bar-height));
    top: var(--p-system-bar-height);
  }

  &--system-bar-position-bottom {
    height: calc(100% - var(--p-system-bar-height));
  }
}
</style>