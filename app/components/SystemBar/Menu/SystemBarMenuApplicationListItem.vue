<script setup lang="ts">
defineProps<{
  application: ApplicationController
  arrow?: boolean
}>()
</script>

<template>
  <SystemBarMenuListItem
      class="owd-system-bar__menu__item"
      primary
      density="compact"
      :arrow="arrow"
      close-on-click
  >
    <div class="flex">
      <div>
        <Icon :name="application.config.icon" :size="21" />
      </div>
      <div class="flex-1 pl-2">
        {{ application.config.name }}
      </div>
    </div>
  </SystemBarMenuListItem>
</template>

<style scoped lang="scss">
.owd-system-bar__menu__item {
  cursor: pointer;
  height: 31px;
  line-height: 26px;

  .iconify {
    vertical-align: -4px;
  }
}
</style>