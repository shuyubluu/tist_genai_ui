import { Routes } from '@angular/router';

export const HD230_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd230-list.component').then(
        (m) => m.Hd230ListComponent
      ),
  },
];
