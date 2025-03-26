<script setup lang="ts">
const props = defineProps<{
  density?: 'compact'
  image?: string
  primary?: boolean
  arrow?: boolean
}>()

const classes = computed(() => {
  const list = ['owd-list-item']

  if (props.primary) {
    list.push(`owd-list-item--primary`)
  }

  if (props.density) {
    list.push(`owd-list-item--density-${props.density}`)
  }

  return list
})
</script>

<template>
  <div :class="classes">
    <img v-if="image" :src="image"/>
    <slot/>

    <Icon v-if="arrow" name="mdi:menu-right"/>
  </div>
</template>

<style scoped lang="scss">
.owd-list-item {
  position: relative;
  width: 100%;
  padding: 8px 16px;

  &--density-compact {
    padding: 0 10px;
  }

  &:hover {
    background: rgb(var(--owd-elevation-inactive));
  }

  &--primary {
    &:hover {
      background: rgb(var(--owd-elevation-active));
      color: rgb(var(--owd-win95-theme-color-white)) !important;
    }
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    vertical-align: middle;
  }

  :deep(.iconify) {
    position: absolute;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
  }
}
</style>