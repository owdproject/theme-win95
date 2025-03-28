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
      aria-haspopup="true"
      aria-controls="system-bar__menu"
      :pt:root="['p-button__system-bar p-button__system-bar-start', {'p-button--active': systemBar.enabled.value}]"
      @pointerdown.self="toggleApplicationMenu"
  >
    <div class="p-button__system-bar-start__icon" />
    {{$t('systemBar.start.button.label')}}
  </Button>
  <SystemBarMenu
      v-if="systemBar.enabled.value"
      id="system-bar__menu"
      @close="closeApplicationMenu"
  />
</template>

<style scoped lang="scss">
.p-button__system-bar-start {
  height: 100%;
  font-weight: bold;
  padding-left: 44px !important;

  &__icon {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAACXBIWXMAAAsSAAALEgHS3X78AAABnElEQVRYhe1W7XLDIAyzuLx30id3fwCOEXa+tt12u6qXNoArhCNMRAhL+9X+Xfyo0r1vBxwqIvAcEJ04mHeATbK4Hq1U9QZNqQXA2NDmQ8Z+E0vQ55WjpKNN5BTAmAKwP4k44AqilP8gOE8qMj2DQxmp57hfuaGBguzx4yCIlhCtwGtD9XpvYSI414Dvcuk/wiJ56j0ii0CkGglJAFkmJi26K1D6Y8xClAW1RPllQKxsnaOIiDoS0VpYL+/jpctHU4BdiVXSAdRReiWXJAecBW0SHQHgSPocuLqKUqmNJJjjGs58kF22ne3USchulbkPnuHXkupd0IXcLdtPxcME6L6Xh30cCFMisPbWflf6o0W8KDBabFKFjt42VPatO1x9LPy4jVg8ca9kVBJ9qbxdLs8QegBjBtW3kXhkzjAx94F1HG4CtBXE2QNwZQo0Ns7BM8CYRUReTeF2bPGwCp96ILZB84fOl2QecIv0R4I/Knjsy0jqgH+Fs8fTQ5Mkxi7o0VvrXskDGfh9ho/rqP3kuiwmuo+E3uH8nKl/A2+XwABg59RRoQAAAABJRU5ErkJggg==');
    background-position: 8px center;
    background-repeat: no-repeat;
    background-size: 24px;
    height: 22px;
    padding-left: 38px;
    padding-right: 8px;
    pointer-events: none;
  }
}
</style>