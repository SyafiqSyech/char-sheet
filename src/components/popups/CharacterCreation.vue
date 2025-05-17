<template>
  <div
    class="z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 backdrop-blur-sm fixed"
    @click.self="$emit('close')"
  >
  
    <div class="text-center absolute top-12 py-2 px-4 bg-bg-primary rounded-lg border-2 border-bg-secondary font-semibold">
      Character Creation
    </div>

    <div class="w-96 p-8 bg-bg-primary rounded-lg border-2 border-bg-secondary">

      <div v-if="step === 1">
        <div class="flex justify-center text-xl font-semibold gap-4">
          <div>🙤</div>
          <div>Details</div>
          <div>🙦</div>
        </div>
        <div class="flex flex-col gap-4 my-8">
          <TextInput class="bg-bg-secondary text-xl" placeholder="Name" v-model="form.name" />
          <TextInput class="bg-bg-secondary text-xl" placeholder="Background" v-model="form.background" />
          <TextAreaInput class="bg-bg-secondary text-xl" placeholder="Traits" :initHeight="3" v-model="form.traits"  />
        </div>
      </div>

      <div v-if="step === 2">
        <div class="flex justify-center text-xl font-semibold gap-4">
          <div>🙤</div>
          <div>Stats</div>
          <div>🙦</div>
        </div>
        <div class="grid grid-cols-3 gap-4 my-8 text-lg">
          <TextInput class="bg-bg-secondary" placeholder="STR" v-model="form.str" />
          <TextInput class="bg-bg-secondary" placeholder="DEX" v-model="form.dex" />
          <TextInput class="bg-bg-secondary" placeholder="WIL" v-model="form.wil" />
          <TextInput class="bg-bg-secondary" placeholder="HP" v-model="form.hp" />
          <TextInput class="bg-bg-secondary" placeholder="Armor" v-model="form.armor" />
          <TextInput class="bg-bg-secondary" placeholder="Gold" v-model="form.gold" />
        </div>
      </div>

      <div v-if="step === 3">
        <div class="flex justify-center text-xl font-semibold gap-4">
          <div>🙤</div>
          <div>Inventory</div>
          <div>🙦</div>
        </div>
        <div class="flex flex-col gap-4 my-8">
          <div>
            <div class="italic mb-1">Bag</div>
            <div class="flex flex-col gap-2">
              <template v-for="i in bagItems.length" :key="i - 1">
                <TextInput
                  class="bg-bg-secondary"
                  placeholder="Empty"
                  v-model="bagItems[i - 1]"
                />
              </template>
              <div class="flex gap-2">
                <div
                  v-if="bagItems.length > 1"
                  class="flex-1 text-[#787878] !text-sm py-1 px-3 text-center hover:bg-bg-secondary border-2 border-bg-secondary rounded-full cursor-pointer select-none"
                  @click="removeItem"
                >
                  - Remove Item
                </div>
                <div
                  v-if="bagItems.length < 10"
                  class="flex-1 text-[#787878] !text-sm py-1 px-3 text-center hover:bg-bg-secondary border-2 border-bg-secondary rounded-full cursor-pointer select-none"
                  @click="addItem"
                >
                  + Add Item
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="italic mb-1">Petty</div>
            <TextAreaInput class="bg-bg-secondary" placeholder="e.g. Chalk, Ring, Dice, Pebble..." />
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center text-secondary">
        <button
          class="hover:text-primary cursor-pointer"
          :disabled="step === 1"
          @click="prevStep"
        >
          <span v-if="step !== 1">Back</span>
        </button>
        <button
          class="hover:text-primary cursor-pointer"
          @click="nextStep"
        >
          {{ step === maxStep ? 'Finish' : 'Next' }}
        </button>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInput from '../inputs/TextInput.vue';
import TextAreaInput from '../inputs/TextAreaInput.vue';

const step = ref(1);
const maxStep = 3;

const bagItems = ref<string[]>(['']);

const form = ref({
  name: '',
  background: '',
  traits: '',
  str: '',
  dex: '',
  wil: '',
  hp: '',
  armor: '',
  gold: '',
  inventory: {
    bag: [],
    petty: '',
  }
});

function nextStep() {
  if (step.value < maxStep) {
    step.value++;
  } else {
    // Submit form
  }
}

function prevStep() {
  if (step.value > 1) step.value--;
}

function addItem() {
  if (bagItems.value.length < 10) {
    bagItems.value.push('');
  }
}

function removeItem() {
  if (bagItems.value.length > 1) {
    bagItems.value.pop();
  }
}
</script>