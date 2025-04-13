import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libEntry.ts'),
      name: 'BookingWidget',
      fileName: (format) => `booking-widget.${format}.js`,
      formats: ['iife']
    }
  }
})
