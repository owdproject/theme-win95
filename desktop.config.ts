import { defineDesktopConfig } from '@owdproject/core/runtime/utils/utilDesktop'

export default defineDesktopConfig({
  name: 'win95',

  systemBar: {
    enabled: true,
    position: 'bottom',
    startButton: true,
  },
})
