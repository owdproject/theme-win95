<script setup lang="ts">
import { ref, defineProps, defineEmits, defineExpose } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  fileName: string
  basePath: string
}>()

const emit = defineEmits(['open', 'delete', 'rename'])

const menu = ref<Menu | null>(null)
const items = ref<MenuItem[]>([
  {
    label: t('fs.contextMenu.open'),
    icon: 'pi pi-folder-open',
    command: () => {
      emit('open', props.fileName)
    },
  },
  {
    label: t('fs.contextMenu.rename'),
    icon: 'pi pi-pencil',
    command: () => {
      emit('rename', props.fileName)
    },
  },
  {
    label: t('fs.contextMenu.delete'),
    icon: 'pi pi-trash',
    command: () => {
      emit('delete', props.fileName)
    },
  },
])

const show = (event: MouseEvent) => {
  event.preventDefault()
  menu.value?.show(event)
}

defineExpose({
  show,
})
</script>

<template>
  <ContextMenu ref="menu" :model="items" />
</template>
