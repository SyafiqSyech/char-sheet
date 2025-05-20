<template>
  <Popup :model-value="modelValue" @update:modelValue="val => $emit('update:modelValue', val)" title="Edit Profile">
    <div class="flex flex-col gap-8">
      <div>
        <label class="block text-sm font-semibold mb-2">Name</label>
        <TextInput v-model="editProfileData.name" placeholder="Character name" class="bg-bg-primary" />
      </div>
      
      <div>
        <label class="block text-sm font-semibold mb-2">Title</label>
        <TextInput v-model="editProfileData.title" placeholder="Character title" class="bg-bg-primary" />
      </div>
      
      <div>
        <label class="block text-sm font-semibold mb-2">Profile Icon</label>
        <div class="bg-bg-primary w-24 rounded-full p-4">
          <img src="../../assets/cubes.svg">
        </div>
      </div>
    </div>
    
    <template #footer>
      <div class="flex justify-end gap-2">
        <button 
          class="px-4 py-2 bg-bg-primary hover:bg-primary-light rounded-md"
          @click="$emit('update:modelValue', false)"
        >
          Cancel
        </button>
        <button 
          class="px-4 py-2 bg-[#2b3c52] hover:bg-[#364c69] text-primary rounded-md"
          @click="saveProfile"
        >
          Save
        </button>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import Popup from '../ui/Popup.vue';
import TextInput from '../inputs/TextInput.vue';
import type { Profile } from '../../types/Profile';
import { DEFAULT_PROFILE } from '../../types/Profile';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  profile: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'save']);

const editProfileData = reactive<Profile>({...DEFAULT_PROFILE});

watch(() => props.profile, (newProfile) => {
  if (newProfile) {
    editProfileData.name = newProfile.name || DEFAULT_PROFILE.name;
    editProfileData.title = newProfile.title || DEFAULT_PROFILE.title;
    editProfileData.icon = newProfile.icon || newProfile.icon || DEFAULT_PROFILE.icon;
  }
}, { immediate: true });

const saveProfile = () => {
  emit('save', {
    name: editProfileData.name,
    title: editProfileData.title,
    icon: editProfileData.icon
  });
  emit('update:modelValue', false);
};
</script>