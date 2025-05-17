<template>
  <div>
    
    <SectionTitle title="Inventory" />

    <div class="flex flex-col gap-4">
      
      <div class="border-2 border-bg-secondary rounded-lg py-2 px-3">
        
        <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] items-end pb-1">
          <div class="italic">Bag</div>
          <div class="w-6 flex justify-center overflow-visible">
            <div class="!text-xs text-tertiary cursor-help">hnd.</div>
          </div>
          <div class="w-6 flex justify-center overflow-visible">
            <div class="!text-xs text-tertiary cursor-help">ftg.</div>
          </div>
        </div>
        
        <template v-for="i in 10" :key="i">
          <Item :inventory="true" :index="i" />
        </template>
      </div>

      <div class="border-2 border-bg-secondary rounded-lg py-2 px-3">
        <div class="italic pb-1">Petty</div>
        <TextAreaInput placeholder="e.g. Chalk, Ring, Dice, Pebble..." />
      </div>

      <!-- <div class="">
        <div
          class="text-[#787878] !text-sm py-1 px-3 text-center hover:bg-bg-secondary border-2 border-bg-secondary rounded-full cursor-pointer">
          + Add Container
        </div>
      </div> -->

    </div>
  </div>
</template>

<script setup lang="ts">
import TextAreaInput from '../components/inputs/TextAreaInput.vue';
import Item from '../components/ui/Item.vue';
import SectionTitle from '../components/ui/SectionTitle.vue';
</script>