<template>
  <div class="grid grid-cols-[minmax(auto,24rem)] lg:grid-cols-[repeat(2,24rem)] justify-center gap-8">

    <Profile name="Bobby" :image="image" />
    
    <div class="flex flex-col gap-8">

      <Stats />

      <Traits />

      <Scars />
    
    </div>
    
    <div>

      <Inventory />
    
    </div>

    <Notes />
    
  </div>
</template>

<script setup lang="ts">
import image from './assets/bob.png';

import Profile from './sections/Profile.vue';
import Stats from './sections/Stats.vue';
import Traits from './sections/Traits.vue';
import Scars from './sections/Scars.vue';
import Inventory from './sections/Inventory.vue';
import Notes from './sections/Notes.vue';
</script>