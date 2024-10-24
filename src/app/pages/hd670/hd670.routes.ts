import { Routes } from '@angular/router';

export const HD670_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd670-list.component').then(
        (m) => m.Hd670ListComponent
      ),
  },
];
