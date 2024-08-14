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
        path: 'calendar',
        loadChildren: () =>
          import('./pages/calendar/calendar.routes').then(
            (m) => m.CALENDAR_ROUTES
          ),
        data: { tabName: '個人行事曆' },
      },
      // 可以加入其他子路由...
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./common/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
];
