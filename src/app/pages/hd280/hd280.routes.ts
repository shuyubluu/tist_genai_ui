import { Routes } from '@angular/router';

export const HD280_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd280-list.component').then(
        (m) => m.Hd280ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd280-form.component').then(
        (m) => m.Hd280FormComponent
      ),
    data: { tabName: '[服務時數管理表] :::新增' },
  },
];
