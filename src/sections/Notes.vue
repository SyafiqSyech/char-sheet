<template>
  <div class="lg:col-span-2">

    <div class="mb-4 font-semibold flex gap-2">
      <div class="!text-xl">🙦</div>
      <div class="!text-xl">Notes</div>
    </div>
    
    <div class="bg-[#202020] rounded-lg p-4">
      <NoteInput placeholder="Write a note..." minHeight="48" />
    </div>

  </div>
</template>

<script setup lang="ts">
import NoteInput from '../components/inputs/NoteInput.vue';
</script>