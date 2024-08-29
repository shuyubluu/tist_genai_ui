import { Routes } from '@angular/router';

export const HD250_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd250-list.component').then(
        (m) => m.Hd250ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd250-form.component').then(
        (m) => m.Hd250FormComponent
      ),
    data: { tabName: '服務品質評估表' },
  },
];
