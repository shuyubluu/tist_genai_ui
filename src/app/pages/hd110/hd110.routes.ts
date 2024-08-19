import { Routes } from '@angular/router';

export const HD110_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd110-form.component').then(
        (m) => m.Hd110FormComponent
      ),
  },
];
