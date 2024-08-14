import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

// 重寫 console.warn 使其不輸出任何內容
console.warn = function () {};

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top', // 頂部滾動位置恢復
      })
    ),
  ],
}).catch((err) => console.error(err));
