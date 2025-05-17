<template>
  <div class="grid grid-cols-[minmax(auto,24rem)] lg:grid-cols-[repeat(2,24rem)] justify-center gap-8">

    <Profile name="Bobby" background="Bonekeeper" :image="image" />
    
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
  
  <CharacterCreation v-if="showCharacterCreation" @close="showCharacterCreation = false" />
  <button
    class="fixed bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded shadow"
    @click="showCharacterCreation = true"
  >
    Open Character Creation
  </button>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import image from './assets/bob.png';

import Profile from './sections/Profile.vue';
import Stats from './sections/Stats.vue';
import Traits from './sections/Traits.vue';
import Scars from './sections/Scars.vue';
import Inventory from './sections/Inventory.vue';
import Notes from './sections/Notes.vue';

import CharacterCreation from './components/popups/CharacterCreation.vue';

const showCharacterCreation = ref(true);
</script>