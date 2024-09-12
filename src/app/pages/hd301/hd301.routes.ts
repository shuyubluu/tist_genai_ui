import { Routes } from '@angular/router';

export const HD301_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd301-list.component').then(
        (m) => m.Hd301ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd301-form.component').then(
        (m) => m.Hd301FormComponent
      ),
    data: { tabName: '志工獎勵' },
  },
];
