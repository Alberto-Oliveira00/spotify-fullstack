import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'axios', /* outras dependências */],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Mantém o limite de aviso em 500 kB
  },
});
