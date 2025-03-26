<script setup lang="ts">
defineProps<{
  applicationManagerAppList: any
  arrow?: boolean
}>()

const applicationManager = useApplicationManager()

function onSystemBarAppClick(applicationId: string) {
  applicationManager.openApp(applicationId)
}
</script>

<template>
  <SystemBarMenuApplicationListItem
      v-for="[applicationId, application] of applicationManagerAppList"
      :application="application"
      :arrow="arrow"
      @click="onSystemBarAppClick(applicationId)"
  />
</template>

<style scoped lang="scss">

</style>