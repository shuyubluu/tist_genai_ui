import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-hd100-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd100-form.component.html',
  styleUrl: './hd100-form.component.scss',
})
export class Hd100FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 結案原因select選項
  selectOptions_closureReason: string[] = [
    '個案失聯',
    '超出服務區域範圍',
    '個案決定退出服務',
    '服務未能符合個案需求',
    '個案逝世',
    '進入照顧機構',
    '需求已被滿足',
    '其他',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.訪次概況
      // 填表日期
      formFillingDate: new FormControl(''),
      // 結案日期
      closureDate: new FormControl('', [Validators.required]),
      // 結案原因
      closureReason: new FormControl('', [Validators.required]),
      // 結案原因其他
      closureReason_other: new FormControl('', [Validators.required]),
      // 重要事項概要
      importantSummary: new FormControl('', [Validators.required]),
      // 2.主管簽核
      // 單位主管意見
      supervisorOpinion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 禁用填表日期選擇
    this.form.get('formFillingDate')?.disable();
    // 禁用結案原因其他輸入框
    this.form.get('closureReason_other')?.disable();
  }

  // 結案原因選擇改變
  handleClosureReasonChange(option: string) {
    if (option === '其他') {
      this.form.get('closureReason_other')?.enable();
    } else {
      this.form.get('closureReason_other')?.disable();
      this.form.get('closureReason_other')?.reset();
    }
  }

  // 暫存草稿
  save() {
    this.message.create('success', '草稿暫存成功');
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab('個案結案表');
  }

  // 關閉個案初評表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
