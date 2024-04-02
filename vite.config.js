import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": fileURLToPath(new URL('./src/components', import.meta.url)),
			"@pages": fileURLToPath(new URL('./src/pages/', import.meta.url)),
			"@hooks": fileURLToPath(new URL('./src/hooks', import.meta.url)),
			"@context": fileURLToPath(new URL('./src/context', import.meta.url)),
			"@styles": fileURLToPath(new URL('./src/styles', import.meta.url)),
			"@features": fileURLToPath(new URL('./src/features', import.meta.url)),
		}
	}
})
