import { Routes } from '@angular/router';

export const HD130_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd130-form.component').then(
        (m) => m.Hd130FormComponent
      ),
  },
];
