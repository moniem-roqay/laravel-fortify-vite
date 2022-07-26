import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
const path = require('path');
import VitePluginComponents from "vite-plugin-components";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        // VitePluginComponents()
    ],
    resolve: {
        extensions:['.js','.vue'],
        alias: {
            '@': '/resources/js',
        }
    },

});
