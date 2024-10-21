import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd210ListService {
  // 檢視模式
  isView: boolean = false;
  // 新增模式
  isCreate: boolean = false;

  constructor() {
    const savedMode = this.getMode();
    if (savedMode) {
      this.isView = savedMode.isView;
      this.isCreate = savedMode.isCreate;
    }
  }

  // 儲存模式狀態
  setMode(viewMode: boolean, createMode: boolean): void {
    this.isView = viewMode;
    this.isCreate = createMode;

    const mode = {
      isView: viewMode,
      isCreate: createMode,
    };

    // 儲存至 localStorage
    localStorage.setItem('Hd210Mode', JSON.stringify(mode));
  }

  // 從 localStorage 中獲取模式狀態
  getMode(): { isView: boolean; isCreate: boolean } | null {
    const storedMode = localStorage.getItem('Hd210Mode');
    if (storedMode) {
      return JSON.parse(storedMode);
    } else {
      return null;
    }
  }
}
