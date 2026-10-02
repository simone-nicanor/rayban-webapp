import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// base './' = percorsi relativi, così la build funziona sia su GitHub Pages
// (https://<utente>.github.io/<repo>/) sia su Vercel o in locale.
export default defineConfig({
  base: './',
  plugins: [react()],
});
