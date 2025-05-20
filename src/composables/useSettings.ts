import { ref } from 'vue';
import { useLocalStorage } from './useLocalStorage';
import { useFontSize } from './useFontSize';
import type { Settings } from '../types/Settings';
import { DEFAULT_SETTINGS, SETTINGS_KEY } from '../types/Settings';

const settingsRef = ref<Settings>({ ...DEFAULT_SETTINGS });
let isInitialized = false;

export function useSettings() {
  if (!isInitialized) {
    const { loadNow } = useLocalStorage(SETTINGS_KEY, settingsRef);

    loadNow();

    const { applyFontSize } = useFontSize();

    if (settingsRef.value.fontSize) {
      applyFontSize(settingsRef.value.fontSize as string);
    }

    isInitialized = true;
  }

  return {
    settings: settingsRef
  };
}