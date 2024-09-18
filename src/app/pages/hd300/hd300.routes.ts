import { Routes } from '@angular/router';

export const HD300_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd300-form.component').then(
        (m) => m.Hd300FormComponent
      ),
  },
];
