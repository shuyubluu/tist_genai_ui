import { Routes } from '@angular/router';

export const HD300_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd300-list.component').then(
        (m) => m.Hd300ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd300-form.component').then(
        (m) => m.Hd300FormComponent
      ),
    data: { tabName: '志工教育訓練' },
  },
];
