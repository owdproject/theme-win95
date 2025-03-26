<script setup lang="ts">
const props = defineProps<{
  primary?: boolean
  systemBar?: boolean
  bolded?: boolean
  disabled?: boolean
  active?: boolean
  size?: string
  icon?: boolean
}>()

const classes = computed(() => {
  const list = ['owd-button']

  if (props.primary) {
    list.push('owd-button--primary')
  }

  if (props.systemBar) {
    list.push('owd-button--system-bar')
  }

  if (props.bolded) {
    list.push('owd-button--bolded')
  }

  if (props.disabled) {
    list.push('owd-button--disabled')
  }

  if (props.active) {
    list.push('owd-button--active')
  }

  if (props.size) {
    list.push(`owd-button--size-${props.size}`)
  }

  if (props.icon) {
    list.push('owd-button--icon')
  }

  return list
})
</script>

<template>
  <Sheet :class="classes">
    <span>
      <slot/>
    </span>

    <slot name="outer" />
  </Sheet>
</template>

<style scoped lang="scss">
.owd-button {
  position: relative;
  display: inline-block;
  min-width: 32px;
  height: 32px;
  line-height: 32px;
  border: 0;
  padding: 0;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: var(--owd-win95-border-width);
    border-color: var(--owd-win95-sheet-border-color);
    box-shadow: var(--owd-win95-sheet-box-shadow);
    content: '';
  }

  &:active, &.owd-button--active {
    & > span {
      font-weight: bold;
    }

    &:before {
      border-color: rgb(var(--owd-win95-theme-color-black)) rgb(var(--owd-win95-theme-color-white)) rgb(var(--owd-win95-theme-color-white)) rgb(var(--owd-win95-theme-color-black));
      box-shadow: rgb(var(--owd-win95-theme-color-dark)) var(--owd-win95-border-width) var(--owd-win95-border-width) 0 0 inset, rgb(var(--owd-win95-theme-color-grey)) calc(var(--owd-win95-border-width) * -1) calc(var(--owd-win95-border-width) * -1) 0 0 inset;
    }

    :deep(span .owd-button__icon) {
      //margin-top: 2px;
    }
  }

  &:not(&--disabled) {
    cursor: pointer;
  }

  &--primary {
    &:before {
      left: 2px;
      top: 2px;
      width: calc(100% - var(--owd-win95-gap));
      height: calc(100% - var(--owd-win95-gap));
      outline: var(--owd-win95-sheet-color) solid var(--owd-win95-border-width);
    }
  }

  &--system-bar {
    &:active, &.owd-button--active {

      > span {
        position: relative;
        pointer-events: none;
        z-index: 2;
      }

      &:before {
        background: repeating-conic-gradient(rgb(var(--owd-win95-theme-color-grey)) 0% 25%, rgb(var(--owd-win95-theme-color-white)) 25% 50%) 0 0 / calc(var(--owd-win95-border-width) * 2) calc(var(--owd-win95-border-width) * 2);
        box-shadow: rgb(var(--owd-win95-theme-color-dark)) var(--owd-win95-border-width) var(--owd-win95-border-width) 0 0 inset, rgb(var(--owd-win95-theme-color-grey)) calc(var(--owd-win95-border-width) * -1) calc(var(--owd-win95-border-width) * -1) 0 0 inset, rgb(var(--owd-win95-theme-color-white)) 0 2px 0 0 inset;
      }
    }
  }

  &--bolded {
    & > span {
    }
  }

  &--disabled {
    color: rgb(var(--owd-win95-theme-color-dark));
    text-shadow: rgb(var(--owd-win95-theme-color-white)) var(--owd-win95-border-width) var(--owd-win95-border-width);
  }

  &:not(&--icon) {
    padding: 0 8px;
  }

  // system bar
  &--size-sb {
    height: calc(var(--owd-win95-system-bar-height) - calc(var(--owd-win95-border-width)) * 4);

    > span {
      display: block;
      font-weight: bold;
      line-height: calc(var(--owd-win95-system-bar-height) - calc(var(--owd-win95-border-width)) * 3);
    }
  }

  &--size-sm {
    min-width: 20px;
    height: 19px;
  }

  &--size-lg {
    min-width: 40px;
    height: 40px;
  }

  :deep(> .iconify) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
  }
}
</style>