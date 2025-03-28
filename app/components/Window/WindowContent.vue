<script setup lang="ts">
const props = defineProps<{
  centered?: boolean
}>()

const classes = computed(() => {
  const list = ['owd-window__content']

  if (props.centered) {
    list.push('owd-window__content--centered')
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
  display: block;
  flex: 1;

  &--centered {
    align-content: center;
    height: 100%;
  }
}
</style>