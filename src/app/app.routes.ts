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
      {
        path: 'hd260',
        loadChildren: () =>
          import('./pages/hd260/hd260.routes').then((m) => m.HD260_ROUTES),
        data: { tabName: '志工退隊名冊' },
      },
      {
        path: 'hd270',
        loadChildren: () =>
          import('./pages/hd270/hd270.routes').then((m) => m.HD270_ROUTES),
        data: { tabName: '保險專區' },
      },
      {
        path: 'hd280',
        loadChildren: () =>
          import('./pages/hd280/hd280.routes').then((m) => m.HD280_ROUTES),
        data: { tabName: '服務時數管理' },
      },
      {
        path: 'hd300',
        loadChildren: () =>
          import('./pages/hd300/hd300.routes').then((m) => m.HD300_ROUTES),
        data: { tabName: '表單匯入_志工教育訓練' },
      },
      {
        path: 'hd301',
        loadChildren: () =>
          import('./pages/hd301/hd301.routes').then((m) => m.HD301_ROUTES),
        data: { tabName: '表單匯入_志工獎勵' },
      },
      {
        path: 'hd302',
        loadChildren: () =>
          import('./pages/hd302/hd302.routes').then((m) => m.HD302_ROUTES),
        data: { tabName: '表單匯入_志工時數' },
      },
      {
        path: 'hd303',
        loadChildren: () =>
          import('./pages/hd303/hd303.routes').then((m) => m.HD303_ROUTES),
        data: { tabName: '表單匯入_志工考核表' },
      },
      {
        path: 'hd304',
        loadChildren: () =>
          import('./pages/hd304/hd304.routes').then((m) => m.HD304_ROUTES),
        data: { tabName: '表單匯入_個案基本資料表' },
      },
      {
        path: 'hd305',
        loadChildren: () =>
          import('./pages/hd305/hd305.routes').then((m) => m.HD305_ROUTES),
        data: { tabName: '表單匯入_個案生活品質量表' },
      },
      {
        path: 'hd306',
        loadChildren: () =>
          import('./pages/hd306/hd306.routes').then((m) => m.HD306_ROUTES),
        data: { tabName: '表單匯出_志工清冊' },
      },
      {
        path: 'hd307',
        loadChildren: () =>
          import('./pages/hd307/hd307.routes').then((m) => m.HD307_ROUTES),
        data: { tabName: '表單匯出_個案清冊' },
      },
      {
        path: 'hd400',
        loadChildren: () =>
          import('./pages/hd400/hd400.routes').then((m) => m.HD400_ROUTES),
        data: { tabName: '簽核專區' },
      },
      {
        path: 'hd500',
        loadChildren: () =>
          import('./pages/hd500/hd500.routes').then((m) => m.HD500_ROUTES),
        data: { tabName: '統計專區' },
      },
      {
        path: 'hd600',
        loadChildren: () =>
          import('./pages/hd600/hd600.routes').then((m) => m.HD600_ROUTES),
        data: { tabName: '保險公司代碼維護清單' },
      },
      {
        path: 'hd610',
        loadChildren: () =>
          import('./pages/hd610/hd610.routes').then((m) => m.HD610_ROUTES),
        data: { tabName: '組織單位資料維護清單' },
      },
      {
        path: 'hd620',
        loadChildren: () =>
          import('./pages/hd620/hd620.routes').then((m) => m.HD620_ROUTES),
        data: { tabName: '角色權限資料維護清單' },
      },
      {
        path: 'hd640',
        loadChildren: () =>
          import('./pages/hd640/hd640.routes').then((m) => m.HD640_ROUTES),
        data: { tabName: '社工帳號管理清單' },
      },
      {
        path: 'hd650',
        loadChildren: () =>
          import('./pages/hd650/hd650.routes').then((m) => m.HD650_ROUTES),
        data: { tabName: '系統維護參數' },
      },
      {
        path: 'hd660',
        loadChildren: () =>
          import('./pages/hd660/hd660.routes').then((m) => m.HD660_ROUTES),
        data: { tabName: '佈告欄維護' },
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./common/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('./pages/changePassword/change-password.routes').then(
        (m) => m.ChangePassword_ROUTES
      ),
  },
];
