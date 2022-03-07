<script>
  export default {
    inheritAttrs: false,
  }
</script>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },

  label: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <label>
    <span>
      {{ label }}
    </span>

    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
