import { createApp } from 'vue'
import App from './App.vue'

export function initBookingWidget(options?: { mountId?: string }) {
  const mountEl = document.getElementById(options?.mountId || 'booking')
  if (!mountEl) {
    console.error('Не найден контейнер для виджета бронирования')
    return
  }

  // Можно передавать любые опции внутрь App (через provide/inject или props)
  createApp(App, options).mount(mountEl)
}
