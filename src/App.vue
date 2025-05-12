<script setup lang="ts">
import image from './assets/bob.png';
</script>

<template>
  <div class="grid grid-cols-[minmax(auto,24rem)] lg:grid-cols-[repeat(2,24rem)] justify-center gap-16">
    
    <div class="col-span-2">
      <div class="flex items-center flex-col gap-1">
        <div class="h-28 w-28 rounded-full overflow-hidden flex justify-center items-center bg-[#f4f4f4] bg-cover" :style="{ backgroundImage: `url(${image})` }">
        </div>
        <div class="text-center">
          <div class="!text-3xl font-semibold">Bobby</div>
          <!-- <div class="!text-xl font-semibold">Blacksmith</div> -->
        </div>
      </div>
    </div>
    
    <div class="flex flex-col gap-16">
      <div class="">
        <div class="mb-4 font-semibold flex gap-2"><div class="!text-xl">🙦</div><div class="!text-xl">Stats</div></div>
        <div class="stat grid grid-cols-[4rem_3fr_4rem_3fr] gap-2">
          <div class="italic">STR</div>
          <div class="">9 / 12</div>
          <div class="italic">Armor</div>
          <div class="">1</div>
          <div class="italic">DEX</div>
          <div class="">8 / 8</div>
          <div class="italic">Gold</div>
          <div class="">4</div>
          <div class="italic">WIL</div>
          <div class="">10 / 11</div>
          <div class="italic">Deprived</div>
          <div class="">◇</div>
          <div class="italic">HP</div>
          <div class="">2 / 3</div>
        </div>
      </div>
  
      <div class="">
        <div class="mb-4 font-semibold flex gap-2"><div class="!text-xl">🙦</div><div class="!text-xl">Inventory</div></div>
        <div class="flex flex-col gap-4">
  
          <div>
            <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] items-end pr-2">
              <div class="italic">Bag</div>
              <div class="w-6 flex justify-center overflow-visible"><div class="!text-xs text-[#787878] cursor-help">hnd.</div></div>
              <div class="w-6 flex justify-center overflow-visible"><div class="!text-xs text-[#787878] cursor-help">ftg.</div></div>
            </div>
            <div class="inv">
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Torch (3 uses)</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Icy Touch Spellbook</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Sickle (d4)</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Rations (3 uses)</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Bucket</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Honeyclasp (3 charges)</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Helmet (+1 Armor)</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Lyre</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>Crossbow</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
              <div class="group w-full grid grid-cols-[1fr_1.5rem_1.5rem] p-2">
                <div>*</div>
                <div class="w-6 text-center opacity-0 group-hover:opacity-100 cursor-pointer transition-all">◇</div>
                <div class="w-6 text-center">◇</div>
              </div>
            </div>
            <div class="flex items-center bg-[#202020]">
              <div class="italic !text-sm px-4">Petty</div>
              <!-- <div>Chalk, Whistle, Signet Ring</div> -->
              <div>Chalk, Whistle, Signet Ring, Dice Set, Sponge, Small Bell, Empty Flask</div>
            </div>
          </div>
  
          <div class="!text-sm text-center">+ Add Container</div>
          
        </div>
      </div>
    </div>

    <div class="">
      <div class="mb-4 font-semibold flex gap-2"><div class="!text-xl">🙦</div><div class="!text-xl">Notes</div></div>
      <div class="flex flex-col gap-2">
        <div>
          <div class="flex justify-between">
            <div class="italic">Background</div>
            <div class="rotate-180">▴</div>
          </div>
          <div class="bg-[#202020] rounded-lg p-4 mt-2">
            <div class="">
              Blacksmith
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="italic">Traits</div>
            <div class="rotate-180">▴</div>
          </div>
          <div class="bg-[#202020] rounded-lg p-4 mt-2">
            <div class="">
              Brawny physique, Bald head, Foreign clothing
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="italic">Scars</div>
            <div class="">▴</div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="italic">Journal</div>
            <div class="rotate-180">▴</div>
          </div>
          <div class="bg-[#202020] rounded-lg p-4 mt-2">
            <div class="">
              <b class="">Icy Touch:</b> A thick ice layer spreads across a touched surface, up to 10ft in radius.<br><br>
              <b class="">Honeyclasp</b>, 3 charges. A rusted ring that shrinks the bearer to 6”tall. Recharge: place in a thimble-sized cup of royal jelly.
            </div>
          </div>
        </div>
        <!-- <div class="bg-[#202020] rounded-lg p-4">
          <div class="font-bold italic">🟄 Title</div>
          <div class="">
            <b>Icy Touch:</b> A thick ice layer spreads across a touched surface, up to 10ft in radius.<br><br>
            <b>Honeyclasp</b>, 3 charges. A rusted ring that shrinks the bearer to 6”tall. Recharge: place in a thimble-sized cup of royal jelly.
          </div>
        </div>
        <div class="bg-[#202020] rounded-lg p-4">
          <div class="font-bold italic">🟄 Title</div>
          <div class="">
            <b>Icy Touch:</b> A thick ice layer spreads across a touched surface, up to 10ft in radius.<br><br>
            <b>Honeyclasp</b>, 3 charges. A rusted ring that shrinks the bearer to 6”tall. Recharge: place in a thimble-sized cup of royal jelly.
          </div>
        </div>
        <div class="bg-[#202020] rounded-lg p-4">
          <div class="font-bold italic">🟄 Title</div>
          <div class="">
            <b>Icy Touch:</b> A thick ice layer spreads across a touched surface, up to 10ft in radius.<br><br>
            <b>Honeyclasp</b>, 3 charges. A rusted ring that shrinks the bearer to 6”tall. Recharge: place in a thimble-sized cup of royal jelly.
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
  .inv > div:nth-child(odd) {
    background: #202020;
  }
</style>
