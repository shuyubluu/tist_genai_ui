import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd100FormService {
  private readonly LOCAL_STORAGE_KEY = 'currentRoute';

  constructor() {
    // 初始化時從 localStorage 中讀取 currentRoute
    const storedRoute = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    this.currentRoute = storedRoute ? storedRoute : '';
  }

  currentRoute: string = '';

  // 更新 currentRoute 並存入 localStorage
  setCurrentRoute(route: string): void {
    this.currentRoute = route;
    localStorage.setItem(this.LOCAL_STORAGE_KEY, route);
  }

  // 從 localStorage 獲取 currentRoute
  getCurrentRoute(): string {
    return this.currentRoute;
  }
}
