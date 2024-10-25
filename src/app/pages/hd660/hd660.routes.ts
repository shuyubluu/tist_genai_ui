import { Routes } from '@angular/router';

export const HD660_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd660-list.component').then(
        (m) => m.Hd660ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd660-form.component').then(
        (m) => m.Hd660FormComponent
      ),
    data: { tabName: '[佈告欄維護表] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd660-form.component').then(
        (m) => m.Hd660FormComponent
      ),
    data: { tabName: '[佈告欄維護表] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd660-form.component').then(
        (m) => m.Hd660FormComponent
      ),
    data: { tabName: '[佈告欄維護表] :::檢視' },
  },
];
