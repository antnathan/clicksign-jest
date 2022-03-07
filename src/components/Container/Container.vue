<script setup>
import { ref } from "vue";
import { LoginForm } from "../LoginForm";

const message = ref("");

const handleSubmit = async (payload) => {
  try {
    const response = await (await fetch("/login", { method: "post", body: payload })).json();
    if (response.success)
      return message.value = "Success!";

    return message.value = 'Email or password is incorrect';
  } catch {
    message.value = "Error!";
  }
};
</script>

<template>
  <div v-if="message">
    {{ message }}
    <button @click="message = ''">Tentar novamente</button>
  </div>
  <LoginForm v-else @submit="handleSubmit" />
</template>
