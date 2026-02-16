import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Toutes les requêtes commençant par /api seront redirigées vers le json‑server
      '/api': {
        target: 'http://localhost:3310',
        changeOrigin: true,
        secure: false,
        // Optionnel : réécrire le chemin si ton json‑server expose /api déjà
        // rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
});