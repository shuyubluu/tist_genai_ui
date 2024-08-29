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
        data: { tabName: '例行訪視表清單' },
      },
      {
        path: 'hd150',
        loadChildren: () =>
          import('./pages/hd150/hd150.routes').then((m) => m.HD150_ROUTES),
        data: { tabName: '個案複評表清單' },
      },
      {
        path: 'hd160',
        loadChildren: () =>
          import('./pages/hd160/hd160.routes').then((m) => m.HD160_ROUTES),
        data: { tabName: '生活品質問卷清單' },
      },
      {
        path: 'hd170',
        loadChildren: () =>
          import('./pages/hd170/hd170.routes').then((m) => m.HD170_ROUTES),
        data: { tabName: '轉介單清單' },
      },
      {
        path: 'hd180',
        loadChildren: () =>
          import('./pages/hd180/hd180.routes').then((m) => m.HD180_ROUTES),
        data: { tabName: '個案結案名冊' },
      },
      {
        path: 'hd200',
        loadChildren: () =>
          import('./pages/hd200/hd200.routes').then((m) => m.HD200_ROUTES),
        data: { tabName: '志工資料清單' },
      },
      {
        path: 'hd210',
        loadChildren: () =>
          import('./pages/hd210/hd210.routes').then((m) => m.HD210_ROUTES),
        data: { tabName: '教育訓練' },
      },
      {
        path: 'hd220',
        loadChildren: () =>
          import('./pages/hd220/hd220.routes').then((m) => m.HD220_ROUTES),
        data: { tabName: '獎勵表揚' },
      },
      {
        path: 'hd230',
        loadChildren: () =>
          import('./pages/hd230/hd230.routes').then((m) => m.HD230_ROUTES),
        data: { tabName: '服務時數' },
      },
      {
        path: 'hd240',
        loadChildren: () =>
          import('./pages/hd240/hd240.routes').then((m) => m.HD240_ROUTES),
        data: { tabName: '保險' },
      },
      {
        path: 'hd250',
        loadChildren: () =>
          import('./pages/hd250/hd250.routes').then((m) => m.HD250_ROUTES),
        data: { tabName: '評核表' },
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./common/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
];
