import {defineDesktopConfig} from "@owdproject/core/runtime/utils/utilsDesktop"

export default defineDesktopConfig({
    name: 'win95',

    systemBar: {
        enabled: true,
        position: 'bottom',
        startButton: true,
    }
})