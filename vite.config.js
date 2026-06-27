import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isGithub = mode === 'github';
  const base = isGithub ? '/TRAVINNO/' : '/demo/';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: base,
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Three.js ecosystem — only used in R3F components (~500 KB)
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            // GSAP — used across many components but not needed at parse time
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            // Framer Motion — large library, load after hero
            if (id.includes('framer-motion') || id.includes('framer')) {
              return 'vendor-framer';
            }
            // Lenis smooth scroll — only needed after loader
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            // COBE globe WebGL — only used in EditorialSection
            if (id.includes('cobe')) {
              return 'vendor-cobe';
            }
            // All other node_modules in one shared vendor chunk
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
      // Increase chunk size warning threshold to avoid false positives
      chunkSizeWarningLimit: 600,
    },
  }
})
