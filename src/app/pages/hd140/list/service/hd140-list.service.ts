import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd140ListService {
  constructor() {}
  // 新增模式
  isCreate: boolean = false;
  // 編輯模式
  isEdit: boolean = false;
  // 檢視模式
  isView: boolean = false;
  // 當前瀏覽模式
  currentViewMode: string = '社工';
}
