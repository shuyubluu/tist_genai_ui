import { DiagramService } from './../../../../../assets/diagram/service/diagram';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { TaiwanCitySelectComponent } from '../../../../common/components/select/taiwanCitySelect/components/taiwan-city-select.component';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Hd100ListService } from '../../../hd100/list/service/hd100-list.service';
import { DateValidators } from '../../../../common/validator/date-validator';
import { CheckboxGroup } from '../service/hd120-form.interface';
import { checkboxGroupValidator } from '../../../../common/validator/checkbox-group-validator';

@Component({
  selector: 'app-hd120-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    ErrorMessageComponent,
    TaiwanCitySelectComponent,
    NzModalModule,
    CaseInformationComponent,
  ],
  templateUrl: './hd120-form.component.html',
  styleUrl: './hd120-form.component.scss',
})
export class Hd120FormComponent implements OnInit {
  // 個案開案評估表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 就醫狀態modal是否顯示
  isVisible_medicalStatus: boolean = false;
  // 義肢的附加選項是否已擇一
  isChoiceProsthesis: boolean = false;
  // 緊急聯絡人modal是否顯示
  isVisible_emergencyContact: boolean = false;
  // 是否同通訊地址
  isSameAsMailingAddress: boolean = false;
  // 個案服務狀態select選項
  selectOptions_caseServiceStatus: string[] = ['持續服務', '暫停服務', '結案'];
  // 個案分級select選項
  selectOptions_caseLevel: string[] = ['低風險', '中風險', '高風險'];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 性別select選項
  selectOptions_gender: string[] = ['男', '女'];
  // 教育程度select選項
  selectOptions_educationLevel: string[] = [
    '不識字',
    '識字，但未就學',
    '國小',
    '國中',
    '高中',
    '大專',
    '研究所以上',
  ];
  // 婚姻狀況select選項
  selectOptions_maritalStatus: string[] = [
    '未婚',
    '已婚',
    '離婚',
    '喪偶',
    '分居',
    '同居',
    '不詳',
    '其他',
  ];
  // 福利身分select選項
  selectOptions_welfareStatus: string[] = [
    '一般戶',
    '低收入戶',
    '中低收入戶',
    '邊緣戶',
  ];
  // 身障證明障礙類別select選項
  selectOptions_disabilityCertificateCategory: string[] = [
    '無',
    '第一類',
    '第二類',
    '第三類',
    '第四類',
    '第五類',
    '第六類',
    '第七類',
    '第八類',
  ];
  // 障礙等級select選項
  selectOptions_disabilityLevel: string[] = [
    '輕度',
    '中度度',
    '重度',
    '極重度',
  ];
  // 社會福利補助select選項
  selectOptions_socialWelfareSubsidy: string[] = [
    '老農津貼',
    '身障津貼',
    '中低收入補助',
    '低收入戶補助',
    '中低收入老人生活津貼',
    '老人津貼',
    '榮民津貼',
  ];
  // 住屋種類select選項
  selectOptions_housingType: string[] = [
    '平房',
    '透天厝',
    '集合式住宅',
    '社會住宅',
  ];
  // 住屋所有權select選項
  selectOptions_housingOwnership: string[] = [
    '個案自有',
    '家人自有',
    '租賃',
    '借住',
  ];
  // 有無+尚未確認select選項
  selectOptions_includeHasNotConfirmed: string[] = ['有', '無', '尚未確認'];
  // 服務團隊select選項
  selectOptions_serviceTeam: string[] = [
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
  // 家系圖模擬匯入檔案
  familyTree_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '家系圖1.png',
      status: 'done',
    },
  ];
  // 生態圖模擬匯入檔案
  ecologicalMap_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '生態圖1.png',
      status: 'done',
    },
  ];

  // 定義福利使用狀況控件名稱
  welfareUsageOverviewControlsToInitialize: string[] = [
    'mealDeliveryService_unitName',
    'mealDeliveryService_serviceResponsiblePerson',
    'mealDeliveryService_contactPhone',
    'daytimeCare_unitName',
    'daytimeCare_serviceResponsiblePerson',
    'daytimeCare_contactPhone',
    'homeCareService_unitName',
    'homeCareService_serviceResponsiblePerson',
    'homeCareService_contactPhone',
    'unitAService_unitName',
    'unitAService_serviceResponsiblePerson',
    'unitAService_contactPhone',
    'otherUnitService_unitName',
    'otherUnitService_serviceResponsiblePerson',
    'otherUnitService_contactPhone',
    'transportationService_unitName',
    'transportationService_serviceResponsiblePerson',
    'transportationService_contactPhone',
    'communityCenter_unitName',
    'communityCenter_serviceResponsiblePerson',
    'communityCenter_contactPhone',
    'emergencyRescueSystem_unitName',
    'emergencyRescueSystem_serviceResponsiblePerson',
    'emergencyRescueSystem_contactPhone',
    'welfareUsageOverview_other',
    'welfareUsageOverview_other_unitName',
    'welfareUsageOverview_other_serviceResponsiblePerson',
    'welfareUsageOverview_other_contactPhone',
  ];

  // 宗教信仰勾選狀態
  religiousAffiliation: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '道教',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '佛教',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '基督教',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '天主教',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '一貫道',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '回教',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '民間信仰',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '08',
      checked: false,
      disabled: false,
    },
  ];

  // 習慣用語勾選狀態
  commonLanguage: CheckboxGroup[] = [
    {
      label: '國語',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '台語',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '日語',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '客家話',
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

  // 飲食習慣勾選狀態
  eatingHabits: CheckboxGroup[] = [
    {
      label: '葷',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '全素',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '蛋奶素',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '鍋邊素',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '初一十五素',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 現有疾病狀態勾選狀態
  currentHealthConditions: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '中風',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '高血壓',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '心臟病',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '糖尿病',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '腎臟疾病',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '骨骼系統(關節炎、骨折)',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '巴金森氏症',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '失智症',
      value: '08',
      checked: false,
      disabled: false,
    },
    {
      label: '癌症',
      value: '09',
      checked: false,
      disabled: false,
    },
    {
      label: '眼部疾病',
      value: '10',
      checked: false,
      disabled: false,
    },
    {
      label: '精神疾病',
      value: '11',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '12',
      checked: false,
      disabled: false,
    },
  ];

  // 輔具使用勾選狀態
  assistiveDeviceUsage: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '單手拐杖',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '助行器',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '腋下拐杖',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '輪椅',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '氣墊床',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '助聽器',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '便盆椅',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '假牙',
      value: '08',
      checked: false,
      disabled: false,
    },
    {
      label: '義肢',
      value: '09',
      checked: false,
      disabled: false,
    },
    {
      label: '上肢',
      value: '10',
      checked: false,
      disabled: true,
    },
    {
      label: '下肢',
      value: '11',
      checked: false,
      disabled: true,
    },
    {
      label: '其他',
      value: '12',
      checked: false,
      disabled: false,
    },
  ];

  // 社會福利補助勾選狀態
  socialWelfareSubsidy: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: true,
    },
    {
      label: '身心障礙',
      value: '01',
      checked: false,
      disabled: true,
    },
    {
      label: '原住民',
      value: '02',
      checked: false,
      disabled: true,
    },
    {
      label: '新住民',
      value: '03',
      checked: false,
      disabled: true,
    },
    {
      label: '榮民',
      value: '04',
      checked: false,
      disabled: true,
    },
    {
      label: '榮眷',
      value: '05',
      checked: false,
      disabled: true,
    },
  ];

  // 長期每月經濟來源勾選狀態
  longTermMonthlyIncomeSource: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '社會福利補助 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '子女供應',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '退休俸',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '自己工作收入',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '配偶工作收入',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '自己或配偶積蓄',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '老年年金',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '民間單位補助',
      value: '08',
      checked: false,
      disabled: false,
    },
    {
      label: '其他收入',
      value: '09',
      checked: false,
      disabled: false,
    },
  ];

  // 特殊議題勾選狀態
  specialIssues: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '全時獨居 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '白天獨居',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '老老照顧',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '雙重老化',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '失智(確診個案)',
      value: '05',
      checked: false,
      disabled: true,
    },
    {
      label: '身心障礙',
      value: '06',
      checked: false,
      disabled: true,
    },
  ];

  // 是否使用弘道其他服務勾選狀態
  usingOtherHongDaoServices: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '獨老專案 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '送餐服務',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '日間照顧',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '居家服務',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: 'A單位服務',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '其他長照服務',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '區據點(含C、失智據點、好客廳等)',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '08',
      checked: false,
      disabled: false,
    },
  ];

  // 福利使用概況勾選狀態
  welfareUsageOverview: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '送餐服務 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '日間照顧',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '居家服務',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: 'A單位服務',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '其他長照服務',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '交通服務',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '社區據點',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '緊急救援系統',
      value: '08',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '09',
      checked: false,
      disabled: false,
    },
  ];

  // 住屋概況勾選狀態
  housingCondition: CheckboxGroup[] = [
    {
      label: '電梯',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '管理員 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '套房',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '雅房',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '違建',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 居住環境勾選狀態
  livingEnvironment: CheckboxGroup[] = [
    {
      label: '乾淨整齊',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '尚算乾淨 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '髒亂',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '有異味',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '堆放許多雜物',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 同住者勾選狀態
  cohabitants: CheckboxGroup[] = [
    {
      label: '無',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '配偶 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '未婚子女',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '已婚子女',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '孫子女',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '兄弟姊妹',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '朋友',
      value: '06',
      checked: false,
      disabled: false,
    },
    {
      label: '同居人',
      value: '07',
      checked: false,
      disabled: false,
    },
    {
      label: '台籍看護',
      value: '08',
      checked: false,
      disabled: false,
    },
    {
      label: '外籍看護',
      value: '09',
      checked: false,
      disabled: false,
    },
    {
      label: '其他',
      value: '10',
      checked: false,
      disabled: false,
    },
  ];

  // 服務志工勾選狀態
  serviceVolunteer: CheckboxGroup[] = [
    {
      label: '志工1',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '志工2 ',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '志工3',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  // 個案開案資料表單
  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public diagramService: DiagramService, // diagramService
    public hd100ListService: Hd100ListService // hd100ListService
  ) {
    // 串接複選框的狀態
    // this.religiousAffiliation =
    // this.commonLanguage =
    // this.eatingHabits =
    // this.currentHealthConditions =
    // this.assistiveDeviceUsage =
    // this.socialWelfareSubsidy =
    // this.longTermMonthlyIncomeSource =
    // this.specialIssues =
    // this.usingOtherHongDaoServices =
    // this.welfareUsageOverview =
    // this.housingCondition =
    // this.livingEnvironment =
    // this.cohabitants =
    // this.serviceVolunteer =

    // 宗教信仰CheckboxGroup
    const religiousAffiliationGroup = this.createCheckboxGroup(
      this.religiousAffiliation
    );
    religiousAffiliationGroup['religiousAffiliation_other'] = new FormControl(
      '',
      [Validators.required]
    );

    // 習慣用語CheckboxGroup
    const commonLanguageGroup = this.createCheckboxGroup(this.commonLanguage);
    commonLanguageGroup['commonLanguage_other'] = new FormControl('', [
      Validators.required,
    ]);

    // 飲食習慣CheckboxGroup
    const eatingHabitsGroup = this.createCheckboxGroup(this.eatingHabits);

    // 現有疾病狀態CheckboxGroup
    const currentHealthConditionsGroup = this.createCheckboxGroup(
      this.currentHealthConditions
    );

    // 輔具使用CheckboxGroup
    const assistiveDeviceUsageGroup = this.createCheckboxGroup(
      this.assistiveDeviceUsage
    );
    assistiveDeviceUsageGroup['assistiveDeviceUsage_other'] = new FormControl(
      '',
      [Validators.required]
    );

    // 社會福利補助CheckboxGroup
    const socialWelfareSubsidyGroup = this.createCheckboxGroup(
      this.socialWelfareSubsidy
    );

    // 長期每月經濟來源CheckboxGroup
    const longTermMonthlyIncomeSourceGroup = this.createCheckboxGroup(
      this.longTermMonthlyIncomeSource
    );
    longTermMonthlyIncomeSourceGroup['socialWelfareAssistance_select'] =
      new FormControl('', [Validators.required]);
    longTermMonthlyIncomeSourceGroup['socialWelfareAssistance_input'] =
      new FormControl('');
    longTermMonthlyIncomeSourceGroup['childrenSupport'] = new FormControl('');
    longTermMonthlyIncomeSourceGroup['retirementPension'] = new FormControl('');
    longTermMonthlyIncomeSourceGroup['ownEmploymentIncome'] = new FormControl(
      ''
    );
    longTermMonthlyIncomeSourceGroup['spouseEmploymentIncome'] =
      new FormControl('');
    longTermMonthlyIncomeSourceGroup['personalOrSpouseSavings'] =
      new FormControl('');
    longTermMonthlyIncomeSourceGroup['seniorPension'] = new FormControl('');
    longTermMonthlyIncomeSourceGroup['privateSectorSubsidy'] = new FormControl(
      ''
    );
    longTermMonthlyIncomeSourceGroup['otherIncome_text'] = new FormControl('', [
      Validators.required,
    ]);
    longTermMonthlyIncomeSourceGroup['otherIncome_input'] = new FormControl('');

    // 特殊議題CheckboxGroup
    const specialIssuesGroup = this.createCheckboxGroup(this.specialIssues);

    // 是否使用其他服務CheckboxGroup
    const usingOtherHongDaoServicesGroup = this.createCheckboxGroup(
      this.usingOtherHongDaoServices
    );
    usingOtherHongDaoServicesGroup['usingOtherHongDaoServices_other'] =
      new FormControl('', [Validators.required]);

    // 福利使用概況CheckboxGroup
    const welfareUsageOverviewGroup = this.createCheckboxGroup(
      this.welfareUsageOverview
    );

    // 初始化每個福利使用概況控件
    this.welfareUsageOverviewControlsToInitialize.forEach((control) => {
      welfareUsageOverviewGroup[control] = new FormControl('');
    });

    // 住屋概況CheckboxGroup
    const housingConditionGroup = this.createCheckboxGroup(
      this.housingCondition
    );

    // 居住環境CheckboxGroup
    const livingEnvironmentGroup = this.createCheckboxGroup(
      this.livingEnvironment
    );

    // 同住者CheckboxGroup
    const cohabitantsGroup = this.createCheckboxGroup(this.cohabitants);
    cohabitantsGroup['cohabitants_other'] = new FormControl('', [
      Validators.required,
    ]);

    // 服務志工CheckboxGroup
    const serviceVolunteerGroup = this.createCheckboxGroup(
      this.serviceVolunteer
    );

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.個案狀態
      // 個案服務狀態
      caseServiceStatus: new FormControl('持續服務'),
      // 個案分級
      caseLevel: new FormControl(''),
      // 開案日期
      caseStartDate: new FormControl('', [DateValidators.dateValidator]),
      // 結案日期
      caseEndDate: new FormControl(''),
      // 結案原因
      caseClosureReason: new FormControl(''),
      // 是否轉介
      isReferred: new FormControl(''),

      // 2.基本資料
      // 個案來源
      caseSource: new FormControl(''),
      // 姓名
      name: new FormControl(''),
      // 性別
      gender: new FormControl(''),
      // 生日
      dateOfBirth: new FormControl(''),
      // 身份證字號
      idNumber: new FormControl(''),
      // 手機_前四碼
      mobileNumber_firstFourDigits: new FormControl(''),
      // 手機_後六碼
      mobileNumber_lastSixDigits: new FormControl(''),
      // 電話_區碼
      phoneNumber_areaCode: new FormControl(''),
      // 電話_電話號碼
      phoneNumber_phoneNumber: new FormControl(''),
      // 通訊地址下拉式選單
      communicationAddress_select: new FormControl(''),
      // 通訊地址
      communicationAddress: new FormControl(''),
      // 通訊地址下拉式選單
      registeredAddress_select: new FormControl(),
      // 戶籍地址
      registeredAddress: new FormControl(''),
      // 同通訊地址
      registeredAddress_sameAsMailingAddress: new FormControl(false),
      // map定位座標
      mapCoordinates: new FormControl(''),
      // 教育程度
      educationLevel: new FormControl('', [Validators.required]),
      // 婚姻狀況
      maritalStatus: new FormControl('', [Validators.required]),
      // 婚姻狀況其他
      maritalStatus_other: new FormControl('', [Validators.required]),
      // 宗教信仰
      religiousAffiliation: new FormGroup(religiousAffiliationGroup, [
        checkboxGroupValidator(),
      ]),
      // 習慣用語
      commonLanguage: new FormGroup(commonLanguageGroup, [
        checkboxGroupValidator(),
      ]),
      // 飲食習慣
      eatingHabits: new FormGroup(eatingHabitsGroup),
      // 現有疾病狀況
      currentHealthConditions: new FormGroup(currentHealthConditionsGroup, [
        checkboxGroupValidator(),
      ]),

      // 就醫狀態
      medicalStatus: new FormArray([]),
      // 就醫狀態_就醫醫別
      medicalStatus_medicalCategory: new FormControl(''),
      // 就醫狀態_科別
      medicalStatus_department: new FormControl(''),
      // 就醫狀態_頻率
      medicalStatus_frequency: new FormControl(''),

      // 輔具使用
      assistiveDeviceUsage: new FormGroup(assistiveDeviceUsageGroup),

      // 3.福利狀況
      // 福利身份
      welfareStatus: new FormControl(''),
      // 社會福利補助
      socialWelfareSubsidy: new FormGroup(socialWelfareSubsidyGroup),
      // 身障證明障礙類別
      disabilityCertificateCategory: new FormControl(''),
      // 障礙等級
      disabilityLevel: new FormControl(''),

      // 4.經濟來源
      // 長期每月經濟來源
      longTermMonthlyIncomeSource: new FormGroup(
        longTermMonthlyIncomeSourceGroup,
        [checkboxGroupValidator()]
      ),

      // Fix:驗證可能需調整
      // 5.特殊議題
      // 特殊議題
      specialIssues: new FormGroup(specialIssuesGroup),
      // 6.福利使用
      // 是否使用弘道其他服務
      usingOtherHongDaoServices: new FormGroup(usingOtherHongDaoServicesGroup, [
        checkboxGroupValidator(),
      ]),
      // 福利使用概況
      welfareUsageOverview: new FormGroup(welfareUsageOverviewGroup, [
        checkboxGroupValidator(),
      ]),

      // 6.居住環境
      // 住屋種類
      housingType: new FormControl('', [Validators.required]),
      // 住屋概況
      housingCondition: new FormGroup(housingConditionGroup),
      // 住屋所有權
      housingOwnership: new FormControl('', [Validators.required]),
      // 居住環境
      livingEnvironment: new FormGroup(livingEnvironmentGroup, [
        checkboxGroupValidator(),
      ]),
      // 同住者
      cohabitants: new FormGroup(cohabitantsGroup, [checkboxGroupValidator()]),

      // 7.緊急聯絡人
      // 緊急聯絡人
      emergencyContact: new FormArray([]),
      // 緊急聯絡人_緊急聯絡人
      emergencyContact_emergencyContact: new FormControl(''),
      // 緊急聯絡人_關係
      emergencyContact_relationship: new FormControl(''),
      // 緊急聯絡人_連絡電話
      emergencyContact_phone: new FormControl(''),

      // 9.法務相關
      // 個資同意書
      personalDataConsentForm: new FormControl('', [Validators.required]),
      // 肖像權同意書
      imageRightsConsentForm: new FormControl('', [Validators.required]),

      // 10.服務人員
      // 主責人
      mainResponsiblePerson: new FormControl('', [Validators.required]),
      // 服務團隊
      serviceTeam: new FormControl(''),
      // 服務志工
      serviceVolunteer: new FormGroup(serviceVolunteerGroup, [
        checkboxGroupValidator(),
      ]),
    });
  }
  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
    // 複選框初始化
    const religiousAffiliationCheckedValues = this.religiousAffiliation
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.religiousAffiliationChange(religiousAffiliationCheckedValues);

    const currentHealthConditionsCheckedValues = this.currentHealthConditions
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.currentHealthConditionsChange(currentHealthConditionsCheckedValues);

    const assistiveDeviceUsageCheckedValues = this.assistiveDeviceUsage
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.assistiveDeviceUsageChange(assistiveDeviceUsageCheckedValues);

    const socialWelfareSubsidyCheckedValues = this.socialWelfareSubsidy
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.socialWelfareSubsidyChange(socialWelfareSubsidyCheckedValues);

    const longTermMonthlyIncomeSourceCheckedValues =
      this.longTermMonthlyIncomeSource
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.longTermMonthlyIncomeSourceChange(
      longTermMonthlyIncomeSourceCheckedValues
    );

    const specialIssuesCheckedValues = this.specialIssues
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.specialIssuesChange(specialIssuesCheckedValues);

    const usingOtherHongDaoServicesCheckedValues =
      this.usingOtherHongDaoServices
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.usingOtherHongDaoServicesChange(
      usingOtherHongDaoServicesCheckedValues
    );

    const welfareUsageOverviewCheckedValues = this.welfareUsageOverview
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.welfareUsageOverviewChange(welfareUsageOverviewCheckedValues);

    const cohabitantsCheckedValues = this.cohabitants
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.cohabitantsChange(cohabitantsCheckedValues);

    // 檢視模式下，禁用表單
    if (this.hd100ListService.isView) {
      this.form.disable();
    }
    // 禁用個案服務狀態select
    this.form.get('caseServiceStatus')?.disable();
    // 禁用個案分級select
    this.form.get('caseLevel')?.disable();
    // 禁用結案原因
    this.form.get('caseClosureReason')?.disable();
    // 禁用是否轉介select
    this.form.get('isReferred')?.disable();
    // 禁用個案來源
    this.form.get('caseSource')?.disable();
    // 禁用姓名
    this.form.get('name')?.disable();
    // 禁用性別
    this.form.get('gender')?.disable();
    // 禁用身份證字號
    this.form.get('idNumber')?.disable();
    // 禁用手機_前四碼
    this.form.get('mobileNumber_firstFourDigits')?.disable();
    // 禁用手機_後六碼
    this.form.get('mobileNumber_lastSixDigits')?.disable();
    // 禁用通訊地址select
    this.form.get('communicationAddress_select')?.disable();
    // 禁用通訊地址input
    this.form.get('communicationAddress')?.disable();
    // 禁用電話_區碼
    this.form.get('phoneNumber_areaCode')?.disable();
    // 禁用電話_電話號碼
    this.form.get('phoneNumber_phoneNumber')?.disable();
    // 禁用宗教信仰其他
    this.form.get('religiousAffiliation.religiousAffiliation_other')?.disable();
    // 禁用習慣用語其他
    this.form.get('commonLanguage.commonLanguage_other')?.disable();
    // 禁用現有疾病狀態其他
    this.form
      .get('currentHealthConditions.currentHealthConditions_other')
      ?.disable();
    // 禁用婚姻狀況其他
    this.form.get('maritalStatus_other')?.disable();
    // 禁用輔具使用其他
    this.form.get('assistiveDeviceUsage.assistiveDeviceUsage_other')?.disable();
    // 禁用福利身份select
    this.form.get('welfareStatus')?.disable();
    // 禁用身障證明障礙類別
    this.form.get('disabilityCertificateCategory')?.disable();
    // 禁用障礙等級
    this.form.get('disabilityLevel')?.disable();

    // 長期每月經濟來源
    // 禁用社會福利補助_select
    this.form
      .get('longTermMonthlyIncomeSource.socialWelfareAssistance_select')
      ?.disable();
    // 禁用社會福利補助_input
    this.form
      .get('longTermMonthlyIncomeSource.socialWelfareAssistance_input')
      ?.disable();
    // 禁用子女供應
    this.form.get('longTermMonthlyIncomeSource.childrenSupport')?.disable();
    // 禁用退休俸
    this.form.get('longTermMonthlyIncomeSource.retirementPension')?.disable();
    // 禁用自己工作收入
    this.form.get('longTermMonthlyIncomeSource.ownEmploymentIncome')?.disable();
    // 禁用配偶工作收入
    this.form
      .get('longTermMonthlyIncomeSource.spouseEmploymentIncome')
      ?.disable();
    // 禁用自己或配偶積蓄
    this.form
      .get('longTermMonthlyIncomeSource.personalOrSpouseSavings')
      ?.disable();
    // 禁用老年年金
    this.form.get('longTermMonthlyIncomeSource.seniorPension')?.disable();
    // 禁用民間單位補助
    this.form
      .get('longTermMonthlyIncomeSource.privateSectorSubsidy')
      ?.disable();
    // 禁用其他收入_文字
    this.form.get('longTermMonthlyIncomeSource.otherIncome_text')?.disable();
    // 禁用其他收入輸入框
    this.form.get('longTermMonthlyIncomeSource.otherIncome_input')?.disable();

    // 禁用是否使用弘道其他服務
    this.form
      .get('usingOtherHongDaoServices.usingOtherHongDaoServices_other')
      ?.disable();

    // 禁用所有指定的控件
    this.welfareUsageOverviewControlsToInitialize.forEach((control) => {
      this.form.get('welfareUsageOverview.' + control)?.disable();
    });

    // 禁用同住者其他
    this.form.get('cohabitants.cohabitants_other')?.disable();
  }

  // 婚姻狀況選項改變
  maritalStatusChange(option: string) {
    {
      if (option === '其他') {
        this.form.get('maritalStatus_other')?.enable();
      } else {
        this.form.get('maritalStatus_other')?.disable();
        this.form.get('maritalStatus_other')?.reset();
      }
    }
  }

  // 宗教信仰選項改變
  religiousAffiliationChange(checkedValues: string[]) {
    this.religiousAffiliation.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.religiousAffiliation.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.religiousAffiliation.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '08' && this.form) {
          if (option.checked) {
            this.form
              .get('religiousAffiliation.religiousAffiliation_other')
              ?.enable();
          } else {
            this.form
              .get('religiousAffiliation.religiousAffiliation_other')
              ?.disable();
            this.form
              .get('religiousAffiliation.religiousAffiliation_other')
              ?.reset();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.religiousAffiliation.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.religiousAffiliation.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.religiousAffiliation.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 習慣用語選項改變
  commonLanguageChange(checkedValues: string[]) {
    this.commonLanguage.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '04' && this.form) {
        if (option.checked) {
          this.form.get('commonLanguage.commonLanguage_other')?.enable();
        } else {
          this.form.get('commonLanguage.commonLanguage_other')?.reset();
          this.form.get('commonLanguage.commonLanguage_other')?.disable();
        }
      }
    });
  }

  // 飲食習慣選項改變
  eatingHabitsChange(checkedValues: string[]) {
    this.eatingHabits.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 現有疾病狀態選項改變
  currentHealthConditionsChange(checkedValues: string[]) {
    this.currentHealthConditions.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.currentHealthConditions.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.currentHealthConditions.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '12' && this.form) {
          if (option.checked) {
            this.form
              .get('currentHealthConditions.currentHealthConditions_other')
              ?.enable();
          } else {
            this.form
              .get('currentHealthConditions.currentHealthConditions_other')
              ?.disable();
            this.form
              .get('currentHealthConditions.currentHealthConditions_other')
              ?.reset();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.currentHealthConditions.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.currentHealthConditions.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.currentHealthConditions.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
      // 當 "08" 勾選時同步更新 "失智症" 的選項
      if (option.value === '08' && this.form) {
        this.form.get('specialIssues.05')?.setValue(option.checked);
      }
    });
  }

  // 顯示就醫狀態的modal
  showMedicalStatusModal(): void {
    // 清空輸入框
    this.form.get('medicalStatus_medicalCategory')?.reset();
    this.form.get('medicalStatus_department')?.reset();
    this.form.get('medicalStatus_frequency')?.reset();
    this.isVisible_medicalStatus = true;
  }

  // 刪除所選的就醫狀態
  deleteMedicalStatus(index: number): void {
    (this.form.get('medicalStatus') as FormArray).removeAt(index);
  }

  // 就醫狀態modal的確認按鈕
  handleMedicalStatusModalOk(): void {
    // 取得三個表單控制項的值
    const medicalCategory = this.form.get(
      'medicalStatus_medicalCategory'
    )?.value;
    const department = this.form.get('medicalStatus_department')?.value;
    const frequency = this.form.get('medicalStatus_frequency')?.value;
    // 判斷資料是否皆有填寫
    if (
      medicalCategory === null ||
      medicalCategory === '' ||
      department === null ||
      department === '' ||
      frequency === null ||
      frequency === ''
    ) {
      this.message.create('error', '請填寫完整資料');
      return;
    }
    // 將這些值組合成一個物件
    const medicalStatusObj = {
      medicalStatus_medicalCategory: medicalCategory,
      medicalStatus_department: department,
      medicalStatus_frequency: frequency,
    };
    // 將物件加入到 medicalStatus 的 FormArray 中
    (this.form.get('medicalStatus') as FormArray).push(
      new FormControl(medicalStatusObj)
    );

    this.message.create('success', '新增成功');
    this.isVisible_medicalStatus = false;
  }

  // 就醫狀態modal的取消按鈕
  handleMedicalStatusModalCancel(): void {
    this.isVisible_medicalStatus = false;
    this.message.create('error', '取消');
  }

  // 輔具使用選項改變
  assistiveDeviceUsageChange(checkedValues: string[]) {
    this.assistiveDeviceUsage.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.assistiveDeviceUsage.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.assistiveDeviceUsage.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        // 當 "09" 被取消勾選時的處理
        if (option.value === '09' && this.form) {
          if (option.checked) {
            this.isChoiceProsthesis = true;
            this.assistiveDeviceUsage.forEach((option) => {
              if (option.value === '10' || option.value === '11') {
                option.disabled = false;
                this.form.get(`assistiveDeviceUsage.${option.value}`)?.enable(); // 啟用對應的 FormControl
              }
            });
          } else {
            this.assistiveDeviceUsage.forEach((option) => {
              if (option.value === '10' || option.value === '11') {
                option.disabled = true;
                option.checked = false;
                this.form
                  .get(`assistiveDeviceUsage.${option.value}`)
                  ?.disable(); // 禁用對應的 FormControl
                this.form
                  .get(`assistiveDeviceUsage.${option.value}`)
                  ?.setValue(false); // 取消勾選
                this.isChoiceProsthesis = false;
              }
            });
          }
        }
        if (option.value === '10' || option.value === '11') {
          if (option.checked) {
            console.log(option);
            this.assistiveDeviceUsage.forEach((option) => {
              if (option.value === '09') {
                if (option.checked) {
                  this.isChoiceProsthesis = false;
                }
              }
            });
          }
        }
        if (option.value === '12' && this.form) {
          if (option.checked) {
            this.form
              .get('assistiveDeviceUsage.assistiveDeviceUsage_other')
              ?.enable();
          } else {
            this.form
              .get('assistiveDeviceUsage.assistiveDeviceUsage_other')
              ?.disable();
            this.form
              .get('assistiveDeviceUsage.assistiveDeviceUsage_other')
              ?.reset();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.assistiveDeviceUsage.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.assistiveDeviceUsage.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.assistiveDeviceUsage.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 社會福利補助選項改變
  socialWelfareSubsidyChange(checkedValues: string[]): void {
    this.socialWelfareSubsidy.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.socialWelfareSubsidy.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.socialWelfareSubsidy.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.socialWelfareSubsidy.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.socialWelfareSubsidy.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.socialWelfareSubsidy.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }

      // 當 "01" 勾選時同步更新 "身心障礙" 的選項
      if (option.value === '01' && this.form) {
        this.form.get('specialIssues.06')?.setValue(option.checked);
      }
    });
  }

  // 長期每月經濟來源選項改變
  longTermMonthlyIncomeSourceChange(checkedValues: string[]) {
    this.longTermMonthlyIncomeSource.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.longTermMonthlyIncomeSource.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.longTermMonthlyIncomeSource.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '01' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_select')
              ?.enable();
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_input')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_select')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_select')
              ?.reset();
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_input')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.socialWelfareAssistance_input')
              ?.reset();
          }
        }
        if (option.value === '02' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.childrenSupport')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.childrenSupport')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.childrenSupport')
              ?.reset();
          }
        }
        if (option.value === '03' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.retirementPension')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.retirementPension')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.retirementPension')
              ?.reset();
          }
        }
        if (option.value === '04' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.ownEmploymentIncome')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.ownEmploymentIncome')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.ownEmploymentIncome')
              ?.reset();
          }
        }
        if (option.value === '05' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.spouseEmploymentIncome')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.spouseEmploymentIncome')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.spouseEmploymentIncome')
              ?.reset();
          }
        }
        if (option.value === '06' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.personalOrSpouseSavings')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.personalOrSpouseSavings')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.personalOrSpouseSavings')
              ?.reset();
          }
        }
        if (option.value === '07' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.seniorPension')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.seniorPension')
              ?.disable();
            this.form.get('longTermMonthlyIncomeSource.seniorPension')?.reset();
          }
        }
        if (option.value === '08' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.privateSectorSubsidy')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.privateSectorSubsidy')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.privateSectorSubsidy')
              ?.reset();
          }
        }
        if (option.value === '09' && this.form) {
          if (option.checked) {
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_text')
              ?.enable();
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_input')
              ?.enable();
          } else {
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_text')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_text')
              ?.reset();
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_input')
              ?.disable();
            this.form
              .get('longTermMonthlyIncomeSource.otherIncome_input')
              ?.reset();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.longTermMonthlyIncomeSource.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.longTermMonthlyIncomeSource.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.longTermMonthlyIncomeSource.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 特殊議題選項改變
  specialIssuesChange(checkedValues: string[]) {
    this.specialIssues.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.specialIssues.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.specialIssues.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.specialIssues.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.specialIssues.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.specialIssues.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 是否使用弘道其他服務選項改變
  usingOtherHongDaoServicesChange(checkedValues: string[]) {
    this.usingOtherHongDaoServices.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.usingOtherHongDaoServices.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.usingOtherHongDaoServices.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '08' && this.form) {
          if (option.checked) {
            this.form
              .get('usingOtherHongDaoServices.usingOtherHongDaoServices_other')
              ?.enable();
          } else {
            this.form
              .get('usingOtherHongDaoServices.usingOtherHongDaoServices_other')
              ?.reset();
            this.form
              .get('usingOtherHongDaoServices.usingOtherHongDaoServices_other')
              ?.disable();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.usingOtherHongDaoServices.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.usingOtherHongDaoServices.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.usingOtherHongDaoServices.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 福利使用概況選項改變
  welfareUsageOverviewChange(checkedValues: string[]) {
    this.welfareUsageOverview.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.welfareUsageOverview.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.welfareUsageOverview.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '01' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.mealDeliveryService_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.mealDeliveryService_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.mealDeliveryService_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.mealDeliveryService_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.mealDeliveryService_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.mealDeliveryService_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.mealDeliveryService_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.mealDeliveryService_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.mealDeliveryService_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '02' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.daytimeCare_unitName')
              ?.enable();
            this.form
              .get('welfareUsageOverview.daytimeCare_serviceResponsiblePerson')
              ?.enable();
            this.form
              .get('welfareUsageOverview.daytimeCare_contactPhone')
              ?.enable();
          } else {
            this.form.get('welfareUsageOverview.daytimeCare_unitName')?.reset();
            this.form
              .get('welfareUsageOverview.daytimeCare_unitName')
              ?.disable();
            this.form
              .get('welfareUsageOverview.daytimeCare_serviceResponsiblePerson')
              ?.reset();
            this.form
              .get('welfareUsageOverview.daytimeCare_serviceResponsiblePerson')
              ?.disable();
            this.form
              .get('welfareUsageOverview.daytimeCare_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.daytimeCare_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '03' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.homeCareService_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.homeCareService_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.homeCareService_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.homeCareService_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.homeCareService_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.homeCareService_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.homeCareService_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.homeCareService_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.homeCareService_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '04' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.unitAService_unitName')
              ?.enable();
            this.form
              .get('welfareUsageOverview.unitAService_serviceResponsiblePerson')
              ?.enable();
            this.form
              .get('welfareUsageOverview.unitAService_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.unitAService_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.unitAService_unitName')
              ?.disable();
            this.form
              .get('welfareUsageOverview.unitAService_serviceResponsiblePerson')
              ?.reset();
            this.form
              .get('welfareUsageOverview.unitAService_serviceResponsiblePerson')
              ?.disable();
            this.form
              .get('welfareUsageOverview.unitAService_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.unitAService_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '05' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.otherUnitService_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.otherUnitService_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.otherUnitService_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.otherUnitService_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.otherUnitService_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.otherUnitService_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.otherUnitService_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.otherUnitService_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.otherUnitService_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '06' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.transportationService_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.transportationService_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.transportationService_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.transportationService_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.transportationService_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.transportationService_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.transportationService_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.transportationService_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.transportationService_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '07' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.communityCenter_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.communityCenter_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.communityCenter_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.communityCenter_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.communityCenter_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.communityCenter_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.communityCenter_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.communityCenter_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.communityCenter_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '08' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.emergencyRescueSystem_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_contactPhone')
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.emergencyRescueSystem_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.emergencyRescueSystem_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_contactPhone')
              ?.reset();
            this.form
              .get('welfareUsageOverview.emergencyRescueSystem_contactPhone')
              ?.disable();
          }
        }
        if (option.value === '09' && this.form) {
          if (option.checked) {
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other')
              ?.enable();
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other_unitName')
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_serviceResponsiblePerson'
              )
              ?.enable();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_contactPhone'
              )
              ?.enable();
          } else {
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other')
              ?.reset();
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other')
              ?.disable();
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other_unitName')
              ?.reset();
            this.form
              .get('welfareUsageOverview.welfareUsageOverview_other_unitName')
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_serviceResponsiblePerson'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_serviceResponsiblePerson'
              )
              ?.disable();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_contactPhone'
              )
              ?.reset();
            this.form
              .get(
                'welfareUsageOverview.welfareUsageOverview_other_contactPhone'
              )
              ?.disable();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.welfareUsageOverview.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.welfareUsageOverview.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.welfareUsageOverview.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 住屋概況選項改變
  housingConditionChange(checkedValues: string[]) {
    this.housingCondition.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 居住環境選項改變
  livingEnvironmentChange(checkedValues: string[]) {
    this.livingEnvironment.forEach((option) => {
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

  // 同住者選項改變
  cohabitantsChange(checkedValues: string[]) {
    this.cohabitants.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      // 當 "00" 被勾選時
      if (option.value === '00') {
        if (option.checked) {
          // 禁用其他選項
          this.cohabitants.forEach((option) => {
            if (option.value !== '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用其他選項
            }
          });
        } else {
          // 啟用其他選項
          this.cohabitants.forEach((option) => {
            option.disabled = false; // 啟用所有選項
          });
        }
      } else {
        if (option.value === '10' && this.form) {
          if (option.checked) {
            this.form.get('cohabitants.cohabitants_other')?.enable();
          } else {
            this.form.get('cohabitants.cohabitants_other')?.reset();
            this.form.get('cohabitants.cohabitants_other')?.disable();
          }
        }
        // 當 "00" 以外的選項被勾選時
        if (option.checked) {
          // 禁用 "00" 選項
          this.cohabitants.forEach((option) => {
            if (option.value === '00') {
              option.checked = false; // 取消勾選
              option.disabled = true; // 禁用 "00" 選項
            }
          });
        } else {
          // 檢查其他選項是否被勾選
          const isAnyChecked = this.cohabitants.some(
            (option) => option.value !== '00' && option.checked
          );
          if (!isAnyChecked) {
            // 如果沒有其他選項被勾選，啟用 "00" 選項
            this.cohabitants.forEach((option) => {
              if (option.value === '00') {
                option.disabled = false; // 啟用 "00" 選項
              }
            });
          }
        }
      }
    });
  }

  // 顯示緊急聯絡人的modal
  showEmergencyContactModal(): void {
    // 清空輸入框
    this.form.get('emergencyContact_emergencyContact')?.reset();
    this.form.get('emergencyContact_relationship')?.reset();
    this.form.get('emergencyContact_phone')?.reset();
    this.isVisible_emergencyContact = true;
  }

  // 刪除所選的緊急聯絡人
  deleteEmergencyContact(index: number): void {
    (this.form.get('emergencyContact') as FormArray).removeAt(index);
  }

  // 緊急聯絡人modal的確認按鈕
  handleEmergencyContactModalOk(): void {
    // 取得三個表單控制項的值
    const emergencyContact = this.form.get(
      'emergencyContact_emergencyContact'
    )?.value;
    const relationship = this.form.get('emergencyContact_relationship')?.value;
    const phone = this.form.get('emergencyContact_phone')?.value;
    // 判斷資料是否皆有填寫
    if (
      emergencyContact === null ||
      emergencyContact === '' ||
      relationship === null ||
      relationship === '' ||
      phone === null ||
      phone === ''
    ) {
      this.message.create('error', '請填寫完整資料');
      return;
    }
    // 將這些值組合成一個物件
    const emergencyContactObj = {
      emergencyContact_emergencyContact: emergencyContact,
      emergencyContact_relationship: relationship,
      emergencyContact_phone: phone,
    };
    // 將物件加入到 emergencyContact 的 FormArray 中
    (this.form.get('emergencyContact') as FormArray).push(
      new FormControl(emergencyContactObj)
    );

    this.message.create('success', '新增成功');
    this.isVisible_emergencyContact = false;
  }

  // 緊急聯絡人modal的取消按鈕
  handleEmergencyContactModalCancel(): void {
    this.isVisible_emergencyContact = false;
    this.message.create('error', '取消');
  }

  // 暫存草稿
  save() {
    this.message.create('success', '草稿暫存成功');
  }

  // 點選上一頁後執行操作判斷
  async onPreviousPage() {
    await this.router.navigate(['/hd110/create']);
    this.closeTab();
  }

  // 點選下一頁後執行操作判斷
  async onNextPage() {
    // if (this.form.valid) {
    await this.router.navigate(['/hd130/create']);
    this.closeTab();
    // } else {
    //   this.message.create('warning', '所有必須填寫的項目請先完成填寫');
    // }
  }

  // 關閉個案開案資料表
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }

  // 家系圖匯入點擊事件
  familyTree_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 匯入成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 匯入失敗.`);
    }
  }

  // 生態圖匯入點擊事件
  ecologicalMap_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 匯入成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 匯入失敗.`);
    }
  }
}
