import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd230ListService {
  constructor() {}
  // 編輯模式
  isEdit: boolean = false;
  // 新增模式
  isCreate: boolean = false;
  // 檢視模式
  isView: boolean = false;
}
