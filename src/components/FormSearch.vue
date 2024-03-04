<script setup>
import { ref } from 'vue'
const emit = defineEmits(['formsubmit', 'update:modelValue' ])
const searchInput = ref('')
function handleSubmit(event){
  event.preventDefault()
  emit('formsubmit', searchInput.value)
}
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchInput"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <button>Carregar Usuário</button>
  </form>
</template>
