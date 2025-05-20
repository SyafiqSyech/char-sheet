<template>
  <div>
    <input
      type="text"
      :placeholder="disable ? '' : placeholder"
      :value="modelValue"
      @input="handleInput"
      ref="textInput"
      :class="`input p-1 w-full h-full disabled:hover:!bg-transparent disabled:line-through ${textEnd ? 'text-end' : ''}`"
      rows="1"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
      :disabled="disable"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxChars: {
    type: Number,
    default: null
  },
  disable: {
    type: Boolean,
    default: false
  },
  textEnd: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);
const textInput = ref<HTMLInputElement | null>(null);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

onMounted(() => {
  if (props.maxChars && textInput.value) {
    textInput.value.setAttribute('maxlength', props.maxChars.toString());
  }
});
</script>