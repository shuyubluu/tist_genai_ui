import { Routes } from '@angular/router';

export const HD170_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd170-list.component').then(
        (m) => m.Hd170ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd170-form.component').then(
        (m) => m.Hd170FormComponent
      ),
    data: { tabName: '[轉介單] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd170-form.component').then(
        (m) => m.Hd170FormComponent
      ),
    data: { tabName: '[轉介單] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd170-form.component').then(
        (m) => m.Hd170FormComponent
      ),
    data: { tabName: '[轉介單] :::檢視' },
  },
];
