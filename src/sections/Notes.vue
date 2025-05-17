<template>
  <div class="lg:col-span-2">

    <SectionTitle title="Notes" />
    
    <div class="bg-[#202020] rounded-lg p-4">
      <NoteInput placeholder="Write a note..." minHeight="48" />
    </div>

  </div>
</template>

<script setup lang="ts">
import NoteInput from '../components/inputs/NoteInput.vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
</script>