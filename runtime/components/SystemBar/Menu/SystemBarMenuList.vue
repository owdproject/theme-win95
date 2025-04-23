<script setup lang="ts">
defineProps<{
  menu: {
    type: 'applicationList'
    list: any[]
  }
}>()
</script>

<template>
  <SystemBarMenuApplicationList
      v-if="menu.type === 'applicationList'"
      :applications-entries="menu.list"
  />
</template>

<style scoped lang="scss">

</style>