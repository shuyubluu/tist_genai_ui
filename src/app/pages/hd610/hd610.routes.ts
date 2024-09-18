import { Routes } from '@angular/router';

export const HD610_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd610-list.component').then(
        (m) => m.Hd610ListComponent
      ),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/components/hd610-form.component').then(
        (m) => m.Hd610FormComponent
      ),
    data: { tabName: '組織單位資料維護' },
  },
];