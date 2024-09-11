import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd270ListService {
  constructor() {}
  // 新增模式
  isCreate: boolean = false;
  // 退保模式
  isSurrender: boolean = false;
}
