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
  selector: 'app-hd150-form',
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
  templateUrl: './hd150-form.component.html',
  styleUrl: './hd150-form.component.scss',
})
export class Hd150FormComponent implements OnInit {
  // 個案初判表單
  form: FormGroup;
  // 訪視方式select選項
  selectOptions_visitMethod: string[] = ['面訪', '電訪', '視訊'];
  // 最新風險等級select選項
  selectOptions_latestRiskLevel: string[] = ['低風險', '中風險', '高風險'];
  // 訪視結果select選項
  selectOptions_visitOutcome: string[] = ['持續服務', '暫停風險', '結案'];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.訪視概況
      // 個案姓名
      caseName: new FormControl(''),
      // 訪視日期
      visitDate: new FormControl('', [Validators.required]),
      // 訪視方式
      visitMethod: new FormControl('', [Validators.required]),
      // 文字描述_生理
      textDescription_physical: new FormControl('', [Validators.required]),
      // 文字描述_心理
      textDescription_psychological: new FormControl('', [Validators.required]),
      // 文字描述_家庭
      textDescription_family: new FormControl('', [Validators.required]),
      // 文字描述_社會
      textDescription_social: new FormControl('', [Validators.required]),
      // 文字描述_經濟
      textDescription_economic: new FormControl('', [Validators.required]),
      // 文字描述_居住環境
      textDescription_livingEnvironment: new FormControl('', [
        Validators.required,
      ]),
      // 文字描述_心外出
      textDescription_outdoorActivity: new FormControl('', [
        Validators.required,
      ]),

      // 2.需求評估
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

      // 3.處遇內容
      // 處遇目標
      treatmentGoals: new FormControl('', [Validators.required]),
      // 處遇計畫/服務安排
      serviceArrangement: new FormControl('', [Validators.required]),

      // 4.個案資訊更新
      // 最新風險等級
      latestRiskLevel: new FormControl('', [Validators.required]),
      // 訪視結果
      visitOutcome: new FormControl('', [Validators.required]),

      // 6.主管簽核
      // 單位主管意見
      supervisorComments: new FormControl('', [Validators.required]),
    });
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

  ngOnInit(): void {
    // 禁用個案姓名
    this.form.get('caseName')?.disable();
    // 禁用經濟需求其他
    this.form.get('economicNeeds_other')?.disable();
    // 禁用社會餐與其他
    this.form.get('socialMealNeeds_other')?.disable();
    // 禁用自我保護需求其他
    this.form.get('selfProtectionNeeds_other')?.disable();
  }

  // 暫存草稿
  save() {
    this.message.create('success', '草稿暫存成功');
    if (this.form.get('visitOutcome')?.value === '結案') {
      this.router.navigate(['/hd100/form']);
    }
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab('[個案複評表]:::資料新增');
  }

  // 關閉個案複評表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
