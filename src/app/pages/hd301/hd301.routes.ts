import { Routes } from '@angular/router';

export const HD301_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd301-form.component').then(
        (m) => m.Hd301FormComponent
      ),
  },
];
