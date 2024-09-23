import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true, // Permite conexiones desde otras máquinas en la red local
    port: 5173,
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})