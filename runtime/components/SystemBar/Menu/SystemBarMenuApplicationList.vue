<script setup lang="ts">
defineProps<{
  applicationsEntries: ApplicationEntryWithInherited[]
  arrow?: boolean
}>()

function onSystemBarAppClick(entry: ApplicationEntryWithInherited) {
  entry.application.execCommand(entry.command)
}
</script>

<template>
  <SystemBarMenuApplicationListItem
    v-for="entry of applicationsEntries"
    :entry="entry"
    :arrow="arrow"
    @click="onSystemBarAppClick(entry)"
  />
</template>
