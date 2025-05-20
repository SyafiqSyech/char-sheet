<template>
  <Popup :model-value="modelValue" @update:modelValue="val => $emit('update:modelValue', val)" title="Settings">
    <div class="flex flex-col gap-8">
      
      <div>
        <div class="text-sm font-semibold mb-2">Font Size</div>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="size in FONT_SIZE_OPTIONS" 
            :key="size.id"
            @click="updateSetting(FONT_SIZE_KEY, size.id)"
            class="px-3 py-1 rounded-lg border-2 border-bg-secondary"
            :class="{'bg-primary-light border-tertiary': settings[FONT_SIZE_KEY] === size.id}"
          >
            {{ size.label }}
          </button>
        </div>
      </div>

      <div>
        <div class="text-sm font-semibold mb-2">Auto Save</div>
        <div class="flex items-center">
          <Checkbox 
            :modelValue="settings.autoSave ?? false" 
            @update:modelValue="updateSetting('autoSave', $event)" 
          />
          <span class="ml-2">Enable auto save</span>
        </div>
      </div>

      <div>
        <div class="text-sm font-semibold mb-2">Danger Zone</div>
        <button 
          class="px-4 py-2 bg-[#522b2b] hover:bg-[#693636] rounded-md"
          @click="openDeletePopup()"
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

    <div id="delete-popup" class="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 items-center justify-center p-4 hidden" @click="closeDeletePopup()">
      <div class="bg-bg-secondary rounded-lg p-8">
        Are you sure you want to delete all data? This action cannot be undone.
        <div class="flex justify-center gap-2 mt-4">
          <button 
            class="px-4 py-2 bg-bg-primary hover:bg-primary-light rounded-md"
            @click="closeDeletePopup()"
          >
            Cancel
          </button>
          <button 
            class="px-4 py-2 bg-[#522b2b] hover:bg-[#693636] rounded-md"
            @click="deleteAllData()"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
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

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      if (props.settingsData.fontSize == null) {
        Object.assign(settings, DEFAULT_SETTINGS);
      } else {
        Object.keys(props.settingsData).forEach((key) => {
          if (key in settings) {
            (settings as Settings)[key as SettingsKey] = props.settingsData[key as SettingsKey];
          }
        });
      }
    }
  }
);

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
  
  window.dispatchEvent(new CustomEvent('settings-updated', { 
    detail: newSettings 
  }));
}

const openDeletePopup = () => {
  const deletePopup = document.querySelector('#delete-popup') as HTMLDivElement;
  if (deletePopup) {
    deletePopup.classList.remove('hidden');
    deletePopup.classList.add('flex');
  }
};

const closeDeletePopup = () => {
  const deletePopup = document.querySelector('#delete-popup') as HTMLDivElement;
  if (deletePopup) {
    deletePopup.classList.remove('flex');
    deletePopup.classList.add('hidden');
  }
};

const deleteAllData = (): void => {
  localStorage.clear();
  location.reload();
};
</script>