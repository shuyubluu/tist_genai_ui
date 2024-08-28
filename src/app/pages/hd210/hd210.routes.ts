import { Routes } from '@angular/router';

export const HD210_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd210-list.component').then(
        (m) => m.Hd210ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd210-form.component').then(
        (m) => m.Hd210FormComponent
      ),
    data: { tabName: '教育訓練表' },
  },
];
