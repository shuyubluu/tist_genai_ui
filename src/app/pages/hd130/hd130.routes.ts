import { Routes } from '@angular/router';

export const HD130_ROUTES: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd130-form.component').then(
        (m) => m.Hd130FormComponent
      ),
    data: { tabName: '個案初評表 :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd130-form.component').then(
        (m) => m.Hd130FormComponent
      ),
    data: { tabName: '個案初評表 :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd130-form.component').then(
        (m) => m.Hd130FormComponent
      ),
    data: { tabName: '個案初評表 :::檢視' },
  },
];
