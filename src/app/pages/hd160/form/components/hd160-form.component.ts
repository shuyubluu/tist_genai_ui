import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { Hd160ListService } from '../../list/service/hd160-list.service';

@Component({
  selector: 'app-hd160-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    ErrorMessageComponent,
    CaseInformationComponent,
  ],
  templateUrl: './hd160-form.component.html',
  styleUrl: './hd160-form.component.scss',
})
export class Hd160FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 生理select選項
  selectOptions_sheet: string[] = [
    '非常同意',
    '同意',
    '普通',
    '不同意',
    '非常不同意',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public hd160ListService: Hd160ListService // hd160ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 個案姓名
      caseName: new FormControl(''),
      // 訪視日期
      visitDate: new FormControl('', [Validators.required]),
      // 生理
      physiology: new FormControl('', [Validators.required]),
      // 獨立問題1
      independent_question1: new FormControl('', [Validators.required]),
      // 獨立問題2
      independent_question2: new FormControl('', [Validators.required]),
      // 心理問題1
      psychological_question1: new FormControl('', [Validators.required]),
      // 心理問題2
      psychological_question2: new FormControl('', [Validators.required]),
      // 心理問題3
      psychological_question3: new FormControl('', [Validators.required]),
      // 社會
      social: new FormControl('', [Validators.required]),
      // 環境問題1
      environment_question1: new FormControl('', [Validators.required]),
      // 環境問題2
      environment_question2: new FormControl('', [Validators.required]),
      // 環境問題3
      environment_question3: new FormControl('', [Validators.required]),
      // 整體
      overall: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd160ListService.isView) {
      this.form.disable();
    }
    // 禁用個案姓名輸入框
    this.form.get('caseName')?.disable();
  }

  // select分數轉換
  getScore = (option: string): number => {
    switch (option) {
      case '非常同意':
        return 5;
      case '同意':
        return 4;
      case '普通':
        return 3;
      case '不同意':
        return 2;
      case '非常不同意':
        return 1;
      default:
        return 0;
    }
  };

  // select分數轉換_反向計分
  getScore_reverse = (option: string): number => {
    switch (option) {
      case '非常同意':
        return 1;
      case '同意':
        return 2;
      case '普通':
        return 3;
      case '不同意':
        return 4;
      case '非常不同意':
        return 5;
      default:
        return 0;
    }
  };

  // 計算生理面獲得分數
  physiology_score(option: string): number {
    return this.getScore(option);
  }

  // 計算獨立面獲得分數
  independent_score(option1: string, option2: string): number {
    const option1_score: number = this.getScore(option1);
    const option2_score: number = this.getScore(option2);
    return (option1_score + option2_score) / 2;
  }

  // 計算心理面獲得分數
  psychological_score(
    option1: string,
    option2: string,
    option3: string
  ): number {
    const option1_score: number = this.getScore_reverse(option1);
    const option2_score: number = this.getScore(option2);
    const option3_score: number = this.getScore(option3);
    return (option1_score + option2_score + option3_score) / 3;
  }

  // 計算社會面獲得分數
  social_score(option: string): number {
    return this.getScore(option);
  }

  // 計算環境面獲得分數
  environment_score(option1: string, option2: string, option3: string): number {
    const option1_score: number = this.getScore(option1);
    const option2_score: number = this.getScore(option2);
    const option3_score: number = this.getScore(option3);
    return (option1_score + option2_score + option3_score) / 3;
  }

  // 計算整體面獲得分數
  overall_score(option: string): number {
    return this.getScore(option);
  }

  // 暫存草稿
  send() {
    this.message.create('success', '送出成功');
    this.closeTab('生活品質問卷');
  }
  // 暫存草稿
  save() {
    this.message.create('success', '儲存成功');
  }

  // 關閉生活品質問卷
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
