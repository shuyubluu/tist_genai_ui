import { Routes } from '@angular/router';

export const HD620_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd620-list.component').then(
        (m) => m.Hd620ListComponent
      ),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd620-form.component').then(
        (m) => m.Hd620FormComponent
      ),
    data: { tabName: '[角色資料權限維護] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd620-form.component').then(
        (m) => m.Hd620FormComponent
      ),
    data: { tabName: '[角色資料權限維護] :::檢視' },
  },
];
