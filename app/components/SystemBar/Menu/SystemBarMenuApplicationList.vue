<script setup lang="ts">
defineProps<{
  applicationsEntries: any
  arrow?: boolean
}>()

function onSystemBarAppClick(entry: ApplicationEntry) {
  entry.application.execCommand(entry.command)
}
</script>

<template>
  <SystemBarMenuApplicationListItem
      v-for="applicationEntry of applicationsEntries"
      :entry="applicationEntry"
      :arrow="arrow"
      @click="onSystemBarAppClick(applicationEntry)"
  />
</template>