import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd220ListService {
  constructor() {}
  // 新增模式
  isCreate: boolean = false;
  // 檢視模式
  isView: boolean = false;
}
