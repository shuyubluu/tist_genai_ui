import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd280ListService {
  constructor() {}
  // 是否為新增頁面
  isCreate: boolean = false;
}
