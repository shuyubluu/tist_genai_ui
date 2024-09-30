import { Routes } from '@angular/router';

export const ChangePassword_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/change-password.component').then(
        (m) => m.ChangePasswordComponent
      ),
  },
];
