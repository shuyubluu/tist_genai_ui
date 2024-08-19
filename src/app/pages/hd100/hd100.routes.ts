import { Routes } from '@angular/router';

export const HD100_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd100-list.component').then(
        (m) => m.Hd100ListComponent
      ),
  },
];
