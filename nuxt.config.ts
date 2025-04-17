import pkg from './package.json'
import {createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
    ssr: false,

    alias: {
        "#": resolve(__dirname, "."),
    },

    imports: {
        dirs: ['composables', 'consts', 'stores', 'utils'],
        presets: [
            {
                from: '@owdproject/core',
                imports: [
                    'useAppEntries',
                    'useApplicationManager',
                    'useDesktopManager',
                    'defineDesktopConfig',
                ]
            },
        ]
    },

    runtimeConfig: {
        public: {
            themeVersion: pkg.version,
        }
    },

    i18n: {
        langDir: './locales',
        locales: [{ code: 'en', file: 'en.json' }],
    },

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-11-28',
});