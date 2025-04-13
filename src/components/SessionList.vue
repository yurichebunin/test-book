<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import SessionColumn from './SessionColumn.vue'

interface Session {
  id: number
  title: string
  time: string
  price: number
  available: boolean
  orderIndex?: number
}

const { columnsData, chosenSessions } = defineProps<{
  columnsData: Session[][]
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
  <div class="session-list">
    <div class="session-list__headers">
      <div>Сеанс 1</div>
      <div>Сеанс 2</div>
      <div>Сеанс 3</div>
    </div>
    <div class="session-list__columns">
      <SessionColumn
        v-for="(column, index) in columnsData"
        :key="index"
        :sessions="column"
        :chosenSessions="chosenSessions"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<style scoped>
.session-list {
  margin-bottom: 24px;
}
.session-list__headers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
}
.session-list__columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
</style>
