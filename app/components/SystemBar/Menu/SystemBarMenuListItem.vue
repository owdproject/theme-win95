<script setup lang="ts">
const props = defineProps<{
  closeOnClick?: boolean
}>()

const applicationMenuState = useState<{ enabled: boolean }>(STATE_SYSTEM_BAR_OPENED)

function onListClick() {
  if (props.closeOnClick) {
    applicationMenuState.value.enabled = false
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