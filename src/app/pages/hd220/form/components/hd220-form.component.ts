import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd220ListService } from '../../list/service/hd220-list.service';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { DateValidators } from '../../../../common/validator/date-validator';

@Component({
  selector: 'app-hd220-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    VolunteerInformationComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd220-form.component.html',
  styleUrl: './hd220-form.component.scss',
})
export class Hd220FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 表揚單位select選項
  selectOptions_praiseUnit: string[] = ['會外表揚', '會內表揚'];
  // 本單位表揚select選項
  selectOptions_unitPraise: string[] = [
    '珍珠志工(本會服務滿500小時)',
    '金牌志工(本會服務滿1,000小時)',
    '鑽石志工(本會服務滿5,000小時)',
    '終身志工(本會服務滿10,000小時)',
    '卓越獎-個人型',
    '特殊貢獻獎',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd220ListService: Hd220ListService // hd220ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      formDate: new FormControl('', [DateValidators.dateValidator]),
      // 表揚單位
      praiseUnit: new FormControl('', [Validators.required]),
      // 外單位_表揚單位名稱
      externalUnit_praiseUnitName: new FormControl(''),
      // 外單位_獎項名稱
      externalUnit_awardName: new FormControl(''),
      // 外單位_具體事蹟
      externalUnit_specificDeeds: new FormControl('', [Validators.required]),
      // 本單位表揚
      unitPraise: new FormControl('', [Validators.required]),
      // 具體事蹟
      specificDeeds: new FormControl('', [Validators.required]),
      // 受獎日期
      awardDate: new FormControl('', [DateValidators.dateValidator]),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd220ListService.isView) {
      this.form.disable();
    }

    // 如果表揚單位沒有選擇
    // 如有選擇則判定開啟哪項表單
    if (this.form.value.praiseUnit === '') {
      // 禁用外單位_表揚單位名稱
      this.form.get('externalUnit_praiseUnitName')?.disable();
      // 禁用外單位_獎項名稱
      this.form.get('externalUnit_awardName')?.disable();
      // 禁用外單位_具體事蹟
      this.form.get('externalUnit_specificDeeds')?.disable();
      // 禁用本單位表揚
      this.form.get('unitPraise')?.disable();
      // 禁用具體事蹟
      this.form.get('specificDeeds')?.disable();
    } else {
      this.onPraiseUnitSelectChange(this.form.value.praiseUnit);
    }
  }

  // 新增獎勵表揚表
  create() {
    this.message.create('success', '新增成功');
    this.closeTab('獎勵表揚表');
  }

  // 當表揚單位選擇時觸發
  onPraiseUnitSelectChange(option: string) {
    if (option === '會外表揚') {
      // 啟用外單位_表揚單位名稱
      this.form.get('externalUnit_praiseUnitName')?.enable();
      // 啟用外單位_獎項名稱
      this.form.get('externalUnit_awardName')?.enable();
      // 啟用外單位_具體事蹟
      this.form.get('externalUnit_specificDeeds')?.enable();
    } else {
      this.form.get('unitPraise')?.enable();
      // 禁用外單位_表揚單位名稱
      this.form.get('externalUnit_praiseUnitName')?.disable();
      // 禁用外單位_獎項名稱
      this.form.get('externalUnit_awardName')?.disable();
      // 禁用外單位_具體事蹟
      this.form.get('externalUnit_specificDeeds')?.disable();
    }
    if (option === '會內表揚') {
      // 啟用本單位表揚
      this.form.get('unitPraise')?.enable();
      // 啟用具體事蹟
      this.form.get('specificDeeds')?.enable();
    } else {
      // 禁用本單位表揚
      this.form.get('unitPraise')?.disable();
      // 禁用具體事蹟
      this.form.get('specificDeeds')?.disable();
    }
  }

  // 關閉獎勵表揚表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
