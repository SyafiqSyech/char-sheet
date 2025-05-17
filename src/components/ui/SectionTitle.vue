<template>
  <div class="mb-4 font-semibold flex gap-2">
    <div class="!text-xl">🙦</div>
    <div class="!text-xl">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}
defineProps<Props>();
</script>