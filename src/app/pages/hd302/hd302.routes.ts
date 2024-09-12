import { Routes } from '@angular/router';

export const HD302_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd302-list.component').then(
        (m) => m.Hd302ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd302-form.component').then(
        (m) => m.Hd302FormComponent
      ),
    data: { tabName: '志工時數' },
  },
];
