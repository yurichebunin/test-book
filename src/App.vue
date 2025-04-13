<script setup lang="ts">
import { ref } from 'vue'
import BookingHeader from './components/BookingHeader.vue'
import SessionList from './components/SessionList.vue'
import ExtendedSessionCard from './components/ExtendedSessionCard.vue'
import BookingFooter from './components/BookingFooter.vue'

interface Session {
  id: number
  title: string
  time: string
  price: number
  available: boolean
  orderIndex?: number
}

const columnsData = ref<Session[][]>([
  [
    { id: 1, title: 'Roof lodge 1', time: '11:00 – 14:00', price: 5000, available: true, orderIndex: 1 },
    { id: 2, title: 'Roof lodge 2', time: '11:30 – 14:30', price: 5000, available: false, orderIndex: 2 },
    { id: 3, title: 'Roof lodge 3', time: '12:00 – 15:00', price: 5000, available: true, orderIndex: 3 }
  ],
  [
    { id: 4, title: 'Roof lodge 1', time: '14:30 – 17:30', price: 5000, available: true, orderIndex: 1 },
    { id: 5, title: 'Roof lodge 2', time: '15:00 – 18:00', price: 5000, available: false, orderIndex: 2 },
    { id: 6, title: 'Roof lodge 3', time: '15:30 – 18:30', price: 5000, available: true, orderIndex: 3 }
  ],
  [
    { id: 7, title: 'Roof lodge 1', time: '18:00 – 9:30', price: 5000, available: true, orderIndex: 1 },
    { id: 8, title: 'Roof lodge 2', time: '18:30 – 10:00', price: 5000, available: true, orderIndex: 2 },
    { id: 9, title: 'Roof lodge 3', time: '19:00 – 10:30', price: 5000, available: true, orderIndex: 3 }
  ]
])

const extendedSession = ref<Session>({
  id: 100,
  title: 'Roof lodge — суточный',
  time: '15:00 – 12:00',
  price: 25000,
  available: true
})

const chosenSessions = ref<Session[]>([])
const peopleCount = ref(2)
const currentDate = ref('2024-12-18')

function isExtended(session: Session) {
  return session.id === extendedSession.value.id
}

function onSelectSession(session: Session) {
  if (!session.available) return
  const idx = chosenSessions.value.findIndex(s => s.id === session.id)
  if (idx !== -1) {
    chosenSessions.value.splice(idx, 1)
    return
  }
  if (isExtended(session)) {
    chosenSessions.value = []
    chosenSessions.value.push(session)
    return
  }
  chosenSessions.value = chosenSessions.value.filter(s => !isExtended(s))
  if (chosenSessions.value.length === 0) {
    chosenSessions.value.push(session)
  } else if (chosenSessions.value.length === 1) {
    chosenSessions.value.push(session)
  } else {
    chosenSessions.value = [session]
  }
}

function onBook() {
  if (chosenSessions.value.length === 0) {
    alert('Пожалуйста, выберите сеанс')
    return
  }
  alert(`Вы выбрали:\n${chosenSessions.value.map(s => s.time).join('\n')}`)
}
</script>

<template>
  <div class="booking">
    <BookingHeader
      :peopleCount="peopleCount"
      :currentDate="currentDate"
      @update:peopleCount="peopleCount = $event"
      @update:currentDate="currentDate = $event"
    />
    <SessionList
      :columnsData="columnsData"
      :chosenSessions="chosenSessions"
      @select="onSelectSession"
    />
    <ExtendedSessionCard
      :session="extendedSession"
      :isSelected="chosenSessions.some(s => s.id === extendedSession.id)"
      @select="onSelectSession"
    />
    <div class="hint">Доступен выбор не более двух сеансов подряд</div>
    <BookingFooter @book="onBook" />
  </div>
</template>

<style scoped>
.booking {
  max-width: 900px;
  margin: 0 auto;
  font-family: sans-serif;
}
.hint {
  margin-top: 24px;
  margin-bottom: 24px;
  color: #666;
  font-style: italic;
  text-align: center;
}
</style>
