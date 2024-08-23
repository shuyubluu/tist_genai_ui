import { Injectable, OnInit } from '@angular/core';
import { CaseData } from './case-information.interface';

@Injectable({
  providedIn: 'root',
})
export class CaseInformationService implements OnInit {
  // 是否已選取個案
  isChoiceCase: boolean = false;
  // 個案資料
  caseData: CaseData[] = [
    {
      name: '王大明',
      idNumber: 'D123456789',
      caseOpeningDate: '113/02/01',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
