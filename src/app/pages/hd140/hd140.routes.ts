import { Routes } from '@angular/router';

export const HD140_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form/components/hd140-form.component').then(
        (m) => m.Hd140FormComponent
      ),
  },
];
