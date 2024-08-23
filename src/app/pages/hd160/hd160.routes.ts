import { Routes } from '@angular/router';

export const HD160_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd160-list.component').then(
        (m) => m.Hd160ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd160-form.component').then(
        (m) => m.Hd160FormComponent
      ),
    data: { tabName: '生活品質問卷' },
  },
];