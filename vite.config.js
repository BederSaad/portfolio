import { defineConfig } from 'vite'

export default defineConfig({
  // Use '/' for Vercel, Netlify, or custom domains.
  base: '/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
