import { Routes } from '@angular/router';

export const HD640_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd640-list.component').then(
        (m) => m.Hd640ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd640-form.component').then(
        (m) => m.Hd640FormComponent
      ),
    data: { tabName: '[社工帳號管理] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd640-form.component').then(
        (m) => m.Hd640FormComponent
      ),
    data: { tabName: '[社工帳號管理] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd640-form.component').then(
        (m) => m.Hd640FormComponent
      ),
    data: { tabName: '[社工帳號管理] :::檢視' },
  },
];
