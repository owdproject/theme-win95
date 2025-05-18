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
  <template v-if="applicationsEntries.length > 0">
    <SystemBarMenuApplicationListItem
      v-for="entry of applicationsEntries"
      :entry="entry"
      :arrow="arrow"
      @click="onSystemBarAppClick(entry)"
    />
  </template>
  <div
    class="text-center py-2"
    v-text="$t('systemBar.applicationList.empty')"
  />
</template>
