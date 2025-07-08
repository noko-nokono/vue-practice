import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
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
  // 開発サーバー設定
  server: {
    // TypeScriptファイルの変更を監視
    watch: {
      usePolling: true,
    },
  },
  // ビルド設定
  build: {
    // TypeScriptファイルの最適化
    target: 'ES2020',
    // ソースマップを生成
    sourcemap: true,
    // 未使用のコードを削除
    rollupOptions: {
      output: {
        manualChunks: {
          // Vue関連のコードを分離
          vue: ['vue'],
          // Vue Router関連のコードを分離（使用している場合）
          // 'vue-router': ['vue-router'],
        },
      },
    },
  },
  // TypeScriptの型チェック設定
  optimizeDeps: {
    // TypeScriptファイルを事前にバンドル
    include: ['vue'],
  },
})
