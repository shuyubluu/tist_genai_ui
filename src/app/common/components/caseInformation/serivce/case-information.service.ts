import { Injectable } from '@angular/core';
import { CaseData } from './case-information.interface';

@Injectable({
  providedIn: 'root',
})
export class CaseInformationService {
  private localStorageKey = 'isChoiceCase';
  private _isChoiceCase: boolean = false;

  // 個案資料
  caseData: CaseData[] = [
    {
      name: '王大明',
      idNumber: 'D123456789',
      caseOpeningDate: '113/02/01',
    },
  ];

  constructor() {
    // 如果 LocalStorage 中有值，則初始化
    const storedValue = localStorage.getItem(this.localStorageKey);
    this.isChoiceCase = storedValue === 'true';
  }

  get isChoiceCase(): boolean {
    return this._isChoiceCase;
  }

  set isChoiceCase(value: boolean) {
    this._isChoiceCase = value;
    localStorage.setItem(this.localStorageKey, String(value));
  }
}
