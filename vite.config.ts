import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // add alias
    }
  },
  server: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^' + process.env.VUE_APP_BASE_API), '')
      },
      "/api": {
        target: "http://localhost:8999",
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/api'), '')
      }
    }
  }
})
