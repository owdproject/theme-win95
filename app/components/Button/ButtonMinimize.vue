<template>
  <Button size="small" pt:root="p-button--window-nav p-button--icon">
    <div class="owd-button__icon" />
  </Button>
</template>

<style scoped lang="scss">
.owd-button__icon {
  width: 11px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: relative;

  &:before {
    position: absolute;
    background: rgb(var(--owd-win95-theme-color-black));
    content: "";
  }

  &:before {
    width: 100%;
    bottom: 25%;
    height: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>