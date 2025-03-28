<script setup lang="ts">
const systemBar = useSystemBar()
</script>

<template>
  <div
      v-if="systemBar.windows.value.length > 0"
      class="owd-system-bar__windows"
  >
    <Button
        v-for="[windowId, window] of systemBar.windows.value"
        :pt:root="{class: ['p-button--system-bar', {'p-button--active': window.state.active}]}"
        @pointerdown.self="window.actions.toggleMinimize"
    >
      <span v-text="window.state.title" />

      <component
          v-show="window.state.active"
          :is="window.config.component"
          :window="window"
      />
    </Button>
  </div>
</template>

<style scoped lang="scss">
.owd-system-bar__windows {
  display: inline-flex;
  height: 100%;

  :deep(> .owd-button) {
    margin-right: var(--owd-win95-gap);
  }
}
</style>