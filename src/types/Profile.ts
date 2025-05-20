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