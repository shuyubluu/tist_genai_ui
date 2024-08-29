import { Routes } from '@angular/router';

export const HD240_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd240-list.component').then(
        (m) => m.Hd240ListComponent
      ),
  },
];
