<template>
  <div>
    <SecitonTitle title="Stats" />

    <div class="grid grid-cols-2 items-start gap-2">
      <div class="grid grid-cols-[1fr_2fr] items-center">
        <div class="italic">STR</div>
          <TextInput placeholder="0 / 0" v-model="stats.str" />
        <div class="italic">DEX</div>
          <TextInput placeholder="0 / 0" v-model="stats.dex" />
        <div class="italic">WIL</div>
          <TextInput placeholder="0 / 0" v-model="stats.wil" />
        <div class="italic">HP</div>
          <TextInput placeholder="0 / 0" v-model="stats.hp" />
      </div>
      <div class="grid grid-cols-[1fr_2fr] items-center">
        <div class="italic">Armor</div>
          <TextInput placeholder="0" v-model="stats.armor" />
        <div class="italic">Gold</div>
          <TextInput placeholder="0" v-model="stats.gold" />
        <div class="italic">Dpvd.</div>
        <div class="flex items-center p-1">
          <Checkbox v-model="stats.dpvd" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '../components/inputs/Checkbox.vue';
import TextInput from '../components/inputs/TextInput.vue';
import SecitonTitle from '../components/ui/SectionTitle.vue';
import { useLocalStorage } from '../composables/useLocalStorage';

// Create a structured reactive object for all stats with no default values
const stats = ref({
  str: '',
  dex: '',
  wil: '',
  hp: '',
  armor: '',
  gold: '',
  dpvd: false
});

// Apply auto-save to the stats object
useLocalStorage('character-stats', stats);
</script>