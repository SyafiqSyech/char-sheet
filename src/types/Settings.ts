export const SETTINGS_KEY = 'app-settings';
export const AUTO_SAVE_KEY = 'autoSave';
export const FONT_SIZE_KEY = 'fontSize';

export const FONT_SIZE_OPTIONS = [
  {
    id: 'xsmall',
    value: 'text-xs',
    label: 'Puny',
  },
  {
    id: 'small',
    value: 'text-sm',
    label: 'Meager',
  },
  {
    id: 'base',
    value: 'text-base',
    label: 'Fair',
  },
  {
    id: 'large',
    value: 'text-lg',
    label: 'Hefty',
  },
  {
    id: 'xlarge',
    value: 'text-xl',
    label: 'Mighty',
  },
  {
    id: '2xlarge',
    value: 'text-2xl',
    label: 'Colossal',
  },
  {
    id: '5xlarge',
    value: 'text-5xl',
    label: 'Unc\'s Font',
  },
]

export interface Settings {
  [AUTO_SAVE_KEY]?: boolean;
  [FONT_SIZE_KEY]?: string;
}

export type SettingsKey = typeof AUTO_SAVE_KEY | typeof FONT_SIZE_KEY;

export const DEFAULT_SETTINGS: Settings = {
  [AUTO_SAVE_KEY]: false,
  [FONT_SIZE_KEY]: FONT_SIZE_OPTIONS[2].id,
};