import { Routes } from '@angular/router';

export const HD150_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd150-list.component').then(
        (m) => m.Hd150ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd150-form.component').then(
        (m) => m.Hd150FormComponent
      ),
    data: { tabName: '個案複評表' },
  },
];