import { ref, watch } from 'vue';
import { useLocalStorage } from './useLocalStorage';
import { useFontSize } from './useFontSize';
import type { Settings } from '../types/Settings';
import { DEFAULT_SETTINGS, SETTINGS_KEY, AUTO_SAVE_KEY } from '../types/Settings';

const settingsRef = ref<Settings>({ ...DEFAULT_SETTINGS });
let isInitialized = false;

export function useSettings() {
  if (!isInitialized) {
    const { applyFontSize } = useFontSize();

    const { loadNow } = useLocalStorage(SETTINGS_KEY, settingsRef);

    loadNow();

    if (settingsRef.value.fontSize) {
      applyFontSize(settingsRef.value.fontSize);
    }

    watch(() => settingsRef.value[AUTO_SAVE_KEY], (newAutoSave) => {
      if (newAutoSave === true) {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsRef.value));
      }
    });

    isInitialized = true;
  }

  return {
    settings: settingsRef
  };
}