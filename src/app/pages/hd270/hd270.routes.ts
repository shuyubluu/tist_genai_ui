import { Routes } from '@angular/router';

export const HD270_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd270-list.component').then(
        (m) => m.Hd270ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd270-form.component').then(
        (m) => m.Hd270FormComponent
      ),
    data: { tabName: '保險專區表' },
  },
];
