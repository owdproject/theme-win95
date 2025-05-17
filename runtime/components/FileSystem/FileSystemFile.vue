<script setup lang="ts">
import { fs } from '@zenfs/core'
import { ref } from 'vue'
import FileSystemFileContextMenu from './FileSystemFileContextMenu.vue'

const props = defineProps<{
  basePath: string
  fileName: string
}>()

const emit = defineEmits([
  'openDirectory',
  'openFile',
  'select',
  'delete',
  'rename',
])

const path = `${props.basePath}/${props.fileName}`
const pathStats = ref<fs.Stats | null>(null)
const isDirectory = ref<boolean>()
const isFile = ref<boolean>()
const fileContent = ref<string | null>(null)

const contextMenuRef = ref() // riferimento al menu interno

async function fetchStatsAndContent(currentPath: string) {
  await fs.stat(currentPath, (err, stats) => {
    if (err) {
      pathStats.value = null
      isFile.value = undefined
      isDirectory.value = undefined
      return
    }

    pathStats.value = stats
    isFile.value = stats.isFile()
    isDirectory.value = stats.isDirectory()
  })

  if (isFile.value) {
    try {
      fileContent.value = await fs.readFileSync(currentPath, 'utf-8')
    } catch (error) {
      console.error('Errore durante la lettura del file:', error)
      fileContent.value = null
    }
  } else if (isDirectory.value) {
    try {
      fileContent.value = null // Pulisci il contenuto del file se è una directory
    } catch (error) {
      console.error('Errore durante la lettura della directory:', error)
    }
  } else {
    fileContent.value = null
  }
}

function onFileOpen() {
  if (isDirectory.value) {
    emit('openDirectory', props.fileName)
  } else {
    emit('openFile', props.fileName)
  }
}

function onRightClick(event: MouseEvent) {
  contextMenuRef.value?.show(event)
}

onMounted(() => {
  fetchStatsAndContent(`${props.basePath}/${props.fileName}`)
})

// rename

const isRenaming = ref(false)
const editableName = ref(props.fileName)

function renameCommit() {
  const newName = editableName.value.trim()
  if (newName && newName !== props.fileName) {
    emit('rename', { oldName: props.fileName, newName })
  }
  isRenaming.value = false
}

function renameStart() {
  editableName.value = props.fileName
  isRenaming.value = true
}

function renameCancel() {
  editableName.value = props.fileName
  isRenaming.value = false
}
</script>

<template>
  <div
    class="inline-block text-center m-1"
    @click="$emit('select', fileName)"
    @dblclick="onFileOpen"
    @contextmenu.prevent="onRightClick"
  >
    <div class="flex items-center rounded-sm p-2 cursor-pointer">
      <img
        v-if="isDirectory"
        src="data:image/x-icon;base64,AAABAAIAICAQAAEABADoAgAAJgAAABAQEAABAAQAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDMzMzMzMzMzMzMzMzMzMwj7e3t7e3t7e3t7e3t7e3MI97e3t7e3t7e3t7e3t7ezCPt7e3t7e3t7e3t7e3t7cwj3t7e3t7e3t7e3t7e3t7MI+3t7e3t7e3t7e3t7e3tzCPe3t7e3t7e3t7e3t7e3swj7e3t7e3t7e3t7e3t7e3MI97e3t7e3t7e3t7e3t7ezCPt7e3t7e3t7e3t7e3t7cwj3t7e3t7e3t7e3t7e3t7MI+3t7e3t7e3t7e3t7e3tzCPe3t7e3t7e3t7e3t7e3swj7e3t7e3t7e3t7e3t7e3MI97e3t7e3t7e3t7e3t7ezCPt7e3t7e3t7e3t7e3t7cwj3t7e3t7e3t7e3t7e3t7MI+3t7e3t7e3t7e3t7e3tzCPe3t7e3t7e3t7e3t7e3swj7e3t7e3t7e3t7e3t7e3MI///////////////////wCHd3d3d3d3d4iIiIiIiIgACPt7e3t7e3gAAAAAAAAAAACPt7e3t7eAAAAAAAAAAAAACP/////4AAAAAAAAAAAAAACIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////gAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAP//wAH//+AD///wB/////////////8oAAAAEAAAACAAAAABAAQAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiIiIiIgAj7e3t7e3uACPe3t7e3t4AI+3t7e3t7gAj3t7e3t7eACPt7e3t7e4AI97e3t7e3gAj7e3t7e3uACP///////4AIe3t7eIiIgACHt7eAAAAAAAiIiAAAAAAAAAAAAAAAAA//8AAP//AACAAQCgAAHOAAABzgAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAMAAID/AADB/wAA//8AAA=="
      />
      <img
        v-else
        src="data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAHd3d3d3d3d3d3d3dwAAAAAAAAAAAAAAAAAAAAcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////////wcAAAAA//////////////8HAAAAAP//////////////BwAAAAD//////////wAAAAAAAAAA//////////8P+HAAAAAAAP//////////D4cAAAAAAAD//////////whwAAAAAAAA//////////8HAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAB/AAAAfwAAAH8AAAD/AAAB/wAAA/8AAAf/AAAP/wAAH/8AAD/w=="
      />
    </div>
    <span
      v-if="!isRenaming"
      @dblclick.stop="renameStart"
      class="text-sm text-gray-800 truncate"
    >
      {{ fileName }}
    </span>
    <input
      v-else
      v-model="editableName"
      class="text-sm text-gray-800 truncate border border-gray-300 rounded-sm px-1"
      @blur="renameCommit"
      @keyup.enter="renameCommit"
      @keyup.esc="renameCancel"
      autofocus
    />

    <FileSystemFileContextMenu
      ref="contextMenuRef"
      :file-name="fileName"
      :base-path="basePath"
      @open="onFileOpen"
      @rename="renameStart"
      @delete="$emit('delete', fileName)"
    />
  </div>
</template>

<style scoped lang="scss">
.truncate {
  max-width: 64px;
  overflow: hidden;
  display: inline-block;
}
</style>
