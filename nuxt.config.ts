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
    },

    runtimeConfig: {
        public: {
            themeVersion: pkg.version,
        }
    },

    i18n: {
        langDir: './lang',
        locales: [{ code: 'en', file: 'en.json' }],
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
    },

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-11-28',
});