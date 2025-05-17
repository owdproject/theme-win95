<script setup lang="ts">
import { useClipboardFs } from '@owdproject/core/runtime/composables/useClipboardFs'

import { fs } from '@zenfs/core'
import { ref, watch } from 'vue'

const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
}>()

const basePath = ref(props.window.meta.path)
const directory = ref(await fs.readdirSync(basePath.value))

watch(
  () => basePath.value,
  () => {
    props.window.meta.path = basePath.value
  },
)

async function onDirectoryClick(fileName: string) {
  if (basePath.value !== '/') {
    basePath.value += '/'
  }
  basePath.value += fileName
  directory.value = await fs.readdirSync(basePath.value)
}

const { clipboardPath, clipboardType, setClipboard, clearClipboard } =
  useClipboardFs()

const selectedFile = ref<string | null>(null)

async function onFileClick() {}

async function onFileSelect(fileName: string) {
  selectedFile.value = `${basePath.value}/${fileName}`
}

async function onFileCut() {
  if (!selectedFile.value) return
  setClipboard(selectedFile.value, 'cut')
}

async function onFileCopy() {
  if (!selectedFile.value) return
  setClipboard(selectedFile.value, 'copy')
}

async function onFileDelete() {
  if (
    !window.confirm(`Sei sicuro di voler eliminare "${selectedFile.value}"?`)
  ) {
    return
  }

  const fullPath = `${basePath.value}/${selectedFile.value}`

  try {
    const stats = await fs.statSync(fullPath)

    if (stats.isFile()) {
      await fs.unlinkSync(fullPath)
    } else if (stats.isDirectory()) {
      const confirmed = window.confirm(
        `La cartella "${selectedFile.value}" potrebbe contenere dei file. Eliminarla comunque?`,
      )

      if (confirmed) {
        await fs.rmSync(fullPath, { recursive: true, force: true })
      }
    }

    directory.value = await fs.readdirSync(basePath.value)
  } catch (error) {
    console.error("Errore durante l'eliminazione:", error)
  }
}

async function onFilePaste() {
  if (!clipboardPath.value || !clipboardType.value) return

  const fileName = clipboardPath.value.split('/').pop()!
  const targetPath = `${basePath.value}/${fileName}`

  if (clipboardType.value === 'copy') {
    await fs.copyFile(clipboardPath.value, targetPath)
  } else if (clipboardType.value === 'cut') {
    await fs.rename(clipboardPath.value, targetPath)
    clearClipboard()
  }

  // refresh
  directory.value = await fs.readdirSync(basePath.value)
}

function onFolderUp() {
  const parts = basePath.value.split('/').filter(Boolean)
  if (parts.length === 0) return
  parts.pop()
  basePath.value = '/' + parts.join('/')
  directory.value = fs.readdirSync(basePath.value)
}
</script>

<template>
  <Window v-bind="$props">
    <div class="flex-row">
      <div class>
        <InputText :value="basePath" style="vertical-align: middle" />

        <WindowDirectoryActionFolderUp class="mr-3" @click="onFolderUp" />

        <WindowDirectoryActionCut @click="onFileCut" />

        <WindowDirectoryActionCopy @click="onFileCopy" />

        <WindowDirectoryActionPaste class="mr-3" @click="onFilePaste" />

        <WindowDirectoryActionDelete @click="onFileDelete" />
      </div>
    </div>
    <Divider class="my-1" />
    <FileSystemFile
      v-for="fileName of directory"
      :basePath="basePath"
      :fileName="fileName"
      @openDirectory="onDirectoryClick"
      @openFile="onFileClick"
      @selectFile="onFileSelect"
    />
  </Window>
</template>

<style scoped lang="scss"></style>
