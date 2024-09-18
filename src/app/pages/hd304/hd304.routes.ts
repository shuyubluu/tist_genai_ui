import { Routes } from '@angular/router';

export const HD304_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd304-form.component').then(
        (m) => m.Hd304FormComponent
      ),
  },
];
