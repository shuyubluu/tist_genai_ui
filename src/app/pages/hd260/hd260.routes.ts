import { Routes } from '@angular/router';

export const HD260_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd260-list.component').then(
        (m) => m.Hd260ListComponent
      ),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd260-form.component').then(
        (m) => m.Hd260FormComponent
      ),
    data: { tabName: '[退隊表] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd260-form.component').then(
        (m) => m.Hd260FormComponent
      ),
    data: { tabName: '[退隊表] :::檢視' },
  },
];
