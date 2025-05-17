<template>
  <div class="lg:col-span-2 flex items-center flex-col gap-1">
    
    <div
      class="h-28 w-28 rounded-full overflow-hidden flex justify-center items-center bg-primary bg-cover"
      :style="{ backgroundImage: `url('${image}')` }">
    </div>
    
    <div class="text-center">
      <div class="!text-3xl font-semibold">{{ name }}</div>
      <!-- <div class="!text-xl font-semibold">Blacksmith</div> -->
    </div>
  
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  image: string;
}

defineProps<Props>();
</script>