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
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd260-form.component').then(
        (m) => m.Hd260FormComponent
      ),
    data: { tabName: '退隊表' },
  },
];
