<script setup>
import { reactive } from 'vue'

import { VInput } from '../VInput';

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['submit']);

const formData = reactive({
  email: '',
  password: '',
});

const handleSubmit = (e) => {
  e.preventDefault();
  if(!formData.email || !formData.password) return;

  emit('submit', formData);
}
</script>

<template>
  <form @submit="handleSubmit">
    <VInput
      label="Email"
      v-model="formData.email"
      type="email"
    />

    <VInput
      label="Password"
      v-model="formData.password"
      type="password"
    />

    <button>Submit</button>
  </form>
</template>
