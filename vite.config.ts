import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Точка входа для сборки в библиотеку
      entry: './src/libEntry.ts',
      // Глобальное имя (если формат UMD/IIFE)
      name: 'BookingWidget',
      // Имя выходного файла
      fileName: (format) => `booking-widget.${format}.js`,
    },
    rollupOptions: {
      // Если хотим, чтобы Vue включалась внутрь бандла, оставляем external пустым
      external: [],
      output: {
        // Глобальные переменные, если что-то укажем в external
        globals: {}
      }
    }
  }
})
