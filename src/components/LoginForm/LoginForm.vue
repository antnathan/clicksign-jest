<script setup>
import { reactive, watchEffect } from 'vue'

import { VInput } from '../VInput';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['submit']);

const formData = reactive({
  email: '',
  password: '',
});

watchEffect(() => {
  formData.email = props.data?.email,
  formData.password = props.data?.password
})


const handleSubmit = (e) => {
  e.preventDefault();
  if(!formData.email || !formData.password) return;
  emit('submit', formData);
}
</script>

<template>
  <form @submit="handleSubmit">
    <VInput
      v-model="formData.email"
      data-testid="email-input"
      label="Email"
      type="email"
    />

    <VInput
      v-model="formData.password"
      data-testid="password-input"
      type="password"
      label="Password"
    />

    <button type="submit" data-testid="submit-button">Submit</button>
  </form>
</template>
