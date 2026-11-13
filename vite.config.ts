import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // No GitHub Pages o site fica em /portfolio/; localmente e em outros hosts, na raiz.
  base: process.env.DEPLOY_TARGET === 'github-pages' ? '/portfolio/' : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['.e2b.app'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['.e2b.app'],
  },
})
