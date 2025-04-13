import { createApp } from 'vue'
import App from './App.vue'

export function initBookingWidget(options?: { mountId?: string }) {
  const mountEl = document.getElementById(options?.mountId || 'booking')
  if (!mountEl) {
    console.error('Не найден контейнер для виджета бронирования')
    return
  }
  createApp(App, options).mount(mountEl)
}

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.BookingWidget = { initBookingWidget }
}
