import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd250ListService } from '../../list/service/hd250-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { rangeValidator } from '../../../../common/validator/range-validator';

@Component({
  selector: 'app-hd250-form',
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
  templateUrl: './hd250-form.component.html',
  styleUrl: './hd250-form.component.scss',
})
export class Hd250FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];

  // 志工評分計算
  get calcVolunteerScore(): number {
    return Math.ceil(
      this.form.get('serviceEthics_volunteer_1')?.value * 0.05 +
        this.form.get('serviceEthics_volunteer_2')?.value * 0.05 +
        this.form.get('serviceEthics_volunteer_3')?.value * 0.1 +
        this.form.get('serviceEthics_volunteer_4')?.value * 0.1 +
        this.form.get('attendanceStatus_volunteer_1')?.value * 0.05 +
        this.form.get('attendanceStatus_volunteer_2')?.value * 0.05 +
        this.form.get('attendanceStatus_volunteer_3')?.value * 0.05 +
        this.form.get('attendanceStatus_volunteer_4')?.value * 0.1 +
        this.form.get('serviceQuality_volunteer_1')?.value * 0.05 +
        this.form.get('serviceQuality_volunteer_2')?.value * 0.05 +
        this.form.get('serviceQuality_volunteer_3')?.value * 0.05 +
        this.form.get('serviceQuality_volunteer_4')?.value * 0.1 +
        this.form.get('teamSpirit_volunteer_1')?.value * 0.1 +
        this.form.get('teamSpirit_volunteer_2')?.value * 0.05 +
        this.form.get('teamSpirit_volunteer_3')?.value * 0.05
    );
  }
  // 督導評分計算
  get calcSupervisorScore(): number {
    return Math.ceil(
      this.form.get('serviceEthics_supervisor_1')?.value * 0.05 +
        this.form.get('serviceEthics_supervisor_2')?.value * 0.05 +
        this.form.get('serviceEthics_supervisor_3')?.value * 0.1 +
        this.form.get('serviceEthics_supervisor_4')?.value * 0.1 +
        this.form.get('attendanceStatus_supervisor_1')?.value * 0.05 +
        this.form.get('attendanceStatus_supervisor_2')?.value * 0.05 +
        this.form.get('attendanceStatus_supervisor_3')?.value * 0.05 +
        this.form.get('attendanceStatus_supervisor_4')?.value * 0.1 +
        this.form.get('serviceQuality_supervisor_1')?.value * 0.05 +
        this.form.get('serviceQuality_supervisor_2')?.value * 0.05 +
        this.form.get('serviceQuality_supervisor_3')?.value * 0.05 +
        this.form.get('serviceQuality_supervisor_4')?.value * 0.1 +
        this.form.get('teamSpirit_supervisor_1')?.value * 0.1 +
        this.form.get('teamSpirit_supervisor_2')?.value * 0.05 +
        this.form.get('teamSpirit_supervisor_3')?.value * 0.05
    );
  }
  // 計算加總成績
  get totalScore(): number {
    return Math.round(
      this.calcVolunteerScore * 0.3 + this.calcSupervisorScore * 0.7
    );
  }
  // 判斷評估結果
  get assessmentResults(): string {
    if (this.totalScore >= 80) {
      return '通過';
    } else if (this.totalScore < 60) {
      return '不予通過';
    } else {
      return '三個月內為期改善';
    }
  }

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd250ListService: Hd250ListService, // hd250ListService
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 志工姓名
      volunteerName: new FormControl('', [Validators.required]),
      // 入站/隊日期
      entryDate: new FormControl('', [Validators.required]),
      // 填寫日期
      submissionDate: new FormControl('', [Validators.required]),

      // 1.服務倫理
      // 服務倫理_志工評分_1
      serviceEthics_volunteer_1: new FormControl(''),
      // 服務倫理_督導評分_1
      serviceEthics_supervisor_1: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務倫理_志工評分_2
      serviceEthics_volunteer_2: new FormControl(''),
      // 服務倫理_督導評分_2
      serviceEthics_supervisor_2: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務倫理_志工評分_3
      serviceEthics_volunteer_3: new FormControl(''),
      // 服務倫理_督導評分_3
      serviceEthics_supervisor_3: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務倫理_志工評分_4
      serviceEthics_volunteer_4: new FormControl(''),
      // 服務倫理_督導評分_4
      serviceEthics_supervisor_4: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),

      // 2.出勤狀況
      // 出勤狀況_志工評分_1
      attendanceStatus_volunteer_1: new FormControl(''),
      // 出勤狀況_督導評分_1
      attendanceStatus_supervisor_1: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 出勤狀況_志工評分_2
      attendanceStatus_volunteer_2: new FormControl(''),
      // 出勤狀況_督導評分_2
      attendanceStatus_supervisor_2: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 出勤狀況_志工評分_3
      attendanceStatus_volunteer_3: new FormControl(''),
      // 出勤狀況_督導評分_3
      attendanceStatus_supervisor_3: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 出勤狀況_志工評分_4
      attendanceStatus_volunteer_4: new FormControl(''),
      // 出勤狀況_督導評分_4
      attendanceStatus_supervisor_4: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),

      // 3.服務品質
      // 服務品質_志工評分_1
      serviceQuality_volunteer_1: new FormControl(''),
      // 服務品質_督導評分_1
      serviceQuality_supervisor_1: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務品質_志工評分_2
      serviceQuality_volunteer_2: new FormControl(''),
      // 服務品質_督導評分_2
      serviceQuality_supervisor_2: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務品質_志工評分_3
      serviceQuality_volunteer_3: new FormControl(''),
      // 服務品質_督導評分_3
      serviceQuality_supervisor_3: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 服務品質_志工評分_4
      serviceQuality_volunteer_4: new FormControl(''),
      // 服務品質_督導評分_4
      serviceQuality_supervisor_4: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),

      // 4.團隊精神
      // 團隊精神_志工評分_1
      teamSpirit_volunteer_1: new FormControl(''),
      // 團隊精神_督導評分_1
      teamSpirit_supervisor_1: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 團隊精神_志工評分_2
      teamSpirit_volunteer_2: new FormControl(''),
      // 團隊精神_督導評分_2
      teamSpirit_supervisor_2: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 團隊精神_志工評分_3
      teamSpirit_volunteer_3: new FormControl(''),
      // 團隊精神_督導評分_3
      teamSpirit_supervisor_3: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),

      // 5.志工評估結果
      // 為期改善原因
      improvementReason: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 第一次為期改善是否通過_評核日期
      firstImprovementPassed_evaluationDate: new FormControl(''),
      // 第一次為期改善是否通過
      firstImprovementPassed: new FormControl(''),
      // 第一次為期改善未通過原因
      firstImprovementFailedReason: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 第二次為期改善是否通過_評核日期
      secondImprovementPassed_evaluationDate: new FormControl(''),
      // 第二次為期改善是否通過
      secondImprovementPassed: new FormControl(''),
      // 第二次為期改善未通過原因
      secondImprovementFailedReason: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 不予通過原因
      rejectionReason: new FormControl('', [
        Validators.required,
        rangeValidator(),
      ]),
      // 志工督導
      volunteerSupervisor: new FormControl(''),
      // 主責人姓名
      responsiblePersonName: new FormControl(''),
      // 單位主管
      unitSupervisor: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd250ListService.isView) {
      this.form.disable();
    }
    // 禁用志工評分
    this.form.get('serviceEthics_volunteer_1')?.disable();
    this.form.get('serviceEthics_volunteer_2')?.disable();
    this.form.get('serviceEthics_volunteer_3')?.disable();
    this.form.get('serviceEthics_volunteer_4')?.disable();
    this.form.get('attendanceStatus_volunteer_1')?.disable();
    this.form.get('attendanceStatus_volunteer_2')?.disable();
    this.form.get('attendanceStatus_volunteer_3')?.disable();
    this.form.get('attendanceStatus_volunteer_4')?.disable();
    this.form.get('serviceQuality_volunteer_1')?.disable();
    this.form.get('serviceQuality_volunteer_2')?.disable();
    this.form.get('serviceQuality_volunteer_3')?.disable();
    this.form.get('serviceQuality_volunteer_4')?.disable();
    this.form.get('teamSpirit_volunteer_1')?.disable();
    this.form.get('teamSpirit_volunteer_2')?.disable();
    this.form.get('teamSpirit_volunteer_3')?.disable();
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab('服務品質評估表');
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
    this.closeTab('服務品質評估表');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
