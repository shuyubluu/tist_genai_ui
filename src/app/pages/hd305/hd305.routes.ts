import { Routes } from '@angular/router';

export const HD305_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd305-list.component').then(
        (m) => m.Hd305ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd305-form.component').then(
        (m) => m.Hd305FormComponent
      ),
    data: { tabName: '個案生活品質量表' },
  },
];
