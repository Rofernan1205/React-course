import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
      preprocessorOptions: {
        scss: {
          // Silencia las advertencias de funciones deprecadas de Sass venidas de Bootstrap
          silenceDeprecations: [
            'color-functions', 
            'global-builtin', 
            'import',
            'if-function'],
        },
      },
    },
})

