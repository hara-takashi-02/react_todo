import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(), 
    ],
  server: {
      host: true,
      hmr: {
          host: 'localhost',
      },
      watch: {
          usePolling: true,
      },
  },
  resolve: {
      alias: {
          '@': '/src',
      },
  },
  build: {
    emptyOutDir: true,
  },
})
