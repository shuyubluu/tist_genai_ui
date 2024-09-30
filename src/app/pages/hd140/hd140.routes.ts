import { Routes } from '@angular/router';

export const HD140_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd140-list.component').then(
        (m) => m.Hd140ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd140-form.component').then(
        (m) => m.Hd140FormComponent
      ),
    data: { tabName: '例行訪視表' },
  },
  {
    path: 'form2',
    loadComponent: () =>
      import('./form2/components/hd140-form2.component').then(
        (m) => m.Hd140Form2Component
      ),
    data: { tabName: '簡易紀錄表' },
  },
];
