// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cakery-react-web-site/', // <-- detta är korrekt för länken https://ed-vin.github.io/cakery-react-web-site/
  plugins: [react()],
});
