<template>
  <div class="lg:col-span-2 flex items-center flex-col gap-1 relative group">
    
    <div class="flex flex-col lg:flex-row-reverse items-end gap-2 absolute w-full -top-18 lg:top-0 text-secondary text-xs">
      <button class="hover:underline" @click="showSettings = true">
        settings.
      </button>
      <button class="hover:underline" @click="showEditProfile = true">
        edit profile.
      </button>
    </div>

    <div
      class="h-28 w-28 rounded-full overflow-hidden flex justify-center items-center bg-bg-secondary bg-cover p-4"
    >
      <img src="../assets/cubes.svg">
    </div>
    
    <div class="text-center">
      <div class="!text-3xl font-semibold uppercase" :class="profileData.name ? '' : 'text-tertiary'" >{{ profileData.name || 'Nameless' }}</div>
      <div class="!text-xl font-semibold uppercase" >{{ profileData.title }}</div>
    </div>
  
    <SettingsPopup 
      v-model="showSettings" 
      :settings-data="settings" 
      @save="onSettingsSaved" 
    />
    
    <EditProfilePopup
      v-model="showEditProfile" 
      :profile="profileData" 
      @save="onProfileSaved" 
    />
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SettingsPopup from '../components/popups/SettingsPopup.vue';
import EditProfilePopup from '../components/popups/EditProfilePopup.vue';
import { useLocalStorage } from '../composables/useLocalStorage';
import { DEFAULT_PROFILE, type Profile } from '../types/Profile';
import { useSettings } from '../composables/useSettings';
import { SETTINGS_KEY, type Settings } from '../types/Settings';

const emit = defineEmits(['settings', 'edit']);

const showSettings = ref(false);
const showEditProfile = ref(false);

const profileData = ref<Profile>({...DEFAULT_PROFILE});

const { settings } = useSettings();

useLocalStorage('character-profile', profileData);

const onSettingsSaved = (newSettings: Settings) => {
  Object.assign(settings.value, newSettings);
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings.value));
  // emit('settings', settings.value);
};

const onProfileSaved = (newProfile: Profile) => {
  Object.assign(profileData.value, newProfile);
  // emit('edit', profileData.value);
};
</script>