import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // TypeScript設定
  esbuild: {
    // TypeScriptの型チェックを有効化
    target: 'ES2020',
  },
});