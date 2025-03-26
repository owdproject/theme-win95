<script setup lang="ts">
const applicationManager = useApplicationManager()
</script>

<template>
  <div class="owd-system-bar__windows">
    <Button
        v-for="[windowId, window] of applicationManager.openedWindows"
        size="sb"
        system-bar
        :active="window.state.active"
        @pointerdown.self="window.actions.toggleMinimize"
    >
      {{window.state.title}}

      <template #outer>
        <component
            v-show="window.state.active"
            :is="window.config.component"
            :window="window"
        />
      </template>
    </Button>
  </div>
</template>

<style scoped lang="scss">
.owd-system-bar__windows {
  display: inline-block;

  :deep(> .owd-button) {
    margin-right: var(--owd-win95-gap);
  }
}
</style>