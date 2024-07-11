import path from 'path'

import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'public'),
    plugins: [
        handlebars(),
    ],
})
