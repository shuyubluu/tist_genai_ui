import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd500ListService {
  // 當前要查看的統計內容代碼
  currentStatisticsCode: string = '';
  // 當前要查看的統計內容名稱
  currentStatisticsName: string = '';

  constructor() {
    // 初始化時從 localStorage 中讀取值
    this.currentStatisticsCode = this.getStatisticsCode();
    this.currentStatisticsName = this.getStatisticsName();
  }

  // 儲存統計內容代碼
  setStatisticsCode(code: string): void {
    this.currentStatisticsCode = code;
    localStorage.setItem('currentStatisticsCode', code);
  }

  // 儲存統計內容名稱
  setStatisticsName(name: string): void {
    this.currentStatisticsName = name;
    localStorage.setItem('currentStatisticsName', name);
  }

  // 從 localStorage 中獲取統計內容代碼
  getStatisticsCode(): string {
    return localStorage.getItem('currentStatisticsCode') || '';
  }

  // 從 localStorage 中獲取統計內容名稱
  getStatisticsName(): string {
    return localStorage.getItem('currentStatisticsName') || '';
  }
}
