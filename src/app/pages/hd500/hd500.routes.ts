import { Routes } from '@angular/router';

export const HD500_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd500-list.component').then(
        (m) => m.Hd500ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '統計內容' },
  },
];
