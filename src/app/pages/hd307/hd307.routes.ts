import { Routes } from '@angular/router';

export const HD307_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd307-list.component').then(
        (m) => m.Hd307ListComponent
      ),
  },
];
