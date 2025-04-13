<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Session {
  id: number
  title: string
  time: string
  price: number
  available: boolean
}

const { session, isSelected } = defineProps<{
  session: Session
  isSelected: boolean
}>()

const emits = defineEmits<{
  (e: 'select', session: Session): void
}>()

function onClick() {
  if (!session.available) return
  emits('select', session)
}
</script>

<template>
  <div
    class="extended-session"
    :class="{
      'unavailable': !session.available,
      'selected': isSelected,
      'available': session.available && !isSelected
    }"
    @click="onClick"
  >
    <div class="info">
      <b>Длительный сеанс {{ session.time }}</b>
      <div>{{ session.title }} — {{ session.price }} руб.</div>
    </div>
  </div>
</template>

<style scoped>
.extended-session {
  margin-top: 16px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}
.available {
  background-color: #666;
  color: #000;
}
.unavailable {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #ccc;
  cursor: default;
}
.selected {
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
}
.info {
  font-size: 14px;
}
</style>
