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
    <slot name="icon">
      <img v-if="image" :src="image"/>
    </slot>

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
    padding: 4px 10px;
  }

  &:hover {
    background: rgb(var(--p-elevation-inactive));
  }

  &--primary {
    &:hover {
      background: rgb(var(--p-elevation-active-background));
      color: rgb(var(--p-elevation-active-color)) !important;
    }
  }

  img {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 12px;
    vertical-align: middle;
  }

  :deep(> .iconify) {
    position: absolute;
    right: -2px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
  }
}
</style>