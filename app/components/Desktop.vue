<script setup lang="ts">
import '#/desktop.config'

defineProps<{
  systemBar?: SystemBarConfig
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

    <DesktopShutdown :active="systemLifecycle.isShuttingDown.value"  />

  </CoreDesktop>
</template>

<style lang="scss">
@use '../assets/styles/index.scss';

.owd-desktop {
  font-family: var(--owd-win95-font-family), serif;
  font-size: 14px;

  button {
    font-family: var(--owd-win95-font-family), serif;
  }

  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }
}
</style>