import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd180ListService {
  // 是否可以送審
  isCanReview: boolean = false;
  // 檢視模式
  isView: boolean = false;

  constructor() {
    const savedMode = this.getMode();
    if (savedMode) {
      this.isView = savedMode.isView;
    }
  }

  // 儲存模式狀態
  setMode(viewMode: boolean): void {
    this.isView = viewMode;

    const mode = {
      isView: viewMode,
    };

    // 儲存至 localStorage
    localStorage.setItem('Hd180Mode', JSON.stringify(mode));
  }

  // 從 localStorage 中獲取模式狀態
  getMode(): { isView: boolean } | null {
    const storedMode = localStorage.getItem('Hd180Mode');
    if (storedMode) {
      return JSON.parse(storedMode);
    } else {
      return null;
    }
  }
}
