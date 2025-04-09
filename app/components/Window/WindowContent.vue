<template>
  <CoreWindowContent>
    <slot />
  </CoreWindowContent>
</template>

<style scoped lang="scss">
.owd-window__content {
  position: relative;
  display: block;
  flex: 1;

  &--centered {
    align-content: center;
    height: 100%;
  }
}
</style>