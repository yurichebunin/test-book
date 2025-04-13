<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import SessionCard from './SessionCard.vue'

interface Session {
  id: number
  title: string
  time: string
  price: number
  available: boolean
}

const { sessions, chosenSessions } = defineProps<{
  sessions: Session[]
  chosenSessions: Session[]
}>()

const emits = defineEmits<{
  (e: 'select', session: Session): void
}>()

function onSelect(session: Session) {
  emits('select', session)
}
</script>

<template>
  <div class="session-column">
    <SessionCard
      v-for="session in sessions"
      :key="session.id"
      :session="session"
      :isSelected="chosenSessions.some(s => s.id === session.id)"
      @select="onSelect"
    />
  </div>
</template>

<style scoped>
.session-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
