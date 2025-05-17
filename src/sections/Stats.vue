<template>
  <div>

    <SecitonTitle title="Stats" />

    <div class="grid grid-cols-2 items-start gap-2">
      <div class="grid grid-cols-[1fr_2fr] items-center">
        <div class="italic">STR</div>
        <textInput placeholder="0 / 0" initialText="9 / 12" />
        <div class="italic">DEX</div>
        <textInput placeholder="0 / 0" initialText="8 / 8" />
        <div class="italic">WIL</div>
        <textInput placeholder="0 / 0" initialText="10 / 11" />
        <div class="italic">HP</div>
        <textInput placeholder="0 / 0" initialText="2 / 3" />
      </div>
      <div class="grid grid-cols-[1fr_2fr] items-center">
        <div class="italic">Armor</div>
        <textInput placeholder="0" initialText="1" />
        <div class="italic">Gold</div>
        <textInput placeholder="0" initialText="4" />
        <div class="italic">Dpvd.</div>
        <div class="flex items-center p-1">
          <Checkbox :modelValue="dpvd" @update:modelValue="dpvd = $event" />
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

const dpvd = ref(false);
</script>