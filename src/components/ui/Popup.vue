<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 flex items-center justify-center p-4" @click="closeOnBackdrop && $emit('update:modelValue', false)">
        <Transition name="popup">
          <div 
            v-if="modelValue" 
            class="bg-bg-primary rounded-lg w-full max-w-lg mx-auto z-50 overflow-hidden"
            @click.stop
          >
            <div class="flex justify-between items-start p-4 border-b-2 border-bg-secondary">
              <SectionTitle :title="title" class="!mb-0" />
              <button 
                @click="$emit('update:modelValue', false)" 
                class="text-secondary hover:text-primary cursor-pointer aspect-square focus:!outline-none select-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            
            <div class="p-8">
              <slot></slot>
            </div>
            
            <div v-if="$slots.footer" class="p-4 border-t-2 border-bg-secondary">
              <slot name="footer"></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>