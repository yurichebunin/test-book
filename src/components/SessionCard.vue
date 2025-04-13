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
  emits('select', session)
}
</script>

<template>
  <div
    class="session-card"
    :class="{
      'unavailable': !session.available,
      'selected': isSelected,
      'available': session.available && !isSelected
    }"
    @click="onClick"
  >
    <div class="time">{{ session.time }}</div>
    <div class="title">{{ session.title }}</div>
    <div class="price" v-if="session.available">{{ session.price }} руб.</div>
  </div>
</template>

<style scoped>
.session-card {
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
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
</style>
