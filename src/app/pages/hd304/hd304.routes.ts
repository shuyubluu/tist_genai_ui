import { Routes } from '@angular/router';

export const HD304_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd304-list.component').then(
        (m) => m.Hd304ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd304-form.component').then(
        (m) => m.Hd304FormComponent
      ),
    data: { tabName: '個案基本資料表' },
  },
];
