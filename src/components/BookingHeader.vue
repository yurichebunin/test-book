<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  peopleCount: number
  currentDate: string
}>()

const emits = defineEmits<{
  (e: 'update:peopleCount', value: number): void
  (e: 'update:currentDate', value: string): void
}>()

function onPeopleChange(e: Event) {
  const val = Number((e.target as HTMLSelectElement).value)
  emits('update:peopleCount', val)
}

function onDateChange(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emits('update:currentDate', val)
}
</script>

<template>
  <div class="booking-header">
    <select :value="peopleCount" @change="onPeopleChange">
      <option v-for="n in 10" :key="n" :value="n">{{ n }} человек</option>
    </select>
    <input type="date" :value="currentDate" @input="onDateChange" />
  </div>
</template>

<style scoped>
.booking-header {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
}

select,
input[type=date] {
  padding: 8px;
  font-size: 14px;
}
</style>
