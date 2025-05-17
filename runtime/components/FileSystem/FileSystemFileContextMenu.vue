<script setup lang="ts">
import { ref, defineProps, defineEmits, defineExpose } from 'vue'

const props = defineProps<{
  fileName: string
  basePath: string
  // Potresti voler passare qui informazioni specifiche sul file/directory
  // per personalizzare le voci del menu
}>()

const emit = defineEmits(['open', 'delete', 'rename'])

const menu = ref<Menu | null>(null)
const items = ref<MenuItem[]>([
  {
    label: 'Apri',
    icon: 'pi pi-folder-open',
    command: () => {
      emit('open', props.fileName)
    },
  },
  {
    label: 'Elimina',
    icon: 'pi pi-trash',
    command: () => {
      emit('delete', props.fileName)
    },
  },
  {
    label: 'Rinomina',
    icon: 'pi pi-pencil',
    command: () => {
      emit('rename', props.fileName)
    },
  },
  // Potresti aggiungere altre voci di menu dinamicamente qui
])

const show = (event: MouseEvent) => {
  event.preventDefault() // Assicurati di prevenire il menu predefinito anche qui
  menu.value?.show(event)
}

defineExpose({
  show,
})
</script>

<template>
  <ContextMenu ref="menu" :model="items" />
</template>

<style scoped lang="scss"></style>
