import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-navigation',
    children: [
      {
        id: 'menu1',
        title: 'Menu Level',
        type: 'collapse',
        icon: 'feather icon-user',
        children: [
          {
            id: 'menu2',
            title: 'Menu Level',
            type: 'item',
            icon: 'feather icon-book',
            classes: 'nav-item',
            url: 'javascript:;',
            external: true
          },
          {
            id: 'menu3',
            title: 'Menu Level',
            type: 'item',
            icon: 'feather icon-help-circle',
            classes: 'nav-item',
            url: 'javascript:;',
            external: true
          }
        ]
      }
    ]
  },
  {
    id: 'sample-page',
    title: 'Sample Page',
    type: 'item',
    url: '/sample-page',
    classes: 'nav-item',
    icon: 'feather icon-sidebar'
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
