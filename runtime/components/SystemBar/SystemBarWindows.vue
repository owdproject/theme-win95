<script setup lang="ts">
import { useApplicationManager } from '@owdproject/core/runtime/composables/useApplicationManager'

const applicationManager = useApplicationManager()
</script>

<template>
  <div
    v-if="applicationManager.windowsOpened.value.length > 0"
    class="owd-system-bar__windows"
  >
    <Button
      v-for="[windowId, window] of applicationManager.windowsOpened.value"
      :key="window.state.id"
      :class="[
        'p-button--system-bar',
        { 'p-button--active': window.state.active },
      ]"
      @pointerdown.self="window.actions.toggleMinimize"
    >
      <span v-text="window.title" />

      <!--
      <component
          v-show="window.state.active"
          :is="window.config.component"
          :window="window"
      />
      -->
    </Button>
  </div>
</template>

<style scoped lang="scss">
.owd-system-bar__windows {
  display: inline-flex;
  height: 100%;

  :deep(> .owd-button) {
    margin-right: var(--owd-gap);
  }
}
</style>
