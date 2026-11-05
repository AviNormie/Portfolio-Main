import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
