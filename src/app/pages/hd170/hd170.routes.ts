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
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd170-form.component').then(
        (m) => m.Hd170FormComponent
      ),
    data: { tabName: '轉介單' },
  },
];
