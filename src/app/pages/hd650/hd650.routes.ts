import { Routes } from '@angular/router';

export const HD650_ROUTES: Routes = [
  {
    path: 'system',
    loadComponent: () =>
      import('./list/components/hd650-list.component').then(
        (m) => m.Hd650ListComponent
      ),
    data: { tabName: '[系統維護參數] :::預照管理系統' },
  },
  {
    path: 'webapp',
    loadComponent: () =>
      import('./list/components/hd650-list.component').then(
        (m) => m.Hd650ListComponent
      ),
    data: { tabName: '[系統維護參數] :::志工Web App' },
  },
];
