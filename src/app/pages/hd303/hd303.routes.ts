import { Routes } from '@angular/router';

export const HD303_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd303-list.component').then(
        (m) => m.Hd303ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd303-form.component').then(
        (m) => m.Hd303FormComponent
      ),
    data: { tabName: '志工考核表' },
  },
];
