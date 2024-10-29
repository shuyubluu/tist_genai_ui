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
import { CheckboxGroup } from '../service/hd140-form.interface';
import { Hd100ListService } from '../../../hd100/list/service/hd100-list.service';

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
  // 是否代入上次最新處遇目標
  isImportLastTreatmentGoal: boolean = false;
  // 是否代入上次最新處遇計畫/服務安排
  isImportLastTreatmentPlan: boolean = false;

  // 訪視方式select選項
  selectOptions_visitMethod: string[] = ['面訪', '電訪', '視訊'];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 最新風險等級select選項
  selectOptions_latestRiskLevel: string[] = ['低風險', '中風險', '高風險'];
  // 訪視結果select選項
  selectOptions_visitOutcome: string[] = ['持續服務', '暫停', '結案'];

  // // 福利身分別勾選狀態
  // welfareStatusLast: CheckboxGroup[] = [
  //   {
  //     label: ' 身障證明申請',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '低收、中低收申請',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '中低收老人津貼申請',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 長照需求勾選狀態
  // longTermCareNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: ' 居家服務',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '日間照顧',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '機構安置',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '喘息服務',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '照顧指導',
  //     value: '04',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '家庭託管',
  //     value: '05',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 餐食需求勾選狀態
  // mealNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: ' 長照送餐',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '非長照送餐',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '營養評估',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '代餐物資',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 醫療需求勾選狀態
  // medicalNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: ' 了解醫囑',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '陪同門診、門診手術',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '居家護理',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '復健',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '衛教宣傳',
  //     value: '04',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '用藥安全指導',
  //     value: '05',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 經濟需求勾選狀態
  // economicNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '住院看護費用',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '急難救助金申請',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '醫療補助費用',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '機構緊急安置費用',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '長照服務費用缺口(交通費等居服費用超出、空窗期費用等)',
  //     value: '04',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '送物資生活用品提供',
  //     value: '05',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '房租費用',
  //     value: '06',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '其他',
  //     value: '07',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 輔具提供相關勾選狀態
  // assistiveDeviceNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '輔具申請',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '輔具租借',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '輔具修理',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 環境需求相關勾選狀態
  // environmentalNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '無障礙環境改善',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '居家修繕',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '居家環境清潔',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 社會參與相關勾選狀態
  // socialMealNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '媒合據點活動',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '志工關懷訪視服務',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '參與敬老旅遊或長者活動',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '其他',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 自我保護需求相關勾選狀態
  // selfProtectionNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '自殺通報',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '家暴通報',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '性侵通報',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '緊急救援守護連線',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '其他',
  //     value: '04',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 鑑定需求相關勾選狀態
  // assessmentNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '身障鑑定',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '失智症鑑定',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '重大傷病申請',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '憂鬱/躁鬱鑑定',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '監護鑑定',
  //     value: '04',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

  // // 其他照顧需求相關勾選狀態
  // otherCareNeedsLast: CheckboxGroup[] = [
  //   {
  //     label: '交通需求',
  //     value: '00',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '心理諮商需求',
  //     value: '01',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '善終預備',
  //     value: '02',
  //     checked: false,
  //     disabled: false,
  //   },
  //   {
  //     label: '法律需求',
  //     value: '03',
  //     checked: false,
  //     disabled: false,
  //   },
  // ];

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

  // 本次服務內容勾選狀態
  currentServiceContent: CheckboxGroup[] = [
    {
      label: '身障證明申請',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '居家服務',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '媒合據點活動',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public hd140ListService: Hd140ListService, // hd140ListService
    private hd100ListService: Hd100ListService // hd100ListService
  ) {
    // 本次接收後端回傳質料
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
    // currentServiceContent

    // const welfareStatusLastGroup = this.createCheckboxGroup(
    //   this.welfareStatusLast
    // );
    // const longTermCareNeedsLastGroup = this.createCheckboxGroup(
    //   this.longTermCareNeedsLast
    // );
    // const mealNeedsLastGroup = this.createCheckboxGroup(this.mealNeedsLast);
    // const medicalNeedsLastGroup = this.createCheckboxGroup(
    //   this.medicalNeedsLast
    // );
    // const economicNeedsLastGroup = this.createCheckboxGroup(
    //   this.economicNeedsLast
    // );
    // economicNeedsLastGroup['economicNeeds_other'] = new FormControl('');
    // const assistiveDeviceNeedsLastGroup = this.createCheckboxGroup(
    //   this.assistiveDeviceNeedsLast
    // );
    // const environmentalNeedsLastGroup = this.createCheckboxGroup(
    //   this.environmentalNeedsLast
    // );
    // const socialMealNeedsLastGroup = this.createCheckboxGroup(
    //   this.socialMealNeedsLast
    // );
    // socialMealNeedsLastGroup['socialMealNeeds_other'] = new FormControl('');
    // const selfProtectionNeedsLastGroup = this.createCheckboxGroup(
    //   this.selfProtectionNeedsLast
    // );
    // selfProtectionNeedsLastGroup['selfProtectionNeeds_other'] = new FormControl(
    //   ''
    // );
    // const assessmentNeedsLastGroup = this.createCheckboxGroup(
    //   this.assessmentNeedsLast
    // );
    // const otherCareNeedsLastGroup = this.createCheckboxGroup(
    //   this.otherCareNeedsLast
    // );

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

    const currentServiceContentGroup = this.createCheckboxGroup(
      this.currentServiceContent
    );

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

      // 2.上次評估需求項目
      // // 福利身分別
      // welfareStatusLast: new FormGroup(welfareStatusLastGroup),
      // // 長照需求
      // longTermCareNeedsLast: new FormGroup(longTermCareNeedsLastGroup),
      // // 餐食需求
      // mealNeedsLast: new FormGroup(mealNeedsLastGroup),
      // // 醫療需求
      // medicalNeedsLast: new FormGroup(medicalNeedsLastGroup),
      // // 經濟需求
      // economicNeedsLast: new FormGroup(economicNeedsLastGroup),
      // // 輔具需求
      // assistiveDeviceNeedsLast: new FormGroup(assistiveDeviceNeedsLastGroup),
      // // 環境需求
      // environmentalNeedsLast: new FormGroup(environmentalNeedsLastGroup),
      // // 社會餐與
      // socialMealNeedsLast: new FormGroup(socialMealNeedsLastGroup),
      // // 自我保護需求
      // selfProtectionNeedsLast: new FormGroup(selfProtectionNeedsLastGroup),
      // // 鑑定需求
      // assessmentNeedsLast: new FormGroup(assessmentNeedsLastGroup),
      // // 其他照顧需求
      // otherCareNeedsLast: new FormGroup(otherCareNeedsLastGroup),

      // 3.本次評估需求項目
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

      // 4.本次服務內容
      currentServiceContent: new FormGroup(currentServiceContentGroup),

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
    // 禁用前次評估需求項目
    this.form.get('welfareStatusLast')?.disable();
    this.form.get('longTermCareNeedsLast')?.disable();
    this.form.get('mealNeedsLast')?.disable();
    this.form.get('medicalNeedsLast')?.disable();
    this.form.get('economicNeedsLast')?.disable();
    this.form.get('assistiveDeviceNeedsLast')?.disable();
    this.form.get('environmentalNeedsLast')?.disable();
    this.form.get('socialMealNeedsLast')?.disable();
    this.form.get('selfProtectionNeedsLast')?.disable();
    this.form.get('assessmentNeedsLast')?.disable();
    this.form.get('otherCareNeedsLast')?.disable();
    // 禁用經濟需求其他
    this.form.get('economicNeedsLast.economicNeeds_other')?.disable();
    // 禁用社會餐與其他
    this.form.get('socialMealNeedsLast.socialMealNeeds_other')?.disable();
    // 禁用自我保護需求其他
    this.form.get('socialMealNeedsLast.selfProtectionNeeds_other')?.disable();
    // 禁用經濟需求其他
    this.form.get('economicNeeds.economicNeeds.economicNeeds_other')?.disable();
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

  // 是否連結其他資源選項改變
  handleSelectChange_linkedToOtherResources(option: string) {
    if (option === '是') {
      this.message.create(
        'warning',
        '請回1-2個案開案資料表更新資源福利使用內容'
      );
    }
  }

  // // 福利身分別選項改變
  // welfareStatusLastChange(checkedValues: string[]) {
  //   this.welfareStatusLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 長照需求選項改變
  // longTermCareNeedsLastChange(checkedValues: string[]) {
  //   this.longTermCareNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 餐食需求選項改變
  // mealNeedsLastChange(checkedValues: string[]) {
  //   this.mealNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 醫療需求選項改變
  // medicalNeedsLastChange(checkedValues: string[]) {
  //   this.medicalNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 輔具需求選項改變
  // assistiveDeviceNeedsLastChange(checkedValues: string[]) {
  //   this.assistiveDeviceNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 環境需求選項改變
  // environmentalNeedsLastChange(checkedValues: string[]) {
  //   this.environmentalNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 社會參與選項改變
  // socialMealNeedsLastChange(checkedValues: string[]) {
  //   this.socialMealNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //     if (option.value === '03') {
  //       if (option.checked) {
  //         this.form.get('socialMealNeedsLast.socialMealNeeds_other')?.enable();
  //       } else {
  //         this.form.get('socialMealNeedsLast.socialMealNeeds_other')?.disable();
  //         this.form.get('socialMealNeedsLast.socialMealNeeds_other')?.reset();
  //       }
  //     }
  //   });
  // }

  // // 自我保護需求選項改變
  // selfProtectionNeedsLastChange(checkedValues: string[]) {
  //   this.selfProtectionNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //     if (option.value === '04') {
  //       if (option.checked) {
  //         this.form
  //           .get('selfProtectionNeedsLast.selfProtectionNeeds_other')
  //           ?.enable();
  //       } else {
  //         this.form
  //           .get('selfProtectionNeedsLast.selfProtectionNeeds_other')
  //           ?.disable();
  //         this.form
  //           .get('selfProtectionNeedsLast.selfProtectionNeeds_other')
  //           ?.reset();
  //       }
  //     }
  //   });
  // }

  // // 鑑定需求選項改變
  // assessmentNeedsLastChange(checkedValues: string[]) {
  //   this.assessmentNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 其他照顧需求選項改變
  // otherCareNeedsLastChange(checkedValues: string[]) {
  //   this.otherCareNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //   });
  // }

  // // 經濟需求選項改變
  // economicNeedsLastChange(checkedValues: string[]) {
  //   this.economicNeedsLast.forEach((option) => {
  //     option.checked = checkedValues.includes(option.value);
  //     if (option.value === '07') {
  //       if (option.checked) {
  //         this.form.get('economicNeedsLastLast.economicNeeds_other')?.enable();
  //       } else {
  //         this.form.get('economicNeedsLastLast.economicNeeds_other')?.disable();
  //         this.form.get('economicNeedsLastLast.economicNeeds_other')?.reset();
  //       }
  //     }
  //   });
  // }

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

  // 本次服務內容選項改變
  currentServiceContentChange(checkedValues: string[]) {
    this.currentServiceContent.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 暫存草稿
  save() {
    this.message.create('success', '儲存成功');
    if (this.form.get('visitOutcome')?.value === '結案') {
      this.router.navigate([
        '/hd100' + this.hd100ListService.isCreate ? '/create' : '/edit',
      ]);
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

  // 代入上次最新處遇目標
  importLastTreatmentGoal() {
    this.isImportLastTreatmentGoal = true;
    // !TODO:代入邏輯
  }

  // 取消代入上次最新處遇目標
  cancelImportLastTreatmentGoal() {
    this.isImportLastTreatmentGoal = false;
    // !TODO:取消代入邏輯
  }

  // 代入上次最新處遇計畫/服務安排
  importLastTreatmentPlan() {
    this.isImportLastTreatmentPlan = true;
    // !TODO:代入邏輯
  }

  // 取消代入上次最新處遇計畫/服務安排
  cancelImportLastTreatmentPlan() {
    this.isImportLastTreatmentPlan = false;
    // !TODO:取消代入邏輯
  }
}
