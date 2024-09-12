import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd305ListService {
  constructor() {}
  // 檢視模式
  isView: boolean = false;
  // 新增模式
  isCreate: boolean = false;
  // 編輯模式
  isEdit: boolean = false;
}
