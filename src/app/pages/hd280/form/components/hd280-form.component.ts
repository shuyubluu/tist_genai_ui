import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
import { CheckboxGroup } from '../service/hd280-form.interface';
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
  // tab名稱
  tabName: string = '';
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 檢查時間區間
  checkTimeRange: boolean = false;
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
  // 時間_小時select選項
  selectOptions_timeHours: string[] = [];
  // 時間_分鐘select選項
  selectOptions_timeMinutes: string[] = [];

  // 服務志工勾選狀態
  serviceVolunteer: CheckboxGroup[] = [
    {
      label: '吳小美(11300200001)',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '陳大天(11300200002)',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '陳大天(11300200002)',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd230ListService: Hd230ListService, // Hd230ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 接收後端回傳質料
    // this.serviceVolunteer =

    const serviceVolunteerGroup = this.createCheckboxGroup(
      this.serviceVolunteer
    );

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [DateValidators.dateValidator]),
      // 服務日期_起始
      serviceDate_start: new FormControl('', [DateValidators.dateValidator]),
      // 服務日期_起始_小時
      serviceDate_start_hours: new FormControl('', Validators.required),
      // 服務日期_起始_分鐘
      serviceDate_start_minutes: new FormControl('', Validators.required),
      // 服務日期_結束
      serviceDate_end: new FormControl('', [DateValidators.dateValidator]),
      // 服務日期_結束_小時
      serviceDate_end_hours: new FormControl('', Validators.required),
      // 服務日期_結束_分鐘
      serviceDate_end_minutes: new FormControl('', Validators.required),
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
      serviceVolunteer: new FormGroup(serviceVolunteerGroup),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd230ListService.isView) {
      this.form.disable();
    }
    // 生成訓練時數-小時select選項
    for (let i = 0; i <= 30; i++) {
      this.selectOptions_serviceHours.push(i.toString());
    }

    // 生成時間_小時
    for (let i = 0; i <= 24; i++) {
      this.selectOptions_timeHours.push(i < 10 ? '0' + i : i.toString());
    }
    // 生成時間_分鐘
    for (let i = 0; i <= 60; i++) {
      this.selectOptions_timeMinutes.push(i < 10 ? '0' + i : i.toString());
    }

    // 複選框初始化
    const serviceVolunteerCheckedValues = this.serviceVolunteer
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.serviceVolunteerChange(serviceVolunteerCheckedValues);
  }

  // 服務志工選項改變
  serviceVolunteerChange(checkedValues: string[]) {
    this.serviceVolunteer.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 創建checkbox group
  createCheckboxGroup(options: any[]): { [key: string]: FormControl } {
    const group: { [key: string]: FormControl } = {};
    options.forEach((option) => {
      group[option.value] = new FormControl(option.checked);
      if (option.disabled) {
        group[option.value].disable(); // 如果該選項應該被禁用，則禁用對應的 FormControl
      }
    });
    return group;
  }

  // 儲存
  save() {
    if (
      compareDate(
        this.form.value.serviceDate_start,
        this.form.value.serviceDate_end
      )
    ) {
      // 如果日期有輸入，則檢查日期區間
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
      this.closeTab();
    }
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
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
