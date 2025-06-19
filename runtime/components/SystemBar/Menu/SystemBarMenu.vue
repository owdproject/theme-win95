<script setup lang="ts">
import { useSystemBar } from '../../../composables/useSystemBar'

const systemBar = useSystemBar()

function onRootMenuItemClick(listItem) {
  if (typeof listItem.cb === 'function') {
    listItem.cb()

    systemBar.enabled.value = false
  }
}
</script>

<template>
  <Card pt:root="p-card--border owd-system-bar__menu">
    <template #content>
      <div class="owd-system-bar__menu__title"></div>
      <List class="owd-system-bar__menu__list">
        <!--
        todo this one day should eventually be refactored using primevue TieredMenu
        <TieredMenu :model="systemBar.menu.value">

          <template #submenuicon>
            <Icon name="mdi:caret-right"/>
          </template>
          <template #item="{ item, props, hasSubmenu }">
            <a v-ripple class="flex items-center" v-bind="props.action">
              <img v-if="item.image" :src="item.image"/>
              <span class="ml-2">{{ item.label }}</span>
              <Icon v-if="hasSubmenu" name="mdi:caret-right"/>
            </a>
          </template>

        </TieredMenu>
        -->

        <template v-for="listItem of systemBar.menu.value">
          <ListDivider v-if="listItem.divider" />

          <ListItem
            v-else
            primary
            :image="listItem.image"
            :arrow="!!listItem.menu"
            @click="onRootMenuItemClick(listItem)"
          >
            {{ listItem.label }}

            <SystemBarMenuSheet v-if="listItem.menu">
              <SystemBarMenuList :menu="listItem.menu" />
            </SystemBarMenuSheet>
          </ListItem>
        </template>
      </List>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.owd-system-bar__menu {
  position: absolute;
  bottom: 37px;
  left: var(--owd-border-width);
  padding: var(--owd-gap);
  max-height: 80dvh;
  width: 240px;
  cursor: default;

  :deep(> .p-card-body > .p-card-content) {
    display: flex;
    flex-direction: row;

    .owd-system-bar__menu {
      &__title {
        background: rgb(var(--owd-elevation-inactive));
        width: 32px;
      }

      &__list {
        width: 100%;

        .owd-list-item {
          cursor: pointer;
        }

        .p-card {
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 240px;
          display: none;
        }

        .owd-list-item:hover {
          .p-card {
            display: block;
          }
        }
      }
    }
  }
}
</style>
