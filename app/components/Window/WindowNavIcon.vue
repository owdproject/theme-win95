<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="owd-window-nav__icon">
    <Icon :name="icon" :size="24" />
  </div>
</template>

<style scoped lang="scss">

</style>