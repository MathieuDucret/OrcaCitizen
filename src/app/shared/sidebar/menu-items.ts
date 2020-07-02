import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'mdi mdi-home',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/search',
  //   title: 'Search',
  //   icon: 'mdi mdi-magnify',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  {
    path: '/populations',
    title: 'Populations',
    icon: 'mdi mdi-account',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/organizations',
    title: 'Organizations',
    icon: 'mdi mdi-wallet-travel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'More',
    icon: 'mdi mdi-plus',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/more/about',
        title: 'About',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/more/news',
        title: 'News',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/more/sources',
        title: 'Sources',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/more/contributions',
        title: 'Contributions',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  }
];
