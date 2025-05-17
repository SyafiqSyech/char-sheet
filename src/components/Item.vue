<template>
  <div :class="`group w-full grid grid-cols-[1fr_1.5rem_1.5rem] odd:bg-bg-secondary ${fatigue ? '!bg-[#411e1e]' : ''}`">
    
    <TextInput placeholder="Empty" :disable="fatigue" />
    
    <template v-if="inventory">
    
      <div class="w-6 h-full flex justify-center items-center">
        <div v-if="!fatigue" :class="`${hand ? '' : 'opacity-0'} group-hover:opacity-100 cursor-pointer transition-all`">
            <Checkbox v-model="hand" />
        </div>
      </div>
      
      <div class="w-6 h-full flex justify-center items-center">
        <Checkbox v-model="fatigue" />
      </div>
    
    </template>

  </div>
</template>

<script setup lang="ts">
import TextInput from '../components/inputs/TextInput.vue';
import Checkbox from './inputs/Checkbox.vue';

interface Props {
  inventory?: boolean;
}

const props = defineProps<Props>();

import { ref } from 'vue';

const fatigue = ref(false);
const hand = ref(false);
</script>