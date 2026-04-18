import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

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
      input: {
        main: resolve(__dirname, 'index.html'),
        setup: resolve(__dirname, 'printer-setup-guide.html'),
        modelSearch: resolve(__dirname, 'model-search.html'),
        completeSetup: resolve(__dirname, 'complete-setup.html'),
        installationFailed: resolve(__dirname, 'installation-failed.html'),
      },
    },
  },
});
