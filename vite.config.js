import path from 'path'

import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'public'),
    build: {
        outDir: path.resolve(__dirname, 'dist')
    },
    plugins: [
        handlebars(),
    ],
    server: {
        port: 3000
    },
    preview: {
        port: 3000
    }
})
