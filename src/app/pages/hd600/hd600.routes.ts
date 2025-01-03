import { Routes } from '@angular/router';

export const HD600_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd600-list.component').then(
        (m) => m.Hd600ListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd600-form.component').then(
        (m) => m.Hd600FormComponent
      ),
    data: { tabName: '[保險公司代碼維護] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd600-form.component').then(
        (m) => m.Hd600FormComponent
      ),
    data: { tabName: '[保險公司代碼維護] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd600-form.component').then(
        (m) => m.Hd600FormComponent
      ),
    data: { tabName: '[保險公司代碼維護] :::檢視' },
  },
];
