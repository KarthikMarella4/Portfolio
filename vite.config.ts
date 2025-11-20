import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/KarthikMarella4-Karthik-Marella-Portfolio/',
  plugins: [react()],
  build: { outDir: 'dist' },
});
