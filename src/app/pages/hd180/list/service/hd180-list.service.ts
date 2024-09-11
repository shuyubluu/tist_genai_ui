import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd180ListService {
  constructor() {}
  // 編輯模式
  isEdit: boolean = false;
  // 檢視模式
  isView: boolean = false;
  // 是否可以送審
  isCanReview: boolean = false;
}
