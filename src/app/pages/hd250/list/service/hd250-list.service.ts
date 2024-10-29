import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd250ListService {
  // 檢視模式
  isView: boolean = false;
  // 編輯模式
  isEdit: boolean = false;

  constructor() {
    const savedMode = this.getMode();
    if (savedMode) {
      this.isView = savedMode.isView;
      this.isEdit = savedMode.isEdit;
    }
  }

  // 儲存模式狀態
  setMode(viewMode: boolean, editMode: boolean): void {
    this.isView = viewMode;
    this.isEdit = editMode;

    const mode = {
      isView: viewMode,
      isEdit: editMode,
    };

    // 儲存至 localStorage
    localStorage.setItem('Hd250Mode', JSON.stringify(mode));
  }

  // 從 localStorage 中獲取模式狀態
  getMode(): { isView: boolean; isEdit: boolean } | null {
    const storedMode = localStorage.getItem('Hd250Mode');
    if (storedMode) {
      return JSON.parse(storedMode);
    } else {
      return null;
    }
  }
}
