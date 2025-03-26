<script setup lang="ts">
const windowController = inject<IWindowController>('windowController')

function onWindowMinimize() {
  if (!windowController?.instanced) return

  windowController.actions.minimize()
}

function onWindowMaximize() {
  if (!windowController?.instanced) return

  windowController.actions.toggleMaximize()
}

function onWindowNavDestroy() {
  if (!windowController?.instanced) return

  windowController.actions.destroy()
}
</script>

<template>
  <CoreWindowNav
      @dblclick="onWindowMaximize"
  >

    <WindowNavIcon
        v-if="windowController?.state.icon"
        :icon="windowController.state.icon"
    />

    <div
        v-if="windowController?.state.title"
        class="owd-window-nav__title"
    >
      <div
          class="owd-window-nav__title-inner"
          v-text="windowController?.state.title"
      />
    </div>

    <div class="owd-window-nav__btn-group owd-window-nav__btn-group--append">

      <slot name="append"/>

      <ButtonMinimize
          v-if="!windowController?.instanced || windowController?.isMinimizable"
          size="sm"
          @click="onWindowMinimize"
      />
      <ButtonMaximize
          v-if="windowController?.isMaximizable"
          size="sm"
          @click="onWindowMaximize"
      />
      <ButtonClose
          v-if="!windowController?.instanced || windowController?.isDestroyable"
          size="sm"
          @click="onWindowNavDestroy"
      />

    </div>

  </CoreWindowNav>
</template>

<style scoped lang="scss">
.owd-window-nav {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  height: var(--owd-win95-windov-nav);
  margin-bottom: 2px;
  font-weight: bold;
  background: rgb(var(--owd-elevation-inactive));
  color: rgb(var(--owd-win95-theme-color-light));

  &--focused {
    background: rgb(var(--owd-elevation-active));
    color: rgb(var(--owd-win95-theme-color-white))
  }

  &__btn-group {
    display: flex;
    gap: 4px;
    padding: var(--owd-win95-gap);
  }

  &__title {
    display: flex;
    align-items: center;
    padding-left: 6px;
    gap: var(--owd-win95-gap);
    flex-grow: 1;
  }

  .owd-window-nav__draggable {
    width: 100%;
    height: 100%;
  }
}
</style>