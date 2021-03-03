import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  base:"./",
  resolve: {
    alias: {
      '@': '/src' // add alias
    }
  },
  server: {
    proxy: {
      // [env.VITE_BASE_API]: {
      //   target: env.VITE_PROXY_URL,
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(new RegExp('^' + env.VITE_BASE_API), '')
      // },
      "/api": {
        target: "http://localhost:8999",
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/api'), '')
      }
    }
  }
})
