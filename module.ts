import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  installModule,
  addImportsDir
} from '@nuxt/kit'
import { registerTailwindPath } from '@owdproject/core/runtime/utils/utilApp'
import deepMerge from 'deepmerge'

export default defineNuxtModule({
  meta: {
    name: 'owd-theme-win95',
    configKey: 'desktop'
  },
  defaults: {
    name: 'win95',
    systemBar: {
      enabled: true,
      position: 'bottom',
      startButton: true
    }
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // assign open web desktop theme base config to runtime config
    nuxt.options.runtimeConfig.public.desktop = deepMerge(
      nuxt.options.runtimeConfig.public.desktop,
      options,
    )

    {
      // add components

      addComponentsDir({
        path: resolve('./runtime/components')
      })
    }

    {
      // configure tailwind

      registerTailwindPath(
        nuxt,
        resolve('./runtime/components/**/*.{vue,mjs,ts}')
      )
    }

    {
      // import i18n

      nuxt.hook('i18n:registerModule', (register) => {
        register({
          // langDir path needs to be resolved
          langDir: resolve('./i18n'),
          locales: [
            {
              code: 'en',
              file: 'locales/en.ts'
            }
          ]
        })
      })
    }

    {
      // add other files

      addImportsDir(resolve('./runtime/composables'))
      addImportsDir(resolve('./runtime/consts'))
      addImportsDir(resolve('./runtime/stores'))
      addImportsDir(resolve('./runtime/utils'))
    }

    {
      if (nuxt.options.modules.includes('@owdproject/module-fs')) {
        await installModule(resolve('./apps/app-explorer'))
        await installModule('@owdproject/app-classic-audioplayer')
        await installModule('@owdproject/app-classic-videoplayer')
      }
    }
  }
})
