import { Routes } from '@angular/router';

export const HD250_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd250-list.component').then(
        (m) => m.Hd250ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd250-form.component').then(
        (m) => m.Hd250FormComponent
      ),
    data: { tabName: '[服務品質評估表] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd250-form.component').then(
        (m) => m.Hd250FormComponent
      ),
    data: { tabName: '[服務品質評估表] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd250-form.component').then(
        (m) => m.Hd250FormComponent
      ),
    data: { tabName: '[服務品質評估表] :::檢視' },
  },
];
