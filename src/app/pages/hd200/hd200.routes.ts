import { Routes } from '@angular/router';

export const HD200_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd200-list.component').then(
        (m) => m.Hd200ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd200-form.component').then(
        (m) => m.Hd200FormComponent
      ),
    data: { tabName: '志工基本資料' },
  },
  {
    path: 'list2',
    loadComponent: () =>
      import('./list2/components/hd200-list2.component').then(
        (m) => m.Hd200List2Component
      ),
    data: { tabName: '個督紀錄' },
  },
];