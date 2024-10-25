import { Routes } from '@angular/router';

export const HD500_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/components/hd500-list.component').then(
        (m) => m.Hd500ListComponent
      ),
  },
  {
    path: 'A1',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_總人數' },
  },
  {
    path: 'A2',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_性別' },
  },
  {
    path: 'A3',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_年齡' },
  },
  {
    path: 'A4',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_身份別' },
  },
  {
    path: 'A5',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_社會福利補助' },
  },
  {
    path: 'A6',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_特殊議題' },
  },
  {
    path: 'A7',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_風險' },
  },
  {
    path: 'A8',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_風險 x 特殊議題' },
  },
  {
    path: 'A9',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_風險 x 身份別' },
  },
  {
    path: 'A10',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '個案基本情形_社會福利補助 x 特殊議題' },
  },
  {
    path: 'B1',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '開結案數據_開案數 x 結案數' },
  },
  {
    path: 'B2',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '開結案數據_結案數' },
  },
  {
    path: 'B3',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '開結案數據_開案人數 x 來源' },
  },
  {
    path: 'B4',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '開結案數據_結案人數 x 原因' },
  },
  {
    path: 'C1',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '服務與需求統計_評估需求最熱門前10項' },
  },
  {
    path: 'C2',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '服務與需求統計_實際服務最熱門前10項' },
  },
  {
    path: 'C3',
    loadComponent: () =>
      import('./form/components/hd500-form.component').then(
        (m) => m.Hd500FormComponent
      ),
    data: { tabName: '服務與需求統計_志工提供服務人次' },
  },
];
