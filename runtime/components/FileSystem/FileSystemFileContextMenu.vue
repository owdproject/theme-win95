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
    command: () => {
      emit('open', props.fileName)
    },
  },
  {
    label: t('fs.contextMenu.sendTo'),
    command: () => {
      window.alert('To be implemented')
    },
  },
  { separator: true },
  {
    label: t('fs.contextMenu.cut'),
    command: () => {
      window.alert('To be implemented')
    },
  },
  {
    label: t('fs.contextMenu.copy'),
    command: () => {
      window.alert('To be implemented')
    },
  },
  { separator: true },
  {
    label: t('fs.contextMenu.delete'),
    command: () => {
      emit('delete', props.fileName)
    },
  },
  { separator: true },
  {
    label: t('fs.contextMenu.delete'),
    command: () => {
      emit('delete', props.fileName)
    },
  },
  {
    label: t('fs.contextMenu.rename'),
    command: () => {
      emit('rename', props.fileName)
    },
  },
  { separator: true },
  {
    label: t('fs.contextMenu.properties'),
    command: () => {
      window.alert('To be implemented')
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
