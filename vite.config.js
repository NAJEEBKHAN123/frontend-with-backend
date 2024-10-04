
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Using React plugin for Vite
  build: {
    outDir: 'dist', // Specifies the build output directory
  },
});
