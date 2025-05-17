<template>
  <div @click="toggleCheckbox" class="cursor-pointer select-none">
    <span v-if="modelValue">◆</span>
    <span v-else>◇</span>
  </div>
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