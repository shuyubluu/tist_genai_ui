import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageStateService {
  private pageStates: { [key: string]: BehaviorSubject<any> } = {};

  constructor(private router: Router) {}

  /**
   * 獲取當前頁面的存儲鍵
   * @returns 存儲鍵
   */
  private getStorageKey(): string {
    return `pageState_${this.router.url}`;
  }

  /**
   * 設置頁面狀態
   * @param key 狀態鍵名
   * @param value 狀態值
   */
  setPageState(key: string, value: any): void {
    const storageKey = this.getStorageKey();
    if (!this.pageStates[storageKey]) {
      this.pageStates[storageKey] = new BehaviorSubject({});
    }
    const currentState = this.pageStates[storageKey].value;
    currentState[key] = value;
    this.pageStates[storageKey].next(currentState);
  }

  /**
   * 獲取頁面狀態
   * @param key 狀態鍵名
   * @returns 頁面狀態值
   */
  getPageState(key: string): any {
    const storageKey = this.getStorageKey();
    return this.pageStates[storageKey]
      ? this.pageStates[storageKey].value[key]
      : null;
  }

  /**
   * 清除特定頁面狀態
   * @param key 狀態鍵名
   */
  clearPageState(key: string): void {
    const storageKey = this.getStorageKey();
    if (this.pageStates[storageKey]) {
      const currentState = this.pageStates[storageKey].value;
      delete currentState[key];
      this.pageStates[storageKey].next(currentState);
    }
  }

  /**
   * 清除所有頁面狀態
   */
  clearAllPageState(): void {
    const storageKey = this.getStorageKey();
    delete this.pageStates[storageKey];
  }

  /**
   * 清除特定路由的存儲
   * @param route 路由
   */
  clearPageStateByRoute(route: string): void {
    delete this.pageStates[`pageState_${route}`];
  }
}
