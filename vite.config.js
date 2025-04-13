import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/libEntry.ts'),
            name: 'BookingWidget',
            fileName: function (format) { return "booking-widget.".concat(format, ".js"); },
            formats: ['iife', 'umd', 'es']
        },
        rollupOptions: {
            output: {
                globals: {
                    vue: 'Vue'
                }
            },
            external: ['vue']
        }
    }
});
