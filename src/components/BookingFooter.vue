<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits<{
  (e: 'book'): void
}>()

function onClick() {
  emits('book')
}
</script>

<template>
  <div class="booking-footer">
    <button @click="onClick">Бронировать</button>
  </div>
</template>

<style scoped>
.booking-footer {
  text-align: center;
  margin-bottom: 40px;
}
button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}
button:hover {
  background-color: #666;
}
</style>
