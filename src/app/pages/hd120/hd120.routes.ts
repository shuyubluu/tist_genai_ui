import { Routes } from '@angular/router';

export const HD120_ROUTES: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd120-form.component').then(
        (m) => m.Hd120FormComponent
      ),
    data: { tabName: '[個案開案資料表]:::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd120-form.component').then(
        (m) => m.Hd120FormComponent
      ),
    data: { tabName: '[個案開案資料表]:::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd120-form.component').then(
        (m) => m.Hd120FormComponent
      ),
    data: { tabName: '[個案開案資料表]:::檢視' },
  },
];
