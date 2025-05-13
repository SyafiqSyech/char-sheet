<script setup lang="ts">
import image from './assets/bob.png';
import NoteInput from './components/inputs/NoteInput.vue';
import TextAreaInput from './components/inputs/TextAreaInput.vue';
import TextInput from './components/inputs/TextInput.vue';
</script>

<template>
  <div class="grid grid-cols-[minmax(auto,24rem)] lg:grid-cols-[repeat(2,24rem)] justify-center gap-8">

    <div class="lg:col-span-2">
      <div class="flex items-center flex-col gap-1">
        <div class="h-28 w-28 rounded-full overflow-hidden flex justify-center items-center bg-[#f4f4f4] bg-cover"
          :style="{ backgroundImage: `url(${image})` }">
        </div>
        <div class="text-center">
          <div class="!text-3xl font-semibold">Bobby</div>
          <!-- <div class="!text-xl font-semibold">Blacksmith</div> -->
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8">

      <div class="">
        <div class="mb-4 font-semibold flex gap-2">
          <div class="!text-xl">🙦</div>
          <div class="!text-xl">Stats</div>
        </div>
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
              <div>◇</div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="mb-4 font-semibold flex gap-2">
          <div class="!text-xl">🙦</div>
          <div class="!text-xl">Traits</div>
        </div>
        <TextAreaInput placeholder="No traits..." />
      </div>

      <div class="">
        <div class="mb-4 font-semibold flex gap-2">
          <div class="!text-xl">🙦</div>
          <div class="!text-xl">Scars</div>
        </div>
        <TextAreaInput placeholder="No scars..." />
      </div>
      
      <div class="">
        <div class="mb-4 font-semibold flex gap-2">
          <div class="!text-xl">🙦</div>
          <div class="!text-xl">Notes</div>
        </div>
        <div class="bg-[#202020] rounded-lg p-4">
          <NoteInput placeholder="Write a note..." minHeight="48" />
        </div>
      </div>
    </div>

    <div class="">
      <div class="mb-4 font-semibold flex gap-2">
        <div class="!text-xl">🙦</div>
        <div class="!text-xl">Inventory</div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="border-2 border-[#202020] rounded-lg py-2 px-3">
          <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] items-end pb-1">
            <div class="italic font-semibold">Bag</div>
            <div class="w-6 flex justify-center overflow-visible">
              <div class="!text-xs text-[#787878] cursor-help">hnd.</div>
            </div>
            <div class="w-6 flex justify-center overflow-visible">
              <div class="!text-xs text-[#787878] cursor-help">ftg.</div>
            </div>
          </div>
          <div class="inv">
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem]">
              <TextInput />
              <div class="w-6 h-full flex justify-center items-center">
                <div class="opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
              </div>
              <div class="w-6 h-full flex justify-center items-center">◇</div>
            </div>
          </div>
        </div>

        <div class="border-2 border-[#202020] rounded-lg py-2 px-3">
          <div class="italic font-semibold pb-1">Petty</div>
          <TextAreaInput placeholder="No petty items..." />
        </div>

        <!-- <div class="border-2 border-[#202020] rounded-lg py-2 px-3">
          <div class="italic font-semibold pb-1">Cart</div>
          <div class="inv">
            <TextInput />
            <TextInput />
            <TextInput />
            <TextInput />
          </div>
        </div> -->

        <div class="">
          <div
            class="text-[#787878] !text-sm py-1 px-3 text-center hover:bg-[#202020] border-2 border-[#202020] rounded-full cursor-pointer">
            + Add Container
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inv>div:nth-child(odd) {
  background: #202020;
}
</style>
