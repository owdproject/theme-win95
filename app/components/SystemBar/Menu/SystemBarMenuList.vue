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
      :application-manager-app-list="menu.list"
  />
</template>

<style scoped lang="scss">

</style>