<script setup lang="ts">
import { ref } from '@vue/reactivity'

const props = defineProps<{
  address: string
}>()

const addressInput = ref(props.address)
</script>

<template>
  <div>
    <div class="flex">
      <div class="flex-col px-1" style="align-items: center; display: grid">
        Address
      </div>
      <div class="flex-col w-full">
        <InputText
          v-model="addressInput" style="width: inherit"
          @keydown.enter="$emit('update:modelValue', addressInput)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
