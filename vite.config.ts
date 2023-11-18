import { resolve } from "path";
import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import svgLoader from 'vite-svg-loader';
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url)
// const __dirname =  dirname(__filename);

export default defineConfig({
    root: resolve(__dirname, "src"),
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, "src/partials"),
        }) as unknown as Plugin,
        checker({
            typescript: true
        }),
        eslint(),
        svgLoader({
            defaultImport: 'url'
        })
    ],
    server: {
        port: 3000,
    },

    build: {
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                login: resolve(__dirname, "src/pages/login/login.html"),
                500: resolve(__dirname, "src/pages/5Error/5Error.html"),
                400: resolve(__dirname, "src/pages/404Error/404Error.html"),
                register: resolve(__dirname, "src/pages/register/register.html"),
                profile: resolve(__dirname, "src/pages/profile/profile.html"),
                editProfile: resolve(__dirname, "src/pages/editProfile/editProfile.html"),
                editPassword: resolve(__dirname, "src/pages/editPassword/editPassword.html"),
                chat: resolve(__dirname, "src/pages/chat/chat.html")
            }
        }
    },
    assetsInclude: "**/*.hbs"
})
