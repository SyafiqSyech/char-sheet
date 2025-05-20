import { watch, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import { debounce } from '../utilities/debounce';

export function useLocalStorage<T>(
  key: string,
  data: Ref<T>,
) {
  const isAutoSaveEnabled = () => {
    try {
      const settings = localStorage.getItem('app-settings');
      if (settings) {
        const parsed = JSON.parse(settings);
        return parsed.autoSave !== false;
      }
    } catch (error) {
      console.error('Failed to read app-settings from localStorage:', error);
    }
    return true;
  };

  const saveToStorage = () => {
    if (!isAutoSaveEnabled()) return;
    try {
      localStorage.setItem(key, JSON.stringify(data.value));
      console.log(`Auto-saved data for key: ${key}`);
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  };

  const loadFromStorage = () => {
    try {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        // Merge the saved data with the existing data to handle partial updates
        data.value = { ...data.value, ...JSON.parse(savedData) };
        console.log(`Loaded data from localStorage for key: ${key}`);
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  };

  const debouncedSave = debounce(saveToStorage, 1000);

  watch(data, () => {
    debouncedSave();
  }, { deep: true });

  onMounted(() => {
    loadFromStorage();
  });

  onUnmounted(() => {
    saveToStorage();
  });

  return {
    saveNow: saveToStorage,
    loadNow: loadFromStorage,
    clearSaved: () => localStorage.removeItem(key)
  };
}