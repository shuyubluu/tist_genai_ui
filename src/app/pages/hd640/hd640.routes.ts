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
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd640-form.component').then(
        (m) => m.Hd640FormComponent
      ),
    data: { tabName: '社工帳號管理' },
  },
];
