import { Routes } from '@angular/router';

export const HD303_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd303-form.component').then(
        (m) => m.Hd303FormComponent
      ),
  },
];
