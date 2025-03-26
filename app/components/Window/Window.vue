<script setup lang="ts">
const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
  centered?: boolean
}>()

provide('windowController', handleWindowControllerProps(props))
</script>

<template>
  <CoreWindow>
    <Sheet border>
      <WindowNav>

        <template v-slot:nav-prepend>
          <slot name="nav-prepend"/>
        </template>

        <template v-slot:nav-append>
          <slot name="nav-append"/>
        </template>

      </WindowNav>

      <WindowContent
          :centered="centered"
      >

        <slot/>

      </WindowContent>
    </Sheet>
  </CoreWindow>
</template>

<style scoped lang="scss">
.owd-window.resizable-component {
  position: fixed;
  box-sizing: border-box;
  display: inline-block;
  min-width: 160px;
  min-height: 160px;
  cursor: default;

  :deep(> .owd-sheet) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: var(--owd-win95-gap);
  }
}
</style>