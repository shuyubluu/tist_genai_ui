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
import { VolunteerInformationService } from '../../../../common/components/volunteerInformation/service/volunteer-information.service';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { Hd230ListService } from '../../../hd230/list/service/hd230-list.service';
import { DateValidators } from '../../../../common/validator/date-validator';
import { compareDate } from '../../../../common/utils/compareDate';

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
  // 檢查日期區間
  checkDateRange: boolean = false;
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
  selectOptions_serviceUnit: string[] = [
    '彭祖體驗長者導師志工隊',
    '不老夢想125號志工隊',
    '北投(北投志工站)',
    '南港(南港志工站)',
    '松山(松山志工站)',
    '中正(中正志工站)',
    '內湖(內湖志工站)',
    '宜蘭(宜蘭志工站)',
    '八德(八德志工站)',
    '龍潭(龍潭志工站)',
    '平溪(平溪志工站)',
    '樹林(樹林志工站)',
    '三峽(三峽志工站)',
    '雙板(雙板志工站)',
    '新莊(新莊志工站)',
    '清水(清水志工站)',
    '太平(太平志工站)',
    '南屯(南屯志工站)',
    '北屯(北屯志工站)',
    '大雅(大雅志工站)',
    '中西(中西志工站)',
    '埔里(埔里志工站)',
    '西屯(西屯志工隊)',
    '和美(和美志工站)',
    '憶智樂活之家志工隊',
    '田中(田中志工站)',
    '員林(員林志工站)',
    '大林(大林志工站)',
    '嘉西(嘉西志工站)',
    '大寮(大寮志工站)',
    '三民區',
    '前金(志工站)',
    '前金區',
    '萬丹(萬丹志工站)',
    '潮州(潮州志工站)',
    '林邊(林邊志工站)',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd230ListService: Hd230ListService, // Hd230ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [DateValidators.dateValidator]),
      // 服務日期_起始
      serviceDate_start: new FormControl('', [DateValidators.dateValidator]),
      // 服務日期_結束
      serviceDate_end: new FormControl('', [DateValidators.dateValidator]),
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
    // 檢視模式，禁用表單
    if (this.hd230ListService.isView) {
      this.form.disable();
    }
    // 生成訓練時數-小時select選項
    for (let i = 0; i <= 30; i++) {
      this.selectOptions_serviceHours.push(i.toString());
    }
  }

  // 服務志工選項改變
  serviceVolunteerChange(checkGroup: string[]) {
    this.form.get('serviceVolunteer')?.setValue(checkGroup);
  }

  // 儲存
  save() {
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.serviceDate_start,
        this.form.value.serviceDate_end
      )
    ) {
      this.checkDateRange = false;
    } else {
      this.checkDateRange = true;
    }
    if (!this.checkDateRange) {
    this.message.create('success', '儲存成功');
    }
  }

  // 新增
  create() {
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.serviceDate_start,
        this.form.value.serviceDate_end
      )
    ) {
      this.checkDateRange = false;
    } else {
      this.checkDateRange = true;
    }
    if (!this.checkDateRange) {
      this.message.create('success', '新增成功');
      this.closeTab('服務時數管理表');
    }
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當服務日期區間改變觸發
  onServiceDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.serviceDate_start,
          this.form.value.serviceDate_end
        )
      ) {
        this.checkDateRange = false;
        return;
      } else {
        this.checkDateRange = true;
      }
    } else {
      this.checkDateRange = false;
    }
  }
}
