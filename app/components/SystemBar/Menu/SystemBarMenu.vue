<script setup lang="ts">
const systemBar = useSystemBar()

function onRootMenuItemClick(listItem) {
  if (typeof listItem.cb === 'function') {
    listItem.cb()

    systemBar.enabled.value = false
  }
}
</script>

<template>
  <Sheet border class="owd-system-bar__menu">
    <div class="owd-system-bar__menu__title">

    </div>
    <List class="owd-system-bar__menu__list">
      <template
          v-for="listItem of systemBar.menu.value"
      >

        <ListDivider
            v-if="listItem.divider"
        />

        <ListItem
            v-else
            primary
            :image="listItem.image"
            :arrow="!!listItem.menu"
            @click="onRootMenuItemClick(listItem)"
        >
          {{ listItem.label }}

          <SystemBarMenuSheet
              v-if="listItem.menu"
          >
            <SystemBarMenuList
                :menu="listItem.menu"
            />
          </SystemBarMenuSheet>
        </ListItem>

      </template>
    </List>
  </Sheet>
</template>

<style scoped lang="scss">
.owd-system-bar__menu {
  position: absolute;
  bottom: 30px;
  left: var(--owd-win95-border-width);
  padding: var(--owd-win95-gap);
  max-height: 80dvh;
  width: 280px;
  display: flex;
  flex-direction: row;
  cursor: default;
  z-index: 99999999;

  &__title {
    background: rgb(var(--owd-elevation-inactive));
    width: 36px;
  }

  &__list {
    width: 100%;

    .owd-list-item {
      cursor: pointer;
    }

    :deep(.owd-sheet) {
      position: absolute;
      top: 0;
      left: 100%;
      margin-left: calc(var(--owd-win95-border-width) * -2);
      min-width: 240px;
    }

    .owd-sheet {
      display: none;
    }

    .owd-list-item:hover {
      .owd-sheet {
        display: block;
      }
    }
  }
}
</style>