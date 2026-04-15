import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Must be '/' so all asset paths in the built index.html are absolute.
  // A relative base (e.g. './') causes MIME errors on Netlify because
  // the browser resolves asset paths relative to the current route URL.
  base: '/',

  build: {
    // Ensure module preload polyfill is injected — required for strict MIME checking
    modulePreload: { polyfill: true },

    rollupOptions: {
      output: {
        // Stable, predictable chunk names so Netlify caches correctly
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        
        // Manual chunking to improve load times and caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor'; // all other node_modules
          }
        }
      },
    },
  },
});
