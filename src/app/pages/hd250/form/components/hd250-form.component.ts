import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd250ListService } from '../../list/service/hd250-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { rangeValidator } from '../../../../common/validator/range-validator';
import { DateValidators } from '../../../../common/validator/date-validator';

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
  // tab名稱
  tabName: string = '';
  // 是否需要為期改善
  isNeedsPeriodicImprovement: boolean = false;
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];

  // 志工評分計算
  get calcVolunteerScore(): number {
    return Math.ceil(
      parseInt(this.form.get('serviceEthics_volunteer_1')?.value) +
        parseInt(this.form.get('serviceEthics_volunteer_2')?.value) +
        parseInt(this.form.get('serviceEthics_volunteer_3')?.value) +
        parseInt(this.form.get('serviceEthics_volunteer_4')?.value) +
        parseInt(this.form.get('attendanceStatus_volunteer_1')?.value) +
        parseInt(this.form.get('attendanceStatus_volunteer_2')?.value) +
        parseInt(this.form.get('attendanceStatus_volunteer_3')?.value) +
        parseInt(this.form.get('attendanceStatus_volunteer_4')?.value) +
        parseInt(this.form.get('serviceQuality_volunteer_1')?.value) +
        parseInt(this.form.get('serviceQuality_volunteer_2')?.value) +
        parseInt(this.form.get('serviceQuality_volunteer_3')?.value) +
        parseInt(this.form.get('serviceQuality_volunteer_4')?.value) +
        parseInt(this.form.get('teamSpirit_volunteer_1')?.value) +
        parseInt(this.form.get('teamSpirit_volunteer_2')?.value) +
        parseInt(this.form.get('teamSpirit_volunteer_3')?.value)
    );
  }
  // 督導評分計算
  get calcSupervisorScore(): number {
    return Math.ceil(
      parseInt(this.form.get('serviceEthics_supervisor_1')?.value) +
        parseInt(this.form.get('serviceEthics_supervisor_2')?.value) +
        parseInt(this.form.get('serviceEthics_supervisor_3')?.value) +
        parseInt(this.form.get('serviceEthics_supervisor_4')?.value) +
        parseInt(this.form.get('attendanceStatus_supervisor_1')?.value) +
        parseInt(this.form.get('attendanceStatus_supervisor_2')?.value) +
        parseInt(this.form.get('attendanceStatus_supervisor_3')?.value) +
        parseInt(this.form.get('attendanceStatus_supervisor_4')?.value) +
        parseInt(this.form.get('serviceQuality_supervisor_1')?.value) +
        parseInt(this.form.get('serviceQuality_supervisor_2')?.value) +
        parseInt(this.form.get('serviceQuality_supervisor_3')?.value) +
        parseInt(this.form.get('serviceQuality_supervisor_4')?.value) +
        parseInt(this.form.get('teamSpirit_supervisor_1')?.value) +
        parseInt(this.form.get('teamSpirit_supervisor_2')?.value) +
        parseInt(this.form.get('teamSpirit_supervisor_3')?.value)
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
      this.isNeedsPeriodicImprovement = false;
      this.updateFirstImprovementInput(this.isNeedsPeriodicImprovement);
      return '通過';
    } else if (this.totalScore < 60) {
      this.isNeedsPeriodicImprovement = false;
      this.updateFirstImprovementInput(this.isNeedsPeriodicImprovement);
      return '不予通過';
    } else {
      this.isNeedsPeriodicImprovement = true;
      this.updateFirstImprovementInput(this.isNeedsPeriodicImprovement);
      return '三個月內為期改善';
    }
  }

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    public hd250ListService: Hd250ListService, // hd250ListService
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 志工姓名
      volunteerName: new FormControl('', [Validators.required]),
      // 入站/隊日期
      entryDate: new FormControl('', [DateValidators.dateValidator]),
      // 填寫日期
      submissionDate: new FormControl('', [DateValidators.dateValidator]),

      // 1.服務倫理
      // 服務倫理_志工評分_1
      serviceEthics_volunteer_1: new FormControl(5),
      // 服務倫理_督導評分_1
      serviceEthics_supervisor_1: new FormControl(0, [Validators.required]),
      // 服務倫理_志工評分_2
      serviceEthics_volunteer_2: new FormControl(5),
      // 服務倫理_督導評分_2
      serviceEthics_supervisor_2: new FormControl(0, [Validators.required]),
      // 服務倫理_志工評分_3
      serviceEthics_volunteer_3: new FormControl(10),
      // 服務倫理_督導評分_3
      serviceEthics_supervisor_3: new FormControl(0, [Validators.required]),
      // 服務倫理_志工評分_4
      serviceEthics_volunteer_4: new FormControl(10),
      // 服務倫理_督導評分_4
      serviceEthics_supervisor_4: new FormControl(0, [Validators.required]),

      // 2.出勤狀況
      // 出勤狀況_志工評分_1
      attendanceStatus_volunteer_1: new FormControl(5),
      // 出勤狀況_督導評分_1
      attendanceStatus_supervisor_1: new FormControl(0, [Validators.required]),
      // 出勤狀況_志工評分_2
      attendanceStatus_volunteer_2: new FormControl(5),
      // 出勤狀況_督導評分_2
      attendanceStatus_supervisor_2: new FormControl(0, [Validators.required]),
      // 出勤狀況_志工評分_3
      attendanceStatus_volunteer_3: new FormControl(5),
      // 出勤狀況_督導評分_3
      attendanceStatus_supervisor_3: new FormControl(0, [Validators.required]),
      // 出勤狀況_志工評分_4
      attendanceStatus_volunteer_4: new FormControl(0),
      // 出勤狀況_督導評分_4
      attendanceStatus_supervisor_4: new FormControl(0, [Validators.required]),

      // 3.服務品質
      // 服務品質_志工評分_1
      serviceQuality_volunteer_1: new FormControl(0),
      // 服務品質_督導評分_1
      serviceQuality_supervisor_1: new FormControl(0, [Validators.required]),
      // 服務品質_志工評分_2
      serviceQuality_volunteer_2: new FormControl(0),
      // 服務品質_督導評分_2
      serviceQuality_supervisor_2: new FormControl(0, [Validators.required]),
      // 服務品質_志工評分_3
      serviceQuality_volunteer_3: new FormControl(0),
      // 服務品質_督導評分_3
      serviceQuality_supervisor_3: new FormControl(0, [Validators.required]),
      // 服務品質_志工評分_4
      serviceQuality_volunteer_4: new FormControl(0),
      // 服務品質_督導評分_4
      serviceQuality_supervisor_4: new FormControl(0, [Validators.required]),

      // 4.團隊精神
      // 團隊精神_志工評分_1
      teamSpirit_volunteer_1: new FormControl(0),
      // 團隊精神_督導評分_1
      teamSpirit_supervisor_1: new FormControl(0, [Validators.required]),
      // 團隊精神_志工評分_2
      teamSpirit_volunteer_2: new FormControl(0),
      // 團隊精神_督導評分_2
      teamSpirit_supervisor_2: new FormControl(0, [Validators.required]),
      // 團隊精神_志工評分_3
      teamSpirit_volunteer_3: new FormControl(0),
      // 團隊精神_督導評分_3
      teamSpirit_supervisor_3: new FormControl(0, [Validators.required]),

      // 5.志工評估結果
      // 為期改善原因
      improvementReason: new FormControl('', [Validators.required]),
      // 第一次為期改善是否通過_評核日期
      firstImprovementPassed_evaluationDate: new FormControl(''),
      // 第一次為期改善是否通過
      firstImprovementPassed: new FormControl(''),
      // 第一次為期改善未通過原因
      firstImprovementFailedReason: new FormControl('', [Validators.required]),
      // 第二次為期改善是否通過_評核日期
      secondImprovementPassed_evaluationDate: new FormControl(''),
      // 第二次為期改善是否通過
      secondImprovementPassed: new FormControl(''),
      // 第二次為期改善未通過原因
      secondImprovementFailedReason: new FormControl('', [Validators.required]),
      // 不予通過原因
      rejectionReason: new FormControl('', [Validators.required]),
      // 志工督導
      volunteerSupervisor: new FormControl(''),
      // 主責人姓名
      responsiblePersonName: new FormControl(''),
      // 單位主管
      unitSupervisor: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

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

    // 禁用為期改善
    this.form.get('firstImprovementPassed_evaluationDate')?.disable();
    this.form.get('firstImprovementPassed')?.disable();
    this.form.get('firstImprovementFailedReason')?.disable();
    this.form.get('secondImprovementPassed_evaluationDate')?.disable();
    this.form.get('secondImprovementPassed')?.disable();
    this.form.get('secondImprovementFailedReason')?.disable();

    // 禁用主責人姓名
    this.form.get('responsiblePersonName')?.disable();
  }

  // 通用的監控分數表單值變化方法
  onScoreInput(event: Event, formControlName: string, maxScore: number): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9.]/g, '');

    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }
    if (parts.length === 2 && parts[1].length > 1) {
      value = parts[0] + '.' + parts[1].slice(0, 1);
    }

    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      if (numValue > maxScore) value = String(maxScore);
      if (numValue < 0) value = '0';
    }

    input.value = value;
    this.form.get(formControlName)?.setValue(value, { emitEvent: true });
  }

  // 通用的占比表單值失焦處理方法
  onScoreInputBlur(formControlName: string, maxScore: number) {
    const control = this.form.get(formControlName);
    if (control) {
      let value = control.value;
      if (typeof value === 'string') {
        // 如果值以 '.' 結尾，則去掉它
        if (value.endsWith('.')) {
          value = value.slice(0, -1);
        }
        const numValue = parseFloat(value);
        // 將值限制在 0 到 maxScore 之間
        if (!isNaN(numValue)) {
          value = Math.min(Math.max(numValue, 0), maxScore).toString();
        } else {
          value = ''; // 非數字時重置為空值
        }
        // 更新表單控件的值
        control.setValue(value, { emitEvent: true });
      }
    }
  }

  // 第一次為期改善select變更
  firstImprovementPassedChange(option: string) {
    if (option === '是') {
      this.form.get('secondImprovementPassed_evaluationDate')?.enable();
      this.form.get('secondImprovementPassed')?.enable();
      this.form.get('secondImprovementFailedReason')?.enable();
    } else {
      this.form.get('secondImprovementPassed_evaluationDate')?.disable();
      this.form.get('secondImprovementPassed_evaluationDate')?.reset();
      this.form.get('secondImprovementPassed')?.disable();
      this.form.get('secondImprovementPassed')?.reset();
      this.form.get('secondImprovementFailedReason')?.disable();
      this.form.get('secondImprovementFailedReason')?.reset();
    }
  }

  // 更新第一次為期改善輸入選項
  updateFirstImprovementInput(isNeedsPeriodicImprovement: boolean) {
    if (isNeedsPeriodicImprovement) {
      this.form.get('firstImprovementPassed_evaluationDate')?.enable();
      this.form.get('firstImprovementPassed')?.enable();
      this.form.get('firstImprovementFailedReason')?.enable();
      this.form.get('secondImprovementPassed_evaluationDate')?.enable();
      this.form.get('secondImprovementPassed')?.enable();
      this.form.get('secondImprovementFailedReason')?.enable();
    } else {
      this.form.get('firstImprovementPassed_evaluationDate')?.disable();
      this.form.get('firstImprovementPassed_evaluationDate')?.reset();
      this.form.get('firstImprovementPassed')?.disable();
      this.form.get('firstImprovementPassed')?.reset();
      this.form.get('firstImprovementFailedReason')?.disable();
      this.form.get('firstImprovementFailedReason')?.reset();
      this.form.get('secondImprovementPassed_evaluationDate')?.disable();
      this.form.get('secondImprovementPassed_evaluationDate')?.reset();
      this.form.get('secondImprovementPassed')?.disable();
      this.form.get('secondImprovementPassed')?.reset();
      this.form.get('secondImprovementFailedReason')?.disable();
      this.form.get('secondImprovementFailedReason')?.reset();
    }
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab();
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
    this.closeTab();
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
