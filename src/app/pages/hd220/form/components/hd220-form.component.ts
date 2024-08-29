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
import { NzMessageService } from 'ng-zorro-antd/message';
import { VolunteerInformationService } from '../../../../common/components/volunteerInformation/service/volunteer-information.service';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';

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
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      formDate: new FormControl('', [Validators.required]),
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
      awardDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  // 暫存草稿
  save() {
    this.message.create('success', '儲存成功');
  }

  // 關閉獎勵表揚表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
