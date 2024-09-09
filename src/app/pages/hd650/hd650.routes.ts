import { Routes } from '@angular/router';

export const HD650_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd650-list.component').then(
        (m) => m.Hd650ListComponent
      ),
  },
];
