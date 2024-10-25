import { Routes } from '@angular/router';

export const HD230_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd230-list.component').then(
        (m) => m.Hd230ListComponent
      ),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('../hd280/form/components/hd280-form.component').then(
        (m) => m.Hd280FormComponent
      ),
    data: { tabName: '[服務時數管理表] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('../hd280/form/components/hd280-form.component').then(
        (m) => m.Hd280FormComponent
      ),
    data: { tabName: '[服務時數管理表] :::檢視' },
  },
];
