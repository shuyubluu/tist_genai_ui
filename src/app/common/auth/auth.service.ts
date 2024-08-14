import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private logoutTimerSubscription: Subscription | null = null;

  constructor(private router: Router) {}

  startLogoutCountdown(duration: number): void {
    this.clearLogoutCountdown(); // 清除之前的計時器
    this.logoutTimerSubscription = timer(duration).subscribe(() => {
      this.logout();
    });
  }

  clearLogoutCountdown(): void {
    if (this.logoutTimerSubscription) {
      this.logoutTimerSubscription.unsubscribe();
      this.logoutTimerSubscription = null;
    }
  }

  logout(): void {
    // 清除 token 或任何登出邏輯
    // localStorage.removeItem('authToken');
    this.router.navigate(['/login']); // 導航到登錄頁面
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // 當路由變化結束時檢查路徑
        if (event.url === '/login') {
          // 調用清除 localStorage的函式
          this.clearLocalStorageItems();
        }
      }
    });
  }

  // 清除 localStorage的函式
  clearLocalStorageItems() {
    const itemsToRemove = ['savedTabs', 'isCollapsed'];
    itemsToRemove.forEach((item) => localStorage.removeItem(item));
  }
}
