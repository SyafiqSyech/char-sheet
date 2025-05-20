export const PROFILE_ICONS = [
  'cubes',
  'tooth',
  'torch',
  'book-cover',
  'wolf-trap',
  'two-coins',
  'crossbow',
  'round-shield',
  'donkey',
  'oak-leaf'
];

export interface Profile {
  name?: string;
  title?: string;
  icon?: string;
}

export const DEFAULT_PROFILE: Profile = {
  name: '',
  title: '',
  icon: ''
};