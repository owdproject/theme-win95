<script setup lang="ts">
const props = defineProps<{
  closeOnClick?: boolean
}>()

const systemBar = useSystemBar()

function onListClick() {
  if (props.closeOnClick) {
    systemBar.enabled.value = false
  }
}
</script>

<template>
  <ListItem @click="onListClick">
    <slot />
  </ListItem>
</template>

<style scoped lang="scss">

</style>