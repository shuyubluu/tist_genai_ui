import { Routes } from '@angular/router';

export const HD306_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd306-list.component').then(
        (m) => m.Hd306ListComponent
      ),
  },
];
