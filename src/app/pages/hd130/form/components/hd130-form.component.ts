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
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { Hd100ListService } from '../../../hd100/list/service/hd100-list.service';
import { DateValidators } from '../../../../common/validator/date-validator';
import { CheckboxGroup } from '../service/hd130-form.interface';

@Component({
  selector: 'app-hd130-form',
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
  templateUrl: './hd130-form.component.html',
  styleUrl: './hd130-form.component.scss',
})
export class Hd130FormComponent implements OnInit {
  // 個案初判表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 訪視方式select選項
  selectOptions_visitMethod: string[] = ['面訪', '電訪', '視訊'];

  // 福利身分別勾選狀態
  welfareStatus: CheckboxGroup[] = [
    {
      label: ' 身障證明申請',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '低收、中低收申請',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '中低收老人津貼申請',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  // 長照需求勾選狀態
  longTermCareNeeds: CheckboxGroup[] = [
    {
      label: ' 居家服務',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '日間照顧',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '機構安置',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '喘息服務',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '照顧指導',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '家庭託管',
      value: '05',
      checked: false,
      disabled: false,
    },
  ];

  // 餐食需求勾選狀態
  mealNeeds: CheckboxGroup[] = [
    {
      label: ' 長照送餐',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '非長照送餐',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '營養評估',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '代餐物資',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  // 醫療需求勾選狀態
  medicalNeeds: CheckboxGroup[] = [
    {
      label: ' 了解醫囑',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '陪同門診、門診手術',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '居家護理',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '復健',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '衛教宣傳',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '用藥安全指導',
      value: '05',
      checked: false,
      disabled: false,
    },
  ];

  // 經濟需求勾選狀態
  economicNeeds: CheckboxGroup[] = [
    {
      label: '住院看護費用',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '急難救助金申請',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '醫療補助費用',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '機構緊急安置費用',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '長照服務費用缺口(交通費等居服費用超出、空窗期費用等)',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '送物資生活用品提供',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '房租費用',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '07',
      checked: false,
      disabled: false,
    },
  ];

  // 輔具提供相關勾選狀態
  assistiveDeviceNeeds: CheckboxGroup[] = [
    {
      label: '輔具申請',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '輔具租借',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '輔具修理',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  // 環境需求相關勾選狀態
  environmentalNeeds: CheckboxGroup[] = [
    {
      label: '無障礙環境改善',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '居家修繕',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '居家環境清潔',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  // 社會參與相關勾選狀態
  socialMealNeeds: CheckboxGroup[] = [
    {
      label: '媒合據點活動',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '志工關懷訪視服務',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '參與敬老旅遊或長者活動',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  // 自我保護需求相關勾選狀態
  selfProtectionNeeds: CheckboxGroup[] = [
    {
      label: '自殺通報',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '家暴通報',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '性侵通報',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '緊急救援守護連線',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 鑑定需求相關勾選狀態
  assessmentNeeds: CheckboxGroup[] = [
    {
      label: '身障鑑定',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '失智症鑑定',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '重大傷病申請',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '憂鬱/躁鬱鑑定',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '監護鑑定',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 其他照顧需求相關勾選狀態
  otherCareNeeds: CheckboxGroup[] = [
    {
      label: '交通需求',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '心理諮商需求',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '善終預備',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '法律需求',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    public caseInformationService: CaseInformationService, // caseInformationService
    private tabService: TabService, // 關閉tab的Service
    public router: Router, // 路由
    private message: NzMessageService, // 訊息
    public hd100ListService: Hd100ListService // hd100ListService
  ) {
    // 接收後端回傳質料
    // this.welfareStatus =
    // this.longTermCareNeeds =
    // this.mealNeeds =
    // this.medicalNeeds =
    // this.economicNeeds =
    // this.assistiveDeviceNeeds =
    // this.environmentalNeeds =
    // this.socialMealNeeds =
    // this.selfProtectionNeeds =
    // this.assessmentNeeds =
    // this.otherCareNeeds =

    const welfareStatusGroup = this.createCheckboxGroup(this.welfareStatus);
    const longTermCareNeedsGroup = this.createCheckboxGroup(
      this.longTermCareNeeds
    );
    const mealNeedsGroup = this.createCheckboxGroup(this.mealNeeds);
    const medicalNeedsGroup = this.createCheckboxGroup(this.medicalNeeds);
    const economicNeedsGroup = this.createCheckboxGroup(this.economicNeeds);
    economicNeedsGroup['economicNeeds_other'] = new FormControl('');
    const assistiveDeviceNeedsGroup = this.createCheckboxGroup(
      this.assistiveDeviceNeeds
    );
    const environmentalNeedsGroup = this.createCheckboxGroup(
      this.environmentalNeeds
    );
    const socialMealNeedsGroup = this.createCheckboxGroup(this.socialMealNeeds);
    socialMealNeedsGroup['socialMealNeeds_other'] = new FormControl('');
    const selfProtectionNeedsGroup = this.createCheckboxGroup(
      this.selfProtectionNeeds
    );
    selfProtectionNeedsGroup['selfProtectionNeeds_other'] = new FormControl('');
    const assessmentNeedsGroup = this.createCheckboxGroup(this.assessmentNeeds);
    const otherCareNeedsGroup = this.createCheckboxGroup(this.otherCareNeeds);

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.訪視概況
      // 個案姓名
      caseName: new FormControl(''),
      // 訪視日期
      visitDate: new FormControl('', [DateValidators.dateValidator]),
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
      welfareStatus: new FormGroup(welfareStatusGroup),
      // 長照需求
      longTermCareNeeds: new FormGroup(longTermCareNeedsGroup),
      // 餐食需求
      mealNeeds: new FormGroup(mealNeedsGroup),
      // 醫療需求
      medicalNeeds: new FormGroup(medicalNeedsGroup),
      // 經濟需求
      economicNeeds: new FormGroup(economicNeedsGroup),
      // 輔具需求
      assistiveDeviceNeeds: new FormGroup(assistiveDeviceNeedsGroup),
      // 環境需求
      environmentalNeeds: new FormGroup(environmentalNeedsGroup),
      // 社會餐與
      socialMealNeeds: new FormGroup(socialMealNeedsGroup),
      // 自我保護需求
      selfProtectionNeeds: new FormGroup(selfProtectionNeedsGroup),
      // 鑑定需求
      assessmentNeeds: new FormGroup(assessmentNeedsGroup),
      // 其他照顧需求
      otherCareNeeds: new FormGroup(otherCareNeedsGroup),

      // 3.處遇內容
      // 處遇目標
      treatmentGoals: new FormControl('', [Validators.required]),
      // 處遇計畫/服務安排
      serviceArrangement: new FormControl('', [Validators.required]),

      // 5.主管簽核
      // 單位主管意見
      supervisorComments: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd100ListService.isView) {
      this.form.disable();
    }
    // 禁用個案姓名
    this.form.get('caseName')?.disable();
    // 禁用經濟需求其他
    this.form.get('economicNeeds.economicNeeds_other')?.disable();
    // 禁用社會餐與其他
    this.form.get('socialMealNeeds.socialMealNeeds_other')?.disable();
    // 禁用自我保護需求其他
    this.form.get('selfProtectionNeeds.selfProtectionNeeds_other')?.disable();

    // 複選框初始化
    const welfareStatusCheckedValues = this.welfareStatus
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.welfareStatusChange(welfareStatusCheckedValues);

    const mealNeedsCheckedValues = this.mealNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.mealNeedsChange(mealNeedsCheckedValues);

    const medicalNeedsCheckedValues = this.medicalNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.medicalNeedsChange(medicalNeedsCheckedValues);

    const economicNeedsCheckedValues = this.economicNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.economicNeedsChange(economicNeedsCheckedValues);

    const assistiveDeviceNeedsCheckedValues = this.assistiveDeviceNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.assistiveDeviceNeedsChange(assistiveDeviceNeedsCheckedValues);

    const environmentalNeedsCheckedValues = this.environmentalNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.environmentalNeedsChange(environmentalNeedsCheckedValues);

    const socialMealNeedsCheckedValues = this.socialMealNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.socialMealNeedsChange(socialMealNeedsCheckedValues);

    const selfProtectionNeedsCheckedValues = this.selfProtectionNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.selfProtectionNeedsChange(selfProtectionNeedsCheckedValues);

    const assessmentNeedsCheckedValues = this.assessmentNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.assessmentNeedsChange(assessmentNeedsCheckedValues);

    const otherCareNeedsCheckedValues = this.otherCareNeeds
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.otherCareNeedsChange(otherCareNeedsCheckedValues);
  }

  // 福利身分別選項改變
  welfareStatusChange(checkedValues: string[]) {
    this.welfareStatus.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 長照需求選項改變
  longTermCareNeedsChange(checkedValues: string[]) {
    this.longTermCareNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 餐食需求選項改變
  mealNeedsChange(checkedValues: string[]) {
    this.mealNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 醫療需求選項改變
  medicalNeedsChange(checkedValues: string[]) {
    this.medicalNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 輔具需求選項改變
  assistiveDeviceNeedsChange(checkedValues: string[]) {
    this.assistiveDeviceNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 環境需求選項改變
  environmentalNeedsChange(checkedValues: string[]) {
    this.environmentalNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 社會參與選項改變
  socialMealNeedsChange(checkedValues: string[]) {
    this.socialMealNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '03') {
        if (option.checked) {
          this.form.get('socialMealNeeds.socialMealNeeds_other')?.enable();
        } else {
          this.form.get('socialMealNeeds.socialMealNeeds_other')?.disable();
          this.form.get('socialMealNeeds.socialMealNeeds_other')?.reset();
        }
      }
    });
  }

  // 自我保護需求選項改變
  selfProtectionNeedsChange(checkedValues: string[]) {
    this.selfProtectionNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '04') {
        if (option.checked) {
          this.form
            .get('selfProtectionNeeds.selfProtectionNeeds_other')
            ?.enable();
        } else {
          this.form
            .get('selfProtectionNeeds.selfProtectionNeeds_other')
            ?.disable();
          this.form
            .get('selfProtectionNeeds.selfProtectionNeeds_other')
            ?.reset();
        }
      }
    });
  }

  // 鑑定需求選項改變
  assessmentNeedsChange(checkedValues: string[]) {
    this.assessmentNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 其他照顧需求選項改變
  otherCareNeedsChange(checkedValues: string[]) {
    this.otherCareNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 經濟需求選項改變
  economicNeedsChange(checkedValues: string[]) {
    this.economicNeeds.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '07') {
        if (option.checked) {
          this.form.get('economicNeeds.economicNeeds_other')?.enable();
        } else {
          this.form.get('economicNeeds.economicNeeds_other')?.disable();
          this.form.get('economicNeeds.economicNeeds_other')?.reset();
        }
      }
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

  // 暫存草稿
  save() {
    this.message.create('success', '草稿暫存成功');
  }

  // 點選上一頁後執行操作判斷
  async onPreviousPage() {
    await this.router.navigate(['/hd120/create']);
    this.closeTab();
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab();
  }

  // 關閉個案初評表
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }
}
