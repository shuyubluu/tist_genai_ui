import { Routes } from '@angular/router';

export const HD110_ROUTES: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd110-form.component').then(
        (m) => m.Hd110FormComponent
      ),
    data: { tabName: '[個案開案評估表]:::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd110-form.component').then(
        (m) => m.Hd110FormComponent
      ),
    data: { tabName: '[個案開案評估表]:::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd110-form.component').then(
        (m) => m.Hd110FormComponent
      ),
    data: { tabName: '[個案開案評估表]:::檢視' },
  },
];
