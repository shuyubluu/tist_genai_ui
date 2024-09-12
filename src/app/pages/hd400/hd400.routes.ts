import { Routes } from '@angular/router';

export const HD400_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd400-list.component').then(
        (m) => m.Hd400ListComponent
      ),
  },
];
