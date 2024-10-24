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
    path: 'create',
    loadComponent: () =>
      import('./form/components/hd140-form.component').then(
        (m) => m.Hd140FormComponent
      ),
    data: { tabName: '[例行訪視表] :::新增' },
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./form/components/hd140-form.component').then(
        (m) => m.Hd140FormComponent
      ),
    data: { tabName: '[例行訪視表] :::編輯' },
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./form/components/hd140-form.component').then(
        (m) => m.Hd140FormComponent
      ),
    data: { tabName: '[例行訪視表] :::檢視' },
  },
  {
    path: 'view_volunteer',
    loadComponent: () =>
      import('./form2/components/hd140-form2.component').then(
        (m) => m.Hd140Form2Component
      ),
    data: { tabName: '[簡易紀錄表] :::檢視' },
  },
];
