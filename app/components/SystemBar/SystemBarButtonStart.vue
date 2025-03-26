<script setup lang="ts">
const startButtonElement = useTemplateRef('startButtonElement')

const systemBar = useSystemBar()

function toggleApplicationMenu() {
  systemBar.enabled.value = !systemBar.enabled.value
}

function closeApplicationMenu(): void {
  systemBar.enabled.value = false
}

onClickOutside(startButtonElement, () => closeApplicationMenu())
</script>

<template>
  <Button
      class="owd-button__system-bar-start"
      ref="startButtonElement"
      size="sb" bolded start
      :active="systemBar.enabled.value"
      @pointerdown.self="toggleApplicationMenu"
  >
    <div class="owd-button__icon-start" />
    {{$t('systemBar.start.button.label')}}

    <template #outer>
      <SystemBarMenu
          v-if="systemBar.enabled.value"
          @close="closeApplicationMenu"
      />
    </template>
  </Button>
</template>

<style scoped lang="scss">
.owd-button.owd-button__system-bar-start {
  position: relative;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAACXBIWXMAAAsSAAALEgHS3X78AAABnElEQVRYhe1W7XLDIAyzuLx30id3fwCOEXa+tt12u6qXNoArhCNMRAhL+9X+Xfyo0r1vBxwqIvAcEJ04mHeATbK4Hq1U9QZNqQXA2NDmQ8Z+E0vQ55WjpKNN5BTAmAKwP4k44AqilP8gOE8qMj2DQxmp57hfuaGBguzx4yCIlhCtwGtD9XpvYSI414Dvcuk/wiJ56j0ii0CkGglJAFkmJi26K1D6Y8xClAW1RPllQKxsnaOIiDoS0VpYL+/jpctHU4BdiVXSAdRReiWXJAecBW0SHQHgSPocuLqKUqmNJJjjGs58kF22ne3USchulbkPnuHXkupd0IXcLdtPxcME6L6Xh30cCFMisPbWflf6o0W8KDBabFKFjt42VPatO1x9LPy4jVg8ca9kVBJ9qbxdLs8QegBjBtW3kXhkzjAx94F1HG4CtBXE2QNwZQo0Ns7BM8CYRUReTeF2bPGwCp96ILZB84fOl2QecIv0R4I/Knjsy0jqgH+Fs8fTQ5Mkxi7o0VvrXskDGfh9ho/rqP3kuiwmuo+E3uH8nKl/A2+XwABg59RRoQAAAABJRU5ErkJggg==');
  background-position: 8px center;
  background-repeat: no-repeat;
  background-size: 24px;
  padding-left: 38px;
  padding-right: 8px;
}
</style>