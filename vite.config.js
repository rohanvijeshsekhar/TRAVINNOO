import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: (process.env.GITHUB_ACTIONS || process.env.npm_lifecycle_event === 'deploy' || process.env.npm_lifecycle_event === 'predeploy') ? '/TRAVINNO/' : '/demo/',
})
