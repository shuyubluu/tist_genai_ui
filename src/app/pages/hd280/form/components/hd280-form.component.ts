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
import { Hd280ListService } from '../../list/service/hd280-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd280-form',
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
  templateUrl: './hd280-form.component.html',
  styleUrl: './hd280-form.component.scss',
})
export class Hd280FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 服務內容select選項
  selectOptions_serviceContent: string[] = [
    '關懷訪視',
    '電話問安',
    '健康促進',
    '共餐服務',
    '門診服務(陪就醫)',
    '活動支援服務',
    '行政支援',
    '其他',
  ];
  // 訓練時數-小時select選項
  selectOptions_serviceHours: string[] = [];
  // 訓練時數-分鐘select選項
  selectOptions_serviceMinutes: string[] = ['00', '30'];
  // 服務單位select選項
  selectOptions_serviceUnit: string[] = ['001志工隊', '002志工隊', '003志工隊'];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd280ListService: Hd280ListService, // Hd280ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [Validators.required]),
      // 服務日期_起始
      serviceDate_start: new FormControl('', [Validators.required]),
      // 服務日期_結束
      serviceDate_end: new FormControl('', [Validators.required]),
      // 服務內容
      serviceContent: new FormControl('', [Validators.required]),
      // 服務時數-小時
      serviceHours: new FormControl('', [Validators.required]),
      // 服務時數-分鐘
      serviceMinutes: new FormControl('', [Validators.required]),
      // 受服務人次
      serviceSessions: new FormControl(''),
      // 服務單位
      serviceUnit: new FormControl(''),
      // 服務志工
      serviceVolunteer: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 生成訓練時數-小時select選項
    for (let i = 1; i <= 30; i++) {
      this.selectOptions_serviceHours.push(i.toString());
    }
  }

  // 服務志工選項改變
  serviceVolunteerChange(checkGroup: string[]) {
    this.form.get('serviceVolunteer')?.setValue(checkGroup);
  }

  // 新增
  create() {
    this.message.create('success', '新增成功');
    this.closeTab('服務時數管理表');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
