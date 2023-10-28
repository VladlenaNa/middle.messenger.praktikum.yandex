import { resolve } from 'path/posix';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import card from "./src/layouts/card/card";

export default defineConfig({
    root: resolve(__dirname, 'src'),
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            helpers: {
                card,
            },
        }) as unknown as Plugin,
    ],

    build: {
        // outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html')
            }
        }
    },
    assetsInclude: "**/*.hbs"
})