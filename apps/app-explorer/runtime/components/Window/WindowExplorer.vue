<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'

import { useI18n } from 'vue-i18n'

const props = defineProps<{
  window: Window
}>()

const { t } = useI18n()

const explorerMenu = [
  {
    label: t('apps.explorer.menu.file'),
    items: [
      {
        label: t('apps.explorer.action.newFolder'),
        command: () => {
          props.window.fsExplorer.createNewDirectory()
        },
      },
      { separator: true },
      {
        label: t('apps.explorer.action.delete'),
        command: () => {
          props.window.fsExplorer.deleteSelectedFiles()
        },
      },
      {
        label: t('apps.explorer.action.rename'),
        command: () => {
          props.window.fsExplorer.deleteSelectedFiles()
        },
      },
      {
        label: t('apps.explorer.action.properties'),
        command: () => {
          props.window.fsExplorer.fileProperties()
        },
      },
      { separator: true },
      {
        label: t('apps.explorer.action.close'),
        command: () => {
          props.window.destroy()
        }
      },
    ],
  },
  {
    label: t('apps.explorer.menu.edit'),
    items: [
      {
        label: t('apps.explorer.action.cut'),
        command: () => {
          props.window.fsExplorer.cutFiles()
        },
      },
      {
        label: t('apps.explorer.action.copy'),
        command: () => {
          props.window.fsExplorer.copyFiles()
        },
      },
      {
        label: t('apps.explorer.action.paste'),
        command: () => {
          props.window.fsExplorer.pasteFiles()
        },
      },
      {
        label: t('apps.explorer.action.pasteShortcut'),
        command: () => {
          props.window.fsExplorer.pasteShortcuts()
        },
      },
      { separator: true },
      {
        label: t('apps.explorer.action.selectAll'),
        command: () => {
          props.window.fsExplorer.selectAllFiles()
        },
      },
      {
        label: t('apps.explorer.action.invertSelection'),
        command: () => {
          props.window.fsExplorer.invertSelection()
        },
      },
    ],
  },
  {
    label: t('apps.explorer.menu.view'),
    items: [
      {
        label: t('apps.explorer.layout.largeIcons'),
        command: () => props.window.fsExplorer.setLayout('largeIcons'),
      },
      {
        label: t('apps.explorer.layout.smallIcons'),
        command: () => props.window.fsExplorer.setLayout('smallIcons'),
      },
      {
        label: t('apps.explorer.layout.list'),
        command: () => props.window.fsExplorer.setLayout('list'),
      },
      {
        label: t('apps.explorer.layout.details'),
        command: () => props.window.fsExplorer.setLayout('details'),
      },
      { separator: true },
      {
        label: t('apps.explorer.action.refresh'),
        command: () => {
          props.window.fsExplorer.refreshDirectory()
        },
      },
    ],
  },
  {
    label: t('apps.explorer.menu.help'),
    items: [
      {
        label: t('apps.explorer.action.about'),
        command: () =>
          confirm.require({
            group: 'about',
            header: 'About',
            acceptProps: {
              label: 'OK',
              class: 'p-button--primary',
            },
            rejectProps: {
              class: 'hidden',
            },
            accept: () => {},
          }),
      },
    ],
  },
]

props.window.setMenu(explorerMenu)

const confirm = useConfirm()
</script>

<template>
  <WindowDirectory v-bind="$props" />

  <ConfirmDialog />
  <ConfirmDialog group="about">
    <template #message>
      <div>
        <p>
          Open Web Desktop (OWD) is a framework designed to provide<br />
          a simple environment for building web desktop experiences.
        </p>
        <p class="mt-2">
          <a
            href="https://github.com/owdproject/owd-theme-win95"
            target="_blank"
          >
            @owdproject/theme-win95
          </a>
          &nbsp; for Open Web Desktop
        </p>
      </div>
    </template>
  </ConfirmDialog>
</template>

<style scoped lang="scss"></style>
