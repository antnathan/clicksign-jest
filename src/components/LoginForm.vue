<script setup>
import { ref, reactive } from 'vue'

import VInput from './VInput.vue';

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

const handleSubmit = () => {
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
  </form>
</template>
