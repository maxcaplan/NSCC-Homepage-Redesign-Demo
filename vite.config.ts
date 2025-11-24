import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), svgr()],
  resolve: {
    alias: [
      { find: '@/', replacement: fileURLToPath(new URL('/src/', import.meta.url)) },
    ]
  }
})
