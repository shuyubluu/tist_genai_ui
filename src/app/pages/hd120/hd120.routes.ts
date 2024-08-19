import { Routes } from '@angular/router';

export const HD120_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd120-form.component').then(
        (m) => m.Hd120FormComponent
      ),
  },
];
