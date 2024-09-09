import { Hd210ListService } from './../../list/service/hd210-list.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaiwanCitySelectComponent } from '../../../../common/components/select/taiwanCitySelect/components/taiwan-city-select.component';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { VolunteerInformationService } from './../../../../common/components/volunteerInformation/service/volunteer-information.service';

@Component({
  selector: 'app-hd210-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    TaiwanCitySelectComponent,
    ErrorMessageComponent,
    VolunteerInformationComponent,
  ],
  templateUrl: './hd210-form.component.html',
  styleUrl: './hd210-form.component.scss',
})
export class Hd210FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 訓練單位select選項
  selectOptions_trainingUnit: string[] = ['外單位', '本單位'];
  // 訓練課程select選項
  selectOptions_trainingCourse: string[] = [
    '基礎訓練',
    '特殊訓練(社福)',
    '成長訓練',
    '領導訓練',
    '督導訓練',
    '其他在職訓練',
  ];
  // 課程領域select選項
  selectOptions_courseField: string[] = [
    '社福',
    '性侵害防治',
    '家暴防治',
    '法務',
    '經濟',
    '交通',
    '衛生',
    '環保',
  ];
  // 訓練時數-小時select選項
  selectOptions_trainingHours: string[] = [];
  // 訓練時數-分鐘select選項
  selectOptions_trainingMinutes: string[] = ['00', '30'];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd210ListService: Hd210ListService, // hd210ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      submissionDate: new FormControl('', [Validators.required]),

      // 1.訓練內容
      // 受訓日期_起始
      trainingDate_start: new FormControl(''),
      // 受訓日期_結束
      trainingDate_end: new FormControl(''),
      // 訓練單位
      trainingUnit: new FormControl('', [Validators.required]),
      // 訓練單位_外單位輸入
      trainingUnit_outside: new FormControl('', [Validators.required]),
      // 訓練課程
      trainingCourse: new FormControl('', [Validators.required]),
      // 課程名稱
      courseName: new FormControl(''),
      // 課程領域
      courseField: new FormControl('', [Validators.required]),
      // 訓練次數
      trainingSessions: new FormControl(1, [Validators.required]),
      // 訓練時數-小時
      trainingHours: new FormControl('', [Validators.required]),
      // 訓練時數-分鐘
      trainingMinutes: new FormControl('', [Validators.required]),
      // 核定字號
      approvalNumber: new FormControl(''),
      // 核定日期
      approvalDate: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 禁用訓練次數
    this.form.get('trainingSessions')?.disable();
    // 生成訓練時數-小時select選項
    for (let i = 0; i <= 30; i++) {
      this.selectOptions_trainingHours.push(i.toString());
    }
    // 禁用核定字號
    this.form.get('approvalNumber')?.disable();
    // 禁用核定日期
    this.form.get('approvalDate')?.disable();
  }

  // 當訓練課程選項改變時
  handleTrainingCourse(option: string) {
    if (option === '其他在職訓練' || option === '') {
      this.form.get('approvalNumber')?.disable();
      this.form.get('approvalDate')?.disable();
      this.form.get('approvalNumber')?.reset();
      this.form.get('approvalDate')?.reset();
    } else {
      this.form.get('approvalNumber')?.enable();
      this.form.get('approvalDate')?.enable();
    }
  }

  // 新增教育訓練表
  create() {
    this.message.create('success', '新增成功');
    this.closeTab('教育訓練表');
  }

  // 關閉教育訓練表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
