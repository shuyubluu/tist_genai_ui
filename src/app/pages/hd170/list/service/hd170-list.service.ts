import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd170ListService {
  constructor() {}
  // 新增模式
  isCreate: boolean = false;
  // 編輯模式
  isEdit: boolean = false;
  // 檢視模式
  isView: boolean = false;
}
