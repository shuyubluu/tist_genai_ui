import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd660ListService {
  constructor() {}
  // 新增模式
  isCreate: boolean = false;
  // 編輯模式
  isEdit: boolean = false;
}
