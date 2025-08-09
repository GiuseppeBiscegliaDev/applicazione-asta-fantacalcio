import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/asta': {
        target: 'http://localhost:8085', // API Gateway
        changeOrigin: true
      },
      '/user': {
        target: 'http://localhost:8085', // Per il servizio utenti
        changeOrigin: true
      }
    }
  }
})
