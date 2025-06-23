<script setup lang="ts">
import { fs } from '@zenfs/core'
import { ref, onMounted } from 'vue'
import { isImageFile } from '@owdproject/module-fs/runtime/utils/utilFileSystemImage'
import FileSystemFileContextMenu from './FileSystemFileContextMenu.vue'
import FileSystemFileIcon from './FileSystemFileIcon.vue'

const props = defineProps<{
  basePath: string
  fileName: string
  layout: string
  selected?: boolean
  cutted?: boolean
}>()

const emit = defineEmits([
  'openDirectory',
  'openFile',
  'delete',
  'rename',
])

const path = `${props.basePath}/${props.fileName}`
const pathStats = ref<fs.Stats | null>(null)
const isDirectory = ref<boolean>(false)
const isFile = ref<boolean>()
const fileContent = ref<string | null>(null)

const contextMenuRef = ref() // riferimento al menu interno

async function fetchStatsAndContent(currentPath: string) {
  fs.stat(currentPath, (err, stats) => {
    if (err) {
      pathStats.value = null
      isFile.value = false
      isDirectory.value = false
      console.error(err)
      return
    }

    pathStats.value = stats
    isFile.value = stats.isFile()
    isDirectory.value = stats.isDirectory()
  })

  if (isFile.value) {
    try {
      fileContent.value = fs.readFileSync(currentPath, 'utf-8')
    } catch (error) {
      console.error('Error while reading the file', error)
      fileContent.value = null
    }
  } else if (isDirectory.value) {
    try {
      fileContent.value = null
    } catch (error) {
      console.error('Error while reading the directory:', error)
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
  fetchStatsAndContent(path)
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

const classes = computed(() => {
  return [
    'owd-file text-center m-1',
    `owd-file--size-${props.layout}`,
    {'owd-file--selected': props.selected},
    {'owd-file--cutted': props.cutted}
  ]
})
</script>

<template>
  <div
    :class="classes"
    :title="fileName"
    @dblclick="onFileOpen"
    @contextmenu.prevent="onRightClick"
  >

    <div class="flex items-center rounded-sm p-2">
      <!--
      <FileSystemFileThumbnail
        v-if="layout === 'largeIcons' && isImageFile(fileName) && !isDirectory"
        :file-name="fileName"
        :path="path"
      />
      -->
      <FileSystemFileIcon
        :file-name="fileName"
        :is-directory="isDirectory"
        :path="path"
        :layout="layout"
      />
    </div>

    <div class="owd-file__name">

      <span
        v-if="!isRenaming"
        @dblclick.stop="renameStart"
        class="text-sm text-gray-800 truncate"
        v-text="fileName"
      />

      <input
        v-else
        v-model="editableName"
        class="text-sm text-gray-800 truncate border border-gray-300 rounded-sm px-1"
        @blur="renameCommit"
        @keyup.enter="renameCommit"
        @keyup.esc="renameCancel"
        autofocus
      />

    </div>
    <slot />

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
.owd-file {
  display: inline-block;
  width: 64px;

  .owd-file__name {
    position: relative;
    display: inline-flex;

    input {
      border: 0;
      text-align: center;
    }
  }

  &--size-largeIcons {
    width: 64px;
    margin: 8px;

    :deep(img) {
      image-rendering: pixelated;
      zoom: 1.5;
    }
  }

  &--selected {
    .owd-file__name {
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        border: 1px dotted black;
      }
    }
  }

  &--cutted {
    opacity: 0.6;
  }
}

.truncate {
  max-width: 64px;
  overflow: hidden;
  display: inline-block;
}
</style>
