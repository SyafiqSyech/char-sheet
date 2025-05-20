import { onMounted } from 'vue';
import { FONT_SIZE_KEY, FONT_SIZE_OPTIONS } from '../types/Settings';

export function useFontSize() {
  const applyFontSize = (size: string) => {
    const htmlElement = document.documentElement;

    const fontSizeOption = FONT_SIZE_OPTIONS.find(option => option.id === size);

    if (!fontSizeOption) {
      console.warn(`Font size "${size}" is not recognized.`);
      return;
    }

    htmlElement.classList.remove(...FONT_SIZE_OPTIONS.map(option => option.value));
    htmlElement.classList.add(fontSizeOption.value);
  };

  const loadInitialFontSize = () => {
    try {
      const settings = localStorage.getItem('app-settings');
      if (settings) {
        const parsed = JSON.parse(settings);
        if (parsed[FONT_SIZE_KEY]) {
          applyFontSize(parsed[FONT_SIZE_KEY]);
        }
      }
    } catch (error) {
      console.error('Failed to read font size from settings:', error);
    }
  };

  onMounted(() => {
    loadInitialFontSize();

    window.addEventListener('settings-updated', (event: any) => {
      if (event.detail && event.detail[FONT_SIZE_KEY]) {
        applyFontSize(event.detail[FONT_SIZE_KEY]);
      }
    });
  });

  return {
    applyFontSize
  };
}