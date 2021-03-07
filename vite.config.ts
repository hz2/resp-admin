import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/



export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      '@': '/src' // add alias
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          const arr = ['element-plus', 'vue-router', 'vuex', 'vue']
          const match = id.match(new RegExp(arr.map(x => 'node_modules/' + x).join("|"), 'gi'))
          if (match) {
            return match[0].replace('node_modules/', 'vendors/')
          } else if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    proxy: {
      // [env.VITE_BASE_API]: {
      //   target: env.VITE_PROXY_URL,
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(new RegExp('^' + env.VITE_BASE_API), '')
      // },
      // "/api": {
      //   target: "http://localhost:8999",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(new RegExp('^/api'), '')
      // }
    }
  }
})
