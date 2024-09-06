import { Routes } from '@angular/router';

export const HD220_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd220-list.component').then(
        (m) => m.Hd220ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd220-form.component').then(
        (m) => m.Hd220FormComponent
      ),
    data: { tabName: '獎勵表揚表' },
  },
];