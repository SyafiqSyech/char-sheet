<template>
  <button @click="toggleCheckbox" class="select-none outline-offset-2 transition-all">
    <span v-if="modelValue">◆</span>
    <span v-else>◇</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const toggleCheckbox = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>