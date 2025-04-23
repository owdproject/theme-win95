<script setup lang="ts">

</script>

<template>
  <Card class="p-card--border">
    <template #content>
      <slot/>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.p-card--border {
  padding: var(--owd-border-width);
}
</style>