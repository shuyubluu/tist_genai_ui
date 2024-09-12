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
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd620-form.component').then(
        (m) => m.Hd620FormComponent
      ),
    data: { tabName: '角色資料權限維護' },
  },
];
