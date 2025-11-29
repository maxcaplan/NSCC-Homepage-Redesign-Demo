import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: "#app",
				previewMiddlewareEnabled: true
			}
		}),
		svgr(),
		ViteImageOptimizer(),
	],
	build: {
		cssMinify: "lightningcss",
	},
	resolve: {
		alias: [
			// Alias /src/ -> @
			{
				find: '@/',
				replacement: fileURLToPath(new URL('/src/', import.meta.url))
			},
		]
	}
})
