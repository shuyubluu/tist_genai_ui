import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hd100ListService {
  // 是否已選取個案
  isChoiceCase: boolean = false;
  // 檢視模式
  isView: boolean = false;
  // 新增模式
  isCreate: boolean = false;
  // 檢視模式
  isEdit: boolean = false;
}
