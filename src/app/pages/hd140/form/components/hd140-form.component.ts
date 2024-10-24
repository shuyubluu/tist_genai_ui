import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Hd140ListService } from '../../list/service/hd140-list.service';
import { DateValidators } from '../../../../common/validator/date-validator';

@Component({
  selector: 'app-hd140-form',
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
  templateUrl: './hd140-form.component.html',
  styleUrl: './hd140-form.component.scss',
})
export class Hd140FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';

  // 訪視方式select選項
  selectOptions_visitMethod: string[] = ['面訪', '電訪', '視訊'];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 最新風險等級select選項
  selectOptions_latestRiskLevel: string[] = ['低風險', '中風險', '高風險'];
  // 訪視結果select選項
  selectOptions_visitOutcome: string[] = ['持續服務', '暫停', '結案'];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public hd140ListService: Hd140ListService // hd140ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.訪視概況
      // 個案姓名
      caseName: new FormControl(''),
      // 訪視日期
      visitDate: new FormControl('', [DateValidators.dateValidator]),
      // 訪視方式
      visitMethod: new FormControl('', [Validators.required]),
      // 本次訪視目的
      visitPurpose: new FormControl('', [Validators.required]),
      // 訪視紀錄
      visitRecord: new FormControl('', [Validators.required]),
      // 下次追蹤事項
      followUpItems: new FormControl('', [Validators.required]),
      // 是否連結其他資源
      linkedToOtherResources: new FormControl('', [Validators.required]),

      // 3.本次評估需求項目
      // 福利身分別
      welfareStatus: new FormControl(''),
      // 長照需求
      longTermCareNeeds: new FormControl(''),
      // 餐食需求
      mealNeeds: new FormControl(''),
      // 醫療需求
      medicalNeeds: new FormControl(''),
      // 經濟需求
      economicNeeds: new FormControl(''),
      // 經濟需求其他
      economicNeeds_other: new FormControl(''),
      // 輔具需求
      assistiveDeviceNeeds: new FormControl(''),
      // 環境需求
      environmentalNeeds: new FormControl(''),
      // 社會餐與
      socialMealNeeds: new FormControl(''),
      // 社會餐與其他
      socialMealNeeds_other: new FormControl(''),
      // 自我保護需求
      selfProtectionNeeds: new FormControl(''),
      // 自我保護需求其他
      selfProtectionNeeds_other: new FormControl(''),
      // 鑑定需求
      assessmentNeeds: new FormControl(''),
      // 其他照顧需求
      otherCareNeeds: new FormControl(''),

      // 5.處遇內容
      // 處遇目標內容
      treatmentGoalsContent: new FormControl('', [Validators.required]),
      // 處遇計畫/服務安排
      serviceArrangement: new FormControl('', [Validators.required]),

      // 5.個案資訊更新
      // 最新風險等級
      latestRiskLevel: new FormControl('', [Validators.required]),
      // 訪視結果
      visitOutcome: new FormControl('', [Validators.required]),

      // 6.主管簽核
      // 單位主管意見
      supervisorComments: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
    // 檢視模式，禁用表單
    if (this.hd140ListService.isView) {
      this.form.disable();
    }
    // 禁用經濟需求其他
    this.form.get('economicNeeds_other')?.disable();
    // 禁用社會餐與其他
    this.form.get('socialMealNeeds_other')?.disable();
    // 禁用自我保護需求其他
    this.form.get('selfProtectionNeeds_other')?.disable();
  }

  // 是否連結其他資源選項改變
  handleSelectChange_linkedToOtherResources(option: string) {
    if (option === '是') {
      this.message.create(
        'warning',
        '請回1-2個案開案資料表更新資源福利使用內容'
      );
    }
  }
  // 福利身分別選項改變
  welfareStatusChange(checkGroup: string[]) {
    this.form.get('welfareStatus')?.setValue(checkGroup);
  }

  // 長照需求選項改變
  longTermCareNeedsChange(checkGroup: string[]) {
    this.form.get('longTermCareNeeds')?.setValue(checkGroup);
  }

  // 餐食需求選項改變
  mealNeedsChange(checkGroup: string[]) {
    this.form.get('mealNeeds')?.setValue(checkGroup);
  }

  // 醫療需求選項改變
  medicalNeedsChange(checkGroup: string[]) {
    this.form.get('medicalNeeds')?.setValue(checkGroup);
  }

  // 經濟需求選項改變
  economicNeedsChange(checkGroup: string[]) {
    this.form.get('economicNeeds')?.setValue(checkGroup);
    if (checkGroup.includes('8')) {
      this.form.get('economicNeeds_other')?.enable();
    } else {
      this.form.get('economicNeeds_other')?.disable();
    }
  }

  // 輔具需求選項改變
  assistiveDeviceNeedsChange(checkGroup: string[]) {
    this.form.get('assistiveDeviceNeeds')?.setValue(checkGroup);
  }

  // 環境需求選項改變
  environmentalNeedsChange(checkGroup: string[]) {
    this.form.get('environmentalNeeds')?.setValue(checkGroup);
  }

  // 社會餐與選項改變
  socialMealNeedsChange(checkGroup: string[]) {
    this.form.get(' socialMealNeeds')?.setValue(checkGroup);
    if (checkGroup.includes('4')) {
      this.form.get('socialMealNeeds_other')?.enable();
    } else {
      this.form.get('socialMealNeeds_other')?.disable();
    }
  }

  // 自我保護需求選項改變
  selfProtectionNeedsChange(checkGroup: string[]) {
    this.form.get('selfProtectionNeeds')?.setValue(checkGroup);
    if (checkGroup.includes('5')) {
      this.form.get('selfProtectionNeeds_other')?.enable();
    } else {
      this.form.get('selfProtectionNeeds_other')?.disable();
    }
  }

  // 鑑定需求選項改變
  assessmentNeedsChange(checkGroup: string[]) {
    this.form.get('assessmentNeeds')?.setValue(checkGroup);
  }

  // 其他照顧需求選項改變
  otherCareNeedsChange(checkGroup: string[]) {
    this.form.get('otherCareNeeds')?.setValue(checkGroup);
  }

  // 暫存草稿
  save() {
    this.message.create('success', '儲存成功');
    if (this.form.get('visitOutcome')?.value === '結案') {
      this.router.navigate(['/hd100/form']);
    }
  }

  // 送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab();
  }

  // 關閉個案開案評估表
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }
}
