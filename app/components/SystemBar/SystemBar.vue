<script setup lang="ts">
const desktop = useDesktopManager()
const systemBar = useSystemBar()

const classes = computed(() => {
  const list = ['owd-desktop__system-bar p-card--border']

  if (systemBar.config?.position) {
    list.push(
        'owd-desktop__system-bar--position',
        `owd-desktop__system-bar--position-${systemBar.config.position}`
    )
  }

  return list
})
</script>

<template>
  <Card :class="classes">
    <template #content>

      <div>
        <SystemBarButtonStart
            v-if="systemBar.config?.startButton"
        />

        <Divider layout="vertical" type="solid"/>

        <SystemBarWindows/>
      </div>

      <div>
        <Card class="p-card--inset">
          <template #content>
            <CoreTime/>
          </template>
        </Card>
      </div>

    </template>
  </Card>
</template>

<style scoped lang="scss">
.owd-desktop__system-bar {
  position: relative;
  height: var(--owd-win95-system-bar-height);
  padding: var(--owd-win95-gap);

  :deep(> .p-card-body) {
    height: 100%;

    > .p-card-content {
      display: flex;
      flex-direction: row;
      height: 100%;

      > div {

        // system bar start button + windows

        &:nth-child(1) {
          flex: 1;

          .p-divider-vertical {
            display: inline-block;
            vertical-align: top;
          }

          .p-button--system-bar {
            height: 100%;
            margin-right: var(--owd-win95-gap);
          }
        }

        // system bar right box

        &:nth-child(2) {
          .p-card--inset {
            height: 100%;
            padding: 0 6px;

            .p-card-body {
              padding: 0 8px;
              height: 100%;

              .p-card-content {
                display: flex;
                align-items: center;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  // system bar position

  &--position {
    position: fixed;

    &-top, &-bottom {
      width: 100%;
    }

    &-top {
      top: 0;
    }

    &-bottom {
      bottom: 0;
    }
  }
}
</style>