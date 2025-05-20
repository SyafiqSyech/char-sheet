<template>
  <Popup :model-value="modelValue" @update:modelValue="val => $emit('update:modelValue', val)" title="Settings">
    <div class="flex flex-col gap-8">
      
      <div>
        <h3 class="text-sm font-semibold mb-2">Font Size</h3>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="size in FONT_SIZE_OPTIONS" 
            :key="size.id"
            @click="updateSetting(FONT_SIZE_KEY, size.id)"
            class="px-3 py-1 rounded-full border-2 border-bg-secondary"
            :class="{'bg-primary-light': settings[FONT_SIZE_KEY] === size.id}"
          >
            {{ size.label }}
          </button>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold mb-2">Auto Save</h3>
        <div class="flex items-center">
          <Checkbox 
            :modelValue="settings.autoSave ?? false" 
            @update:modelValue="updateSetting('autoSave', $event)" 
          />
          <span class="ml-2">Enable auto save</span>
        </div>
      </div>

      <div>
        <button 
          class="px-4 py-2 bg-[#522b2b] hover:bg-[#693636] rounded-md"
          @click="deleteAllData()"
        >
          Delete All Data
        </button>
      </div>

    </div>
    
    <template #footer>
      <div class="flex justify-end gap-2">
        <button 
          class="px-4 py-2 bg-bg-primary hover:bg-primary-light rounded-md"
          @click="$emit('update:modelValue', false)"
        >
          Close
        </button>
        <button 
          class="px-4 py-2 bg-[#2b3c52] hover:bg-[#364c69] text-primary rounded-md"
          @click="saveSettings"
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
import Checkbox from '../inputs/Checkbox.vue';
import { 
  DEFAULT_SETTINGS, 
  type Settings, 
  type SettingsKey, 
  FONT_SIZE_OPTIONS,
  FONT_SIZE_KEY,
  SETTINGS_KEY,
} from '../../types/Settings';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  settingsData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'save']);

const settings = reactive<Settings>({...DEFAULT_SETTINGS});

watch(() => props.settingsData, (newSettings) => {
  if (newSettings) {
    Object.keys(newSettings).forEach((key) => {
      if (key in settings) {
        (settings as Settings)[key as SettingsKey] = newSettings[key as SettingsKey];
      }
    });
  }
}, { immediate: true });

const updateSetting = (key: SettingsKey, value: any) => {
  (settings as Settings)[key] = value;
};

const saveSettings = () => {
  const newSettings = { ...settings };
  emit('save', newSettings);
  emit('update:modelValue', false);
  
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
  
  window.dispatchEvent(new CustomEvent('settings-updated', { 
    detail: newSettings 
  }));
};

const deleteAllData = () => {
  if (confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
    localStorage.clear();
    alert('All data has been deleted. Please refresh the page.');
  }
};
</script>