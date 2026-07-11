import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        product: resolve(__dirname, 'product.html'),
        contact: resolve(__dirname, "contact.html")
      },
    },
  },
})
