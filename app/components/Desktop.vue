<script setup lang="ts">
import '#/desktop.config'

defineProps<{
  systemBar?: DesktopSystemBarConfig
}>()

const desktop = useDesktopManager()
const systemLifecycle = useSystemLifecycle()
</script>

<template>
  <CoreDesktop v-bind="$props">

    <Background/>

    <DesktopContent>
      <slot/>
    </DesktopContent>

    <SystemBar
        v-if="desktop.config.systemBar?.enabled"
    />
    <CoreApplicationRender
        v-else
    />

    <DesktopShutdown :active="systemLifecycle.isShuttingDown.value"/>

  </CoreDesktop>
</template>

<style lang="scss">
@use '../assets/styles/index.scss';

.owd-desktop {
  font-family: var(--p-font-family), serif;
  font-size: var(--p-font-size);

  button {
    font-family: var(--p-font-family), serif;
  }

  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }
}
</style>