<script setup lang="ts">
import { useDesktopManager } from '@owdproject/core/runtime/composables/useDesktopManager'
import { useSystemLifecycle } from '../composables/useSystemLifecycle'

defineProps<{
  systemBar?: DesktopSystemBarConfig
}>()

const desktop = useDesktopManager()
const systemLifecycle = useSystemLifecycle()
</script>

<template>
  <CoreDesktop v-bind="$props">
    <Background />

    <DesktopContent>
      <slot />
    </DesktopContent>

    <CoreApplicationRender />
    <SystemBar v-if="desktop.config.systemBar?.enabled" />

    <DesktopShutdown :active="systemLifecycle.isShuttingDown.value" />
  </CoreDesktop>
</template>

<style lang="scss">
@use '../assets/styles/index.scss';

.owd-desktop {
  font-family: var(--owd-font-family), serif;
  font-size: var(--p-font-size);

  button {
    font-family: var(--owd-font-family), serif;
  }

  &__system-bar {
    &--position-bottom {
      flex-direction: column-reverse;
    }
  }
}
</style>
