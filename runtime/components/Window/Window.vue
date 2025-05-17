<template>
  <CoreWindow>
    <Card pt:root="p-card--border">
      <template #header>
        <WindowNav>
          <template v-slot:prepend>
            <slot name="nav-prepend" />
          </template>

          <template v-slot:append>
            <slot name="nav-append" />
          </template>
        </WindowNav>
      </template>
      <template #content>
        <WindowContent>
          <slot />
        </WindowContent>
      </template>
    </Card>
  </CoreWindow>
</template>

<style scoped lang="scss">
.owd-window.resizable-component {
  box-sizing: border-box;
  display: inline-block;
  min-width: 160px;
  min-height: 160px;
  text-align: left;
  cursor: default;
  border-radius: var(--p-window-border-radius);

  :deep(> .p-card) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: var(--owd-gap);

    > .p-card-header {
      margin-bottom: 2px;
    }

    > .p-card-body {
      height: calc(100% - var(--owd-windov-nav-height));

      > .p-card-content {
        height: 100%;
      }
    }
  }
}
</style>
