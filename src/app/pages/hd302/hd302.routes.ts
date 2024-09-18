import { Routes } from '@angular/router';

export const HD302_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd302-form.component').then(
        (m) => m.Hd302FormComponent
      ),
  },
];
