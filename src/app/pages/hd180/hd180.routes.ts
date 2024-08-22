import { Routes } from '@angular/router';

export const HD180_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd180-list.component').then(
        (m) => m.Hd180ListComponent
      ),
  },
];
