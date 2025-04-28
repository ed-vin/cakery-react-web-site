import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cakery-react-web-site/', // <- Ditt nya repo-namn
  plugins: [react()],
});
