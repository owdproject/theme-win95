<script setup lang="ts">
const props = defineProps<{
  border?: boolean;
}>()

const classes = computed(() => {
  const list = ['owd-sheet']

  if (props.border) {
    list.push('owd-sheet--border')
  }

  return list
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.owd-sheet {
  background: var(--owd-win95-sheet-background);
  color: var(--owd-win95-sheet-color);
  border-color: var(--owd-win95-sheet-border-color);
  box-shadow: var(--owd-win95-sheet-box-shadow);

  &--border {
    box-shadow: rgb(var(--owd-win95-theme-color-white)) var(--owd-win95-border-width) var(--owd-win95-border-width) 0 0 inset, rgb(var(--owd-win95-theme-color-dark)) calc(var(--owd-win95-border-width) * -1) calc(var(--owd-win95-border-width) * -1) 0 0px inset, rgb(var(--owd-win95-theme-color-black)) var(--owd-win95-border-width) var(--owd-win95-border-width) 0 0, rgb(var(--owd-win95-theme-color-grey)) 0 calc(var(--owd-win95-border-width) * -1) 0 0, rgb(var(--owd-win95-theme-color-grey)) calc(var(--owd-win95-border-width) * -1) calc(var(--owd-win95-border-width) * -1) 0 0, rgb(var(--owd-win95-theme-color-black)) 0 var(--owd-win95-border-width) 0 0, rgb(var(--owd-win95-theme-color-black)) var(--owd-win95-border-width) 0 0, rgb(var(--owd-win95-theme-color-grey)) 0 calc(var(--owd-win95-border-width) * -1) 0 0, rgb(var(--owd-win95-theme-color-grey)) calc(var(--owd-win95-border-width) * -1) 0 0 0;
  }
}
</style>