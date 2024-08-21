import { Routes } from '@angular/router';
import { LayoutComponent } from './common/layouts/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('./pages/welcome/welcome.routes').then(
            (m) => m.WELCOME_ROUTES
          ),
        data: { tabName: '首頁' },
      },
      {
        path: 'hd100',
        loadChildren: () =>
          import('./pages/hd100/hd100.routes').then((m) => m.HD100_ROUTES),
        data: { tabName: '個案資料清單' },
      },
      {
        path: 'hd110',
        loadChildren: () =>
          import('./pages/hd110/hd110.routes').then((m) => m.HD110_ROUTES),
        data: { tabName: '個案開案評估表' },
      },
      {
        path: 'hd120',
        loadChildren: () =>
          import('./pages/hd120/hd120.routes').then((m) => m.HD120_ROUTES),
        data: { tabName: '個案開案資料表' },
      },
      {
        path: 'hd130',
        loadChildren: () =>
          import('./pages/hd130/hd130.routes').then((m) => m.HD130_ROUTES),
        data: { tabName: '個案初評表' },
      },
      {
        path: 'hd140',
        loadChildren: () =>
          import('./pages/hd140/hd140.routes').then((m) => m.HD140_ROUTES),
        data: { tabName: '例行訪視記錄表' },
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./common/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
];
