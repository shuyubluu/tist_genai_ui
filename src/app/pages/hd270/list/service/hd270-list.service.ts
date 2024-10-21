import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd270ListService {
  // 檢視模式
  isView: boolean = false;
  // 新增模式
  isCreate: boolean = false;
  // 退保模式
  isSurrender: boolean = false;

  constructor() {
    const savedMode = this.getMode();
    if (savedMode) {
      this.isView = savedMode.isView;
      this.isCreate = savedMode.isCreate;
      this.isSurrender = savedMode.isSurrender;
    }
  }

  // 儲存模式狀態
  setMode(viewMode: boolean, createMode: boolean, editMode: boolean): void {
    this.isView = viewMode;
    this.isCreate = createMode;
    this.isSurrender = editMode;

    const mode = {
      isView: viewMode,
      isCreate: createMode,
      isSurrender: editMode,
    };

    // 儲存至 localStorage
    localStorage.setItem('Hd270Mode', JSON.stringify(mode));
  }

  // 從 localStorage 中獲取模式狀態
  getMode(): {
    isView: boolean;
    isCreate: boolean;
    isSurrender: boolean;
  } | null {
    const storedMode = localStorage.getItem('Hd270Mode');
    if (storedMode) {
      return JSON.parse(storedMode);
    } else {
      return null;
    }
  }
}
