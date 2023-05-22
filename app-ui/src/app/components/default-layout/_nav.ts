import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Management',
  },
  {
    name: 'Students',
    url: '/students',
  },
  {
    name: 'Professors',
    url: '/professors',
  },
  {
    name: 'Seances',
    url: '/seances',
  },
  {
    title: true,
    name: 'Settings',
  },
  {
    name: 'Change Password',
    url: '/settings/changePassword',
  },
  {
    name: 'Update Profile',
    url: '/settings/updateProfile',
  },
  {
    name: 'Logout',
    url: '/logout',
  },
];
