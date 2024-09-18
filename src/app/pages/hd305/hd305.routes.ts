import { Routes } from '@angular/router';

export const HD305_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd305-form.component').then(
        (m) => m.Hd305FormComponent
      ),
  },
];
