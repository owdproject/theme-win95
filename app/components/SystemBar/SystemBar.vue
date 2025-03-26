<script setup lang="ts">
const desktop = useDesktopManager()
const systemBar = useSystemBar(desktop.config.systemBar)

const classes = computed(() => {
  const list = ['owd-desktop__system-bar']

  if (systemBar.config.position) {
    list.push(
        'owd-desktop__system-bar--position',
        `owd-desktop__system-bar--position-${systemBar.config.position}`
    )
  }

  return list
})
</script>

<template>
  <Toolbar :class="classes">

    <SystemBarButtonStart
        v-if="systemBar.config?.startButton"
    />

    <SystemBarWindows />

  </Toolbar>
</template>

<style scoped lang="scss">
.owd-desktop__system-bar {
  position: relative;
  height: var(--owd-win95-system-bar-height);
  padding: var(--owd-win95-gap);
  box-sizing: border-box;

  .owd-button {
    margin-right: var(--owd-win95-gap);
  }

  &--position {
    position: absolute;

    &-top, &-bottom {
      width: 100%;
    }

    &-top {
      top: 0;
    }

    &-bottom {
      bottom: 0;
    }
  }
}
</style>