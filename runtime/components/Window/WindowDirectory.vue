<script setup lang="ts">
import { useFileSystemExplorer } from '@owdproject/module-fs/runtime/composables/useFileSystemExplorer'
import WindowDirectoryToolbar from './Directory/WindowDirectoryToolbar.vue'
import WindowDirectoryAddress from './Directory/WindowDirectoryAddress.vue'

const props = defineProps<{
  config?: WindowConfig
  window?: IWindowController
}>()


const fsExplorer = useFileSystemExplorer(props.window)

props.window.fsExplorer = fsExplorer
props.window.fsExplorer.initialize()
</script>

<template>
  <Window v-bind="$props">
    <div class="flex flex-col h-full">
      <Menubar breakpoint="false" :model="window.menu" />

      <Divider />

      <WindowDirectoryToolbar
        @back="fsExplorer.directoryBack"
        @forward="fsExplorer.directoryForward"
        @up="fsExplorer.directoryUp"
        @cut="fsExplorer.cutFiles"
        @copy="fsExplorer.copyFiles"
        @paste="fsExplorer.pasteFiles"
        @delete="fsExplorer.deleteSelectedFiles"
        @undo="fsExplorer.operationUndo"
        @properties="fsExplorer.fileProperties"
      />

      <Divider />

      <WindowDirectoryAddress
        :address="fsExplorer.basePath.value"
        @update:modelValue="value => fsExplorer.basePath.value = value"
      />

      <Divider />

      <div class="flex-1 overflow-auto">
        <DataTable class="h-full">

          <SelectableArea
            v-if="!window.meta.path.startsWith('http')"
            :fs-explorer="fsExplorer"
          >
            <FileSystemFile
              v-for="fileName of fsExplorer.fsEntries.value"
              :key="fileName"
              :data-filename="fileName"
              :basePath="fsExplorer.basePath.value"
              :fileName="fileName"
              :selected="fsExplorer.selectedFiles.value.includes(`${fsExplorer.basePath.value}/${fileName}`)"
              :cutted="fsExplorer.fsClipboard.clipboardFiles.value.includes(`${fsExplorer.basePath.value}/${fileName}`) && fsExplorer.fsClipboard.clipboardType.value === 'cut'"
              @openDirectory="window.fsExplorer.openDirectory"
              @openFile="fsExplorer.openFile"
            />
          </SelectableArea>
          <iframe
            :src="window.meta.path"
          />

        </DataTable>
      </div>
    </div>
  </Window>
</template>

<style scoped lang="scss">
.h-full {
  overflow-x: hidden;
}

iframe {
  width: 100%;
  height: 100%;
}

:deep(.owd-window:not(.owd-window--focused)) {
  iframe {
    pointer-events: none;
  }
}
</style>
