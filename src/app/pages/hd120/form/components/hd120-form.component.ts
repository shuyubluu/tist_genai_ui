import { DiagramService } from './../../../../../assets/diagram/service/diagram';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  // 宗教信仰是否禁用無選項
  isDisableReligiousAffiliationNone: boolean = false;
  // 宗教信仰是否禁用無選項以外的項目
  isDisableReligiousAffiliationOthers: boolean = false;
  // 現有疾病狀態是否禁用無選項
  isDisableCurrentHealthConditionsNone: boolean = false;
  // 現有疾病狀態是否禁用無選項以外的項目
  isDisableCurrentHealthConditionsOthers: boolean = false;
  // 就醫狀態modal是否顯示
  isVisible_medicalStatus: boolean = false;
  // 輔具使用是否禁用無選項
  isDisableAssistiveDeviceUsageNone: boolean = false;
  // 輔具使用是否禁用無選項以外的項目
  isDisableAssistiveDeviceUsageOthers: boolean = false;
  // 義肢的附加選項是否已擇一
  isChoiceProsthesis: boolean = false;
  // 社會福利補助是否禁用無選項
  // isDisableSocialWelfareSubsidyNone: boolean = false;
  // 社會福利補助是否禁用無選項以外的項目
  // isDisableSocialWelfareSubsidyOthers: boolean = false;
  // 是否為身心障礙者
  isPhysicalAndMentalDisability: boolean = false;
  // 長期每月經濟來源是否禁用無選項
  isDisableLongTermMonthlyIncomeSourceNone: boolean = false;
  // 長期每月經濟來源是否禁用無選項以外的項目
  isDisableLongTermMonthlyIncomeSourceOthers: boolean = false;
  // 特殊議題是否禁用無選項
  isDisableSpecialIssuesNone: boolean = false;
  // 特殊議題是否禁用無選項以外的項目
  isDisableSpecialIssuesOthers: boolean = false;
  // 是否為失智症者
  isDementia: boolean = false;
  // 是否使用弘道其他服務是否禁用無選項
  isDisableUsingOtherHongDaoServicesNone: boolean = false;
  // 是否使用弘道其他服務是否禁用無選項以外的項目
  isDisableUsingOtherHongDaoServicesOthers: boolean = false;
  // 福利使用概況是否禁用無選項
  isDisableWelfareUsageOverviewNone: boolean = false;
  // 福利使用概況是否禁用無選項以外的項目
  isDisableWelfareUsageOverviewOthers: boolean = false;
  // 同住者是否禁用無選項
  isDisableCohabitantsNone: boolean = false;
  // 同住者是否禁用無選項以外的項目
  isDisableCohabitantsOthers: boolean = false;
  // 緊急聯絡人modal是否顯示
  isVisible_emergencyContact: boolean = false;
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
  selectOptions_socialWelfareAssistance: string[] = [
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

  // 個案開案資料表單
  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public diagramService: DiagramService, // diagramService
    public hd100ListService: Hd100ListService // hd100ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.個案狀態
      // 個案服務狀態
      caseServiceStatus: new FormControl('持續服務'),
      // 個案分級
      caseLevel: new FormControl(''),
      // 開案日期
      caseStartDate: new FormControl('', [Validators.required]),
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
      // map定位座標
      mapCoordinates: new FormControl(''),
      // 教育程度
      educationLevel: new FormControl('', [Validators.required]),
      // 婚姻狀況
      maritalStatus: new FormControl('', [Validators.required]),
      // 婚姻狀況其他
      maritalStatus_other: new FormControl('', [Validators.required]),
      // 宗教信仰
      religiousAffiliation: new FormControl('', [Validators.required]),
      // 宗教信仰其他
      religiousAffiliation_other: new FormControl('', [Validators.required]),
      // 習慣用語
      commonLanguage: new FormControl('', [Validators.required]),
      // 習慣用語其他
      commonLanguage_other: new FormControl('', [Validators.required]),
      // 飲食習慣
      eatingHabits: new FormControl(''),
      // 現有疾病狀況
      currentHealthConditions: new FormControl('', [Validators.required]),
      // 現有疾病狀況其他
      currentHealthConditions_other: new FormControl('', [Validators.required]),
      // 就醫狀態
      medicalStatus: new FormArray([]),
      // 就醫狀態_就醫醫別
      medicalStatus_medicalCategory: new FormControl(''),
      // 就醫狀態_科別
      medicalStatus_department: new FormControl(''),
      // 就醫狀態_頻率
      medicalStatus_frequency: new FormControl(''),
      // 輔具使用
      assistiveDeviceUsage: new FormControl('', [Validators.required]),
      // 上肢
      upperLimb: new FormControl(),
      // 下肢
      lowerLimb: new FormControl(),
      // 輔具使用其他
      assistiveDeviceUsage_other: new FormControl('', [Validators.required]),

      // 3.福利狀況
      // 福利身份
      welfareStatus: new FormControl(''),
      // 社會福利補助
      socialWelfareSubsidy: new FormControl(''),
      // 身障證明障礙類別
      disabilityCertificateCategory: new FormControl(''),
      // 障礙等級
      disabilityLevel: new FormControl(''),

      // 4.經濟來源
      // 長期每月經濟來源
      longTermMonthlyIncomeSource: new FormControl('', [Validators.required]),
      // 社會福利補助
      socialWelfareAssistance: new FormControl('', [Validators.required]),
      // 社會福利補助輸入框
      socialWelfareAssistance_input: new FormControl(''),
      // 子女供應
      childrenSupport: new FormControl(''),
      // 退休俸
      retirementPension: new FormControl(''),
      // 自己工作收入
      ownEmploymentIncome: new FormControl(''),
      // 配偶工作收入
      spouseEmploymentIncome: new FormControl(''),
      // 自己或配偶積蓄
      personalOrSpouseSavings: new FormControl(''),
      // 老年年金
      seniorPension: new FormControl(''),
      // 民間單位補助
      privateSectorSubsidy: new FormControl(''),
      // 其他收入
      otherIncome: new FormControl(''),
      // 其他收入輸入框
      otherIncome_input: new FormControl(''),

      // 5.特殊議題
      // 特殊議題
      specialIssues: new FormControl('', [Validators.required]),
      // 6.福利使用
      // 是否使用弘道其他服務
      usingOtherHongDaoServices: new FormControl('', [Validators.required]),
      // 是否使用弘道其他服務其他
      usingOtherHongDaoServices_other: new FormControl('', [
        Validators.required,
      ]),
      // 福利使用概況
      welfareUsageOverview: new FormControl('', [Validators.required]),
      // 送餐服務單位名稱
      mealDeliveryService_unitName: new FormControl(''),
      // 送餐服務服務主責人員
      mealDeliveryService_serviceResponsiblePerson: new FormControl(''),
      // 送餐服務聯絡電話
      mealDeliveryService_contactPhone: new FormControl(''),
      // 日間照顧單位名稱
      daytimeCare_unitName: new FormControl(''),
      // 日間照顧服務主責人員
      daytimeCare_serviceResponsiblePerson: new FormControl(''),
      // 日間照顧聯絡電話
      daytimeCare_contactPhone: new FormControl(''),
      // 居家服務單位名稱
      homeCareService_unitName: new FormControl(''),
      // 居家服務服務主責人員
      homeCareService_serviceResponsiblePerson: new FormControl(''),
      // 居家服務聯絡電話
      homeCareService_contactPhone: new FormControl(''),
      // A單位服務單位名稱
      unitAService_unitName: new FormControl(''),
      // A單位服務服務主責人員
      unitAService_serviceResponsiblePerson: new FormControl(''),
      // A單位服務聯絡電話
      unitAService_contactPhone: new FormControl(''),
      // 其他單位服務單位名稱
      otherUnitService_unitName: new FormControl(''),
      // 其他單位服務服務主責人員
      otherUnitService_serviceResponsiblePerson: new FormControl(''),
      // 其他單位服務聯絡電話
      otherUnitService_contactPhone: new FormControl(''),
      // 交通服務單位名稱
      transportationService_unitName: new FormControl(''),
      // 交通服務服務主責人員
      transportationService_serviceResponsiblePerson: new FormControl(''),
      // 交通服務聯絡電話
      transportationService_contactPhone: new FormControl(''),
      // 社區據點單位名稱
      communityCenter_unitName: new FormControl(''),
      // 社區據點服務主責人員
      communityCenter_serviceResponsiblePerson: new FormControl(''),
      // 社區據點聯絡電話
      communityCenter_contactPhone: new FormControl(''),
      // 緊急救援系統單位名稱
      emergencyRescueSystem_unitName: new FormControl(''),
      // 緊急救援系統服務主責人員
      emergencyRescueSystem_serviceResponsiblePerson: new FormControl(''),
      // 緊急救援系統聯絡電話
      emergencyRescueSystem_contactPhone: new FormControl(''),
      // 福利使用概況其他
      welfareUsageOverview_other: new FormControl('', [Validators.required]),
      // 福利使用概況其他單位名稱
      welfareUsageOverview_other_unitName: new FormControl(''),
      // 福利使用概況其他服務主責人員
      welfareUsageOverview_other_serviceResponsiblePerson: new FormControl(''),
      // 福利使用概況其他聯絡電話
      welfareUsageOverview_other_contactPhone: new FormControl(''),

      // 6.居住環境
      // 住屋種類
      housingType: new FormControl('', [Validators.required]),
      // 住屋概況
      housingCondition: new FormControl(''),
      // 住屋所有權
      housingOwnership: new FormControl('', [Validators.required]),
      // 居住環境
      livingEnvironment: new FormControl('', [Validators.required]),
      // 同住者
      cohabitants: new FormControl('', [Validators.required]),
      // 同住者其他
      cohabitants_other: new FormControl('', [Validators.required]),

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
      serviceVolunteer: new FormControl(''),
    });
  }
  ngOnInit(): void {
    // 檢視模式下，禁用表單
    if (this.hd100ListService.isView) {
      this.form.disable();
    }
    // 禁用個案服務狀態select
    this.form.get('caseServiceStatus')?.disable();
    // 禁用個案分級select
    this.form.get('caseLevel')?.disable();
    // 禁用結案日期
    this.form.get('caseEndDate')?.disable();
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
    // 禁用生日
    this.form.get('dateOfBirth')?.disable();
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
    this.form.get('religiousAffiliation_other')?.disable();
    // 禁用習慣用語其他
    this.form.get('commonLanguage_other')?.disable();
    // 禁用婚姻狀況其他
    this.form.get('maritalStatus_other')?.disable();
    // 禁用習慣用語其他
    this.form.get('commonLanguage_other')?.disable();
    // 禁用現有疾病狀態其他
    this.form.get('currentHealthConditions_other')?.disable();
    // 禁用上肢選項
    this.form.get('upperLimb')?.disable();
    // 禁用下肢選項
    this.form.get('lowerLimb')?.disable();
    // 禁用輔具使用其他
    this.form.get('assistiveDeviceUsage_other')?.disable();
    // 禁用福利身份select
    this.form.get('welfareStatus')?.disable();
    // 禁用身障證明障礙類別
    this.form.get('disabilityCertificateCategory')?.disable();
    // 禁用障礙等級
    this.form.get('disabilityLevel')?.disable();
    // 禁用子女供應
    this.form.get('childrenSupport')?.disable();
    // 禁用退休俸
    this.form.get('retirementPension')?.disable();
    // 禁用自己工作收入
    this.form.get('ownEmploymentIncome')?.disable();
    // 禁用配偶工作收入
    this.form.get('spouseEmploymentIncome')?.disable();
    // 禁用自己或配偶積蓄
    this.form.get('personalOrSpouseSavings')?.disable();
    // 禁用老年年金
    this.form.get('seniorPension')?.disable();
    // 禁用民間單位補助
    this.form.get('privateSectorSubsidy')?.disable();
    // 禁用其他收入
    this.form.get('otherIncome')?.disable();
    // 禁用其他收入輸入框
    this.form.get('otherIncome_input')?.disable();
    // 禁用社會福利補助
    this.form.get('socialWelfareAssistance')?.disable();
    // 禁用社會福利補助輸入框
    this.form.get('socialWelfareAssistance_input')?.disable();
    // 禁用是否使用弘道其他服務
    this.form.get('usingOtherHongDaoServices_other')?.disable();
    // 禁用福利使用概況送餐服務單位名稱
    this.form.get('mealDeliveryService_unitName')?.disable();
    // 禁用福利使用概況送餐服務服務主責人員
    this.form.get('mealDeliveryService_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況送餐服務聯絡電話
    this.form.get('mealDeliveryService_contactPhone')?.disable();
    // 禁用福利使用概況日間照顧單位名稱
    this.form.get('daytimeCare_unitName')?.disable();
    // 禁用福利使用概況日間照顧服務主責人員
    this.form.get('daytimeCare_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況日間照顧聯絡電話
    this.form.get('daytimeCare_contactPhone')?.disable();
    // 禁用福利使用概況居家服務單位名稱
    this.form.get('homeCareService_unitName')?.disable();
    // 禁用福利使用概況居家服務服務主責人員
    this.form.get('homeCareService_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況居家服務聯絡電話
    this.form.get('homeCareService_contactPhone')?.disable();
    // 禁用福利使用概況A單位服務單位名稱
    this.form.get('unitAService_unitName')?.disable();
    // 禁用福利使用概況A單位服務服務主責人員
    this.form.get('unitAService_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況A單位服務聯絡電話
    this.form.get('unitAService_contactPhone')?.disable();
    // 禁用福利使用概況其他單位服務單位名稱
    this.form.get('otherUnitService_unitName')?.disable();
    // 禁用福利使用概況其他單位服務服務主責人員
    this.form.get('otherUnitService_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況其他單位服務聯絡電話
    this.form.get('otherUnitService_contactPhone')?.disable();
    // 禁用福利使用概況交通服務單位名稱
    this.form.get('transportationService_unitName')?.disable();
    // 禁用福利使用概況交通服務服務主責人員
    this.form.get('transportationService_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況交通服務聯絡電話
    this.form.get('transportationService_contactPhone')?.disable();
    // 禁用福利使用概況社區據點單位名稱
    this.form.get('communityCenter_unitName')?.disable();
    // 禁用福利使用概況社區據點服務主責人員
    this.form.get('communityCenter_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況社區據點聯絡電話
    this.form.get('communityCenter_contactPhone')?.disable();
    // 禁用福利使用概況緊急救援系統單位名稱
    this.form.get('emergencyRescueSystem_unitName')?.disable();
    // 禁用福利使用概況緊急救援系統服務主責人員
    this.form.get('emergencyRescueSystem_serviceResponsiblePerson')?.disable();
    // 禁用福利使用概況緊急救援系統聯絡電話
    this.form.get('emergencyRescueSystem_contactPhone')?.disable();
    // 禁用福利使用概況其他
    this.form.get('welfareUsageOverview_other')?.disable();
    // 禁用福利使用概況其他單位名稱
    this.form.get('welfareUsageOverview_other_unitName')?.disable();
    // 禁用福利使用概況其他單位服務主責人員
    this.form
      .get('welfareUsageOverview_other_serviceResponsiblePerson')
      ?.disable();
    // 禁用福利使用概況其他單位聯絡電話
    this.form.get('welfareUsageOverview_other_contactPhone')?.disable();
    // 禁用同住者其他
    this.form.get('cohabitants_other')?.disable();
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
  religiousAffiliationChange(checkGroup: string[]) {
    this.form.get('religiousAffiliation')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableReligiousAffiliationOthers = true;
    } else {
      this.isDisableReligiousAffiliationOthers = false;
    }
    if (checkGroup.includes('9')) {
      this.form.get('religiousAffiliation_other')?.enable();
    } else {
      this.form.get('religiousAffiliation_other')?.reset();
      this.form.get('religiousAffiliation_other')?.disable();
    }
    this.isDisableReligiousAffiliationNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9'].includes(check)
    );
  }

  // 習慣用語選項改變
  commonLanguageChange(checkGroup: string[]) {
    this.form.get('commonLanguage')?.setValue(checkGroup);
    if (checkGroup.includes('5')) {
      this.form.get('commonLanguage_other')?.enable();
    } else {
      this.form.get('commonLanguage_other')?.disable();
      this.form.get('commonLanguage_other')?.reset();
    }
  }

  // 飲食習慣選項改變
  eatingHabitsChange(checkGroup: string[]) {
    this.form.get('eatingHabits')?.setValue(checkGroup);
  }

  // 現有疾病狀態選項改變
  currentHealthConditionsChange(checkGroup: string[]) {
    this.form.get('currentHealthConditions')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableCurrentHealthConditionsOthers = true;
    } else {
      this.isDisableCurrentHealthConditionsOthers = false;
    }
    if (checkGroup.includes('9')) {
      this.isDementia = true;
    } else {
      this.isDementia = false;
    }
    if (checkGroup.includes('13')) {
      this.form.get('currentHealthConditions_other')?.enable();
    } else {
      this.form.get('currentHealthConditions_other')?.reset();
      this.form.get('currentHealthConditions_other')?.disable();
    }
    this.isDisableCurrentHealthConditionsNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'].includes(
        check
      )
    );
  }

  // 顯示就醫狀態的modal
  showMedicalStatusModal(): void {
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
    if (medicalCategory === '' || department === '' || frequency === '') {
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
    // 清空輸入框
    this.form.get('medicalStatus_medicalCategory')?.reset();
    this.form.get('medicalStatus_department')?.reset();
    this.form.get('medicalStatus_frequency')?.reset();
    this.message.create('success', '新增成功');
    this.isVisible_medicalStatus = false;
  }

  // 就醫狀態modal的取消按鈕
  handleMedicalStatusModalCancel(): void {
    this.isVisible_medicalStatus = false;
    this.message.create('error', '取消');
  }

  // 輔具使用選項改變
  assistiveDeviceUsageChange(checkGroup: string[]) {
    this.form.get('assistiveDeviceUsage')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableAssistiveDeviceUsageOthers = true;
    } else {
      this.isDisableAssistiveDeviceUsageOthers = false;
    }
    if (checkGroup.includes('13')) {
      this.form.get('assistiveDeviceUsage_other')?.enable();
    } else {
      this.form.get('assistiveDeviceUsage_other')?.reset();
      this.form.get('assistiveDeviceUsage_other')?.disable();
    }
    if (checkGroup.includes('10')) {
      this.isChoiceProsthesis = true;
      this.form.get('upperLimb')?.enable();
      this.form.get('lowerLimb')?.enable();
      if (checkGroup.includes('11') || checkGroup.includes('12')) {
        this.isChoiceProsthesis = false;
      } else {
        this.isChoiceProsthesis = true;
      }
    } else {
      this.isChoiceProsthesis = false;
      this.form.get('upperLimb')?.disable();
      this.form.get('upperLimb')?.reset();
      this.form.get('lowerLimb')?.disable();
      this.form.get('lowerLimb')?.reset();
    }
    this.isDisableAssistiveDeviceUsageNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9', '10', '13'].includes(check)
    );
  }

  // 社會福利補助選項改變
  socialWelfareSubsidyChange(checkGroup: string[]) {
    this.form.get('socialWelfareSubsidy')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    // if (checkGroup.includes('1')) {
    //   this.isDisableSocialWelfareSubsidyOthers = true;
    // } else {
    //   this.isDisableSocialWelfareSubsidyOthers = false;
    // }
    // if (checkGroup.includes('2')) {
    //   this.isPhysicalAndMentalDisability = true;
    //   this.form.get('disabilityCertificateCategory')?.enable();
    //   this.form.get('disabilityLevel')?.enable();
    // } else {
    //   this.isPhysicalAndMentalDisability = false;
    //   this.form.get('disabilityCertificateCategory')?.disable();
    //   this.form.get('disabilityCertificateCategory')?.reset();
    //   this.form.get('disabilityLevel')?.disable();
    //   this.form.get('disabilityLevel')?.reset();
    // }
    // this.isDisableSocialWelfareSubsidyNone = checkGroup.some((check) =>
    //   ['2', '3', '4', '5', '6'].includes(check)
    // );
  }

  // 長期每月經濟來源選項改變
  longTermMonthlyIncomeSourceChange(checkGroup: string[]) {
    this.form.get('longTermMonthlyIncomeSource')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableLongTermMonthlyIncomeSourceOthers = true;
    } else {
      this.isDisableLongTermMonthlyIncomeSourceOthers = false;
    }
    if (checkGroup.includes('2')) {
      this.form.get('childrenSupport')?.enable();
    } else {
      this.form.get('childrenSupport')?.disable();
      this.form.get('childrenSupport')?.reset();
    }
    if (checkGroup.includes('3')) {
      this.form.get('retirementPension')?.enable();
    } else {
      this.form.get('retirementPension')?.disable();
      this.form.get('retirementPension')?.reset();
    }
    if (checkGroup.includes('4')) {
      this.form.get('ownEmploymentIncome')?.enable();
    } else {
      this.form.get('ownEmploymentIncome')?.disable();
      this.form.get('ownEmploymentIncome')?.reset();
    }
    if (checkGroup.includes('5')) {
      this.form.get('spouseEmploymentIncome')?.enable();
    } else {
      this.form.get('spouseEmploymentIncome')?.disable();
      this.form.get('spouseEmploymentIncome')?.reset();
    }
    if (checkGroup.includes('6')) {
      this.form.get('personalOrSpouseSavings')?.enable();
    } else {
      this.form.get('personalOrSpouseSavings')?.disable();
      this.form.get('personalOrSpouseSavings')?.reset();
    }
    if (checkGroup.includes('7')) {
      this.form.get('seniorPension')?.enable();
    } else {
      this.form.get('seniorPension')?.disable();
      this.form.get('seniorPension')?.reset();
    }
    if (checkGroup.includes('8')) {
      this.form.get('privateSectorSubsidy')?.enable();
    } else {
      this.form.get('privateSectorSubsidy')?.disable();
      this.form.get('privateSectorSubsidy')?.reset();
    }
    if (checkGroup.includes('9')) {
      this.form.get('socialWelfareAssistance')?.enable();
      this.form.get('socialWelfareAssistance_input')?.enable();
    } else {
      this.form.get('socialWelfareAssistance')?.disable();
      this.form.get('socialWelfareAssistance')?.reset();
      this.form.get('socialWelfareAssistance_input')?.disable();
      this.form.get('socialWelfareAssistance_input')?.reset();
    }
    if (checkGroup.includes('10')) {
      this.form.get('otherIncome')?.enable();
      this.form.get('otherIncome')?.reset();
      this.form.get('otherIncome_input')?.enable();
      this.form.get('otherIncome_input')?.reset();
    } else {
      this.form.get('otherIncome')?.disable();
      this.form.get('otherIncome')?.reset();
      this.form.get('otherIncome_input')?.disable();
      this.form.get('otherIncome_input')?.reset();
    }
    this.isDisableLongTermMonthlyIncomeSourceNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(check)
    );
  }

  // 特殊議題選項改變
  specialIssuesChange(checkGroup: string[]) {
    this.form.get('specialIssues')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableSpecialIssuesOthers = true;
    } else {
      this.isDisableSpecialIssuesOthers = false;
    }
    this.isDisableSpecialIssuesNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7'].includes(check)
    );
  }

  // 是否使用弘道其他服務選項改變
  usingOtherHongDaoServicesChange(checkGroup: string[]) {
    this.form.get('usingOtherHongDaoServices')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableUsingOtherHongDaoServicesOthers = true;
    } else {
      this.isDisableUsingOtherHongDaoServicesOthers = false;
    }
    if (checkGroup.includes('9')) {
      this.form.get('usingOtherHongDaoServices_other')?.enable();
    } else {
      this.form.get('usingOtherHongDaoServices_other')?.disable();
      this.form.get('usingOtherHongDaoServices_other')?.reset();
    }
    this.isDisableUsingOtherHongDaoServicesNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9'].includes(check)
    );
  }

  // 福利使用概況選項改變
  welfareUsageOverviewChange(checkGroup: string[]) {
    this.form.get('welfareUsageOverview')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableWelfareUsageOverviewOthers = true;
    } else {
      this.isDisableWelfareUsageOverviewOthers = false;
    }
    if (checkGroup.includes('2')) {
      this.form.get('mealDeliveryService_unitName')?.enable();
      this.form.get('mealDeliveryService_serviceResponsiblePerson')?.enable();
      this.form.get('mealDeliveryService_contactPhone')?.enable();
    } else {
      this.form.get('mealDeliveryService_unitName')?.disable();
      this.form.get('mealDeliveryService_serviceResponsiblePerson')?.disable();
      this.form.get('mealDeliveryService_contactPhone')?.disable();
      this.form.get('mealDeliveryService_unitName')?.reset();
      this.form.get('mealDeliveryService_serviceResponsiblePerson')?.reset();
      this.form.get('mealDeliveryService_contactPhone')?.reset();
    }
    if (checkGroup.includes('3')) {
      this.form.get('daytimeCare_unitName')?.enable();
      this.form.get('daytimeCare_serviceResponsiblePerson')?.enable();
      this.form.get('daytimeCare_contactPhone')?.enable();
    } else {
      this.form.get('daytimeCare_unitName')?.disable();
      this.form.get('daytimeCare_serviceResponsiblePerson')?.disable();
      this.form.get('daytimeCare_contactPhone')?.disable();
      this.form.get('daytimeCare_unitName')?.reset();
      this.form.get('daytimeCare_serviceResponsiblePerson')?.reset();
      this.form.get('daytimeCare_contactPhone')?.reset();
    }

    if (checkGroup.includes('4')) {
      this.form.get('homeCareService_unitName')?.enable();
      this.form.get('homeCareService_serviceResponsiblePerson')?.enable();
      this.form.get('homeCareService_contactPhone')?.enable();
    } else {
      this.form.get('homeCareService_unitName')?.disable();
      this.form.get('homeCareService_serviceResponsiblePerson')?.disable();
      this.form.get('homeCareService_contactPhone')?.disable();
      this.form.get('homeCareService_unitName')?.reset();
      this.form.get('homeCareService_serviceResponsiblePerson')?.reset();
      this.form.get('homeCareService_contactPhone')?.reset();
    }

    if (checkGroup.includes('5')) {
      this.form.get('unitAService_unitName')?.enable();
      this.form.get('unitAService_serviceResponsiblePerson')?.enable();
      this.form.get('unitAService_contactPhone')?.enable();
    } else {
      this.form.get('unitAService_unitName')?.disable();
      this.form.get('unitAService_serviceResponsiblePerson')?.disable();
      this.form.get('unitAService_contactPhone')?.disable();
      this.form.get('unitAService_unitName')?.reset();
      this.form.get('unitAService_serviceResponsiblePerson')?.reset();
      this.form.get('unitAService_contactPhone')?.reset();
    }

    if (checkGroup.includes('6')) {
      this.form.get('otherUnitService_unitName')?.enable();
      this.form.get('otherUnitService_serviceResponsiblePerson')?.enable();
      this.form.get('otherUnitService_contactPhone')?.enable();
    } else {
      this.form.get('otherUnitService_unitName')?.disable();
      this.form.get('otherUnitService_serviceResponsiblePerson')?.disable();
      this.form.get('otherUnitService_contactPhone')?.disable();
      this.form.get('otherUnitService_unitName')?.reset();
      this.form.get('otherUnitService_serviceResponsiblePerson')?.reset();
      this.form.get('otherUnitService_contactPhone')?.reset();
    }

    if (checkGroup.includes('7')) {
      this.form.get('transportationService_unitName')?.enable();
      this.form.get('transportationService_serviceResponsiblePerson')?.enable();
      this.form.get('transportationService_contactPhone')?.enable();
    } else {
      this.form.get('transportationService_unitName')?.disable();
      this.form
        .get('transportationService_serviceResponsiblePerson')
        ?.disable();
      this.form.get('transportationService_contactPhone')?.disable();
      this.form.get('transportationService_unitName')?.reset();
      this.form.get('transportationService_serviceResponsiblePerson')?.reset();
      this.form.get('transportationService_contactPhone')?.reset();
    }

    if (checkGroup.includes('8')) {
      this.form.get('communityCenter_unitName')?.enable();
      this.form.get('communityCenter_serviceResponsiblePerson')?.enable();
      this.form.get('communityCenter_contactPhone')?.enable();
    } else {
      this.form.get('communityCenter_unitName')?.disable();
      this.form.get('communityCenter_serviceResponsiblePerson')?.disable();
      this.form.get('communityCenter_contactPhone')?.disable();
      this.form.get('communityCenter_unitName')?.reset();
      this.form.get('communityCenter_serviceResponsiblePerson')?.reset();
      this.form.get('communityCenter_contactPhone')?.reset();
    }

    if (checkGroup.includes('9')) {
      this.form.get('emergencyRescueSystem_unitName')?.enable();
      this.form.get('emergencyRescueSystem_serviceResponsiblePerson')?.enable();
      this.form.get('emergencyRescueSystem_contactPhone')?.enable();
    } else {
      this.form.get('emergencyRescueSystem_unitName')?.disable();
      this.form
        .get('emergencyRescueSystem_serviceResponsiblePerson')
        ?.disable();
      this.form.get('emergencyRescueSystem_contactPhone')?.disable();
      this.form.get('emergencyRescueSystem_unitName')?.reset();
      this.form.get('emergencyRescueSystem_serviceResponsiblePerson')?.reset();
      this.form.get('emergencyRescueSystem_contactPhone')?.reset();
    }

    if (checkGroup.includes('10')) {
      this.form.get('welfareUsageOverview_other')?.enable();
      this.form.get('welfareUsageOverview_other_unitName')?.enable();
      this.form
        .get('welfareUsageOverview_other_serviceResponsiblePerson')
        ?.enable();
      this.form.get('welfareUsageOverview_other_contactPhone')?.enable();
    } else {
      this.form.get('welfareUsageOverview_other')?.disable();
      this.form.get('welfareUsageOverview_other_unitName')?.disable();
      this.form
        .get('welfareUsageOverview_other_serviceResponsiblePerson')
        ?.disable();
      this.form.get('welfareUsageOverview_other_contactPhone')?.disable();
      this.form.get('welfareUsageOverview_other')?.reset();
      this.form.get('welfareUsageOverview_other_unitName')?.reset();
      this.form
        .get('welfareUsageOverview_other_serviceResponsiblePerson')
        ?.reset();
      this.form.get('welfareUsageOverview_other_contactPhone')?.reset();
    }
    this.isDisableWelfareUsageOverviewNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(check)
    );
  }

  // 住屋概況選項改變
  housingConditionChange(checkGroup: string[]) {
    this.form.get('housingCondition')?.setValue(checkGroup);
  }

  // 居住環境選項改變
  livingEnvironmentChange(checkGroup: string[]) {
    this.form.get('livingEnvironment')?.setValue(checkGroup);
  }
  // 同住者選項改變
  cohabitantsChange(checkGroup: string[]) {
    this.form.get('livingEnvironment')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableCohabitantsOthers = true;
    } else {
      this.isDisableCohabitantsOthers = false;
    }
    if (checkGroup.includes('11')) {
      this.form.get('cohabitants_other')?.enable();
    } else {
      this.form.get('cohabitants_other')?.disable();
      this.form.get('cohabitants_other')?.reset();
    }
    this.isDisableCohabitantsNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].includes(check)
    );
  }

  // 顯示緊急聯絡人的modal
  showEmergencyContactModal(): void {
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
    if (emergencyContact === '' || relationship === '' || phone === '') {
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
    // 清空輸入框
    this.form.get('emergencyContact_emergencyContact')?.reset();
    this.form.get('emergencyContact_relationship')?.reset();
    this.form.get('emergencyContact_phone')?.reset();
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
    await this.router.navigate(['/hd110']);
    this.closeTab('個案開案資料表');
  }

  // 點選下一頁後執行操作判斷
  async onNextPage() {
    // if (this.form.valid) {
    await this.router.navigate(['/hd130']);
    this.closeTab('個案開案資料表');
    // } else {
    //   this.message.create('warning', '所有必須填寫的項目請先完成填寫');
    // }
  }

  // 關閉個案開案資料表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
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
