<script setup lang="ts">
const props = defineProps<{
  centered?: boolean
  padded?: boolean
}>()

const classes = computed(() => {
  const list = ['owd-window__content']

  if (props.centered) {
    list.push('owd-window__content--centered')
  }

  if (props.padded) {
    list.push('p-2')
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