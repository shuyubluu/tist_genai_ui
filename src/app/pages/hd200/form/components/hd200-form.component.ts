import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaiwanCitySelectComponent } from '../../../../common/components/select/taiwanCitySelect/components/taiwan-city-select.component';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { VolunteerInformationService } from './../../../../common/components/volunteerInformation/service/volunteer-information.service';
import {
  taiwanHomePhoneValidator_areaCode,
  taiwanHomePhoneValidator_phoneNumber,
  taiwanMobilePhoneValidator_firstFourDigits,
  taiwanMobilePhoneValidator_lastSixDigits,
} from '../../../../common/validator/taiwan-phone-validators';
import { TaiwanCitySelectRadioComponent } from '../../../../common/components/select/taiwanCitySelect_radio/components/taiwan-city-select-radio.component';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Hd200ListService } from '../../list/service/hd200-list.service';
import { taiwanIdValidator } from '../../../../common/validator/taiwan-id-validator';
import { DateValidators } from '../../../../common/validator/date-validator';
import { AddressValidators } from '../../../../common/validator/address-validator';
import { CheckboxGroup } from '../service/hd200-form.interface';

@Component({
  selector: 'app-hd200-form',
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
    TaiwanCitySelectRadioComponent,
  ],
  templateUrl: './hd200-form.component.html',
  styleUrl: './hd200-form.component.scss',
})
export class Hd200FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 宗教信仰是否禁用無選項
  isDisableReligiousAffiliationNone: boolean = false;
  // 宗教信仰是否禁用無選項以外的項目
  isDisableReligiousAffiliationOthers: boolean = false;
  // 是否顯示希望服務區域modal
  isVisible: boolean = false;
  // 當前所選的希望服務區域
  currentSelectedDesiredServiceArea: string[] = [];
  // 用來暫存希望服務區域
  tempDesiredServiceArea: string[] = [];

  // 服務單位select選項
  selectOptions_region: string[] = [
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
  // 志工狀態select選項
  selectOptions_volunteerStatus: string[] = [
    '暫停中',
    '服務中',
    '實習中',
    '退出',
  ];
  // 性別select選項
  selectOptions_gender: string[] = ['男', '女'];
  // 學歷select選項
  selectOptions_education: string[] = [
    '國中及以下',
    '高中',
    '職校',
    '專科',
    '大學',
    '研究所',
    '博士',
  ];
  // 婚姻狀況select選項
  selectOptions_maritalStatus: string[] = [
    '未婚',
    '已婚',
    '離婚',
    '喪偶',
    '分居',
    '其他',
  ];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 專長select選項
  selectOptions_specialty: string[] = [
    '家電修理',
    '機械',
    '汽車修理',
    '工藝',
    '刻印',
    '印刷',
    '語文',
    '文書事務',
    '編輯',
    '打字',
    '美工',
    '縫紉/編織',
    '烹飪/烘',
    '美容美髮',
    '家事服務',
    '護理',
    '手工藝',
    '電腦',
    '攝影',
    '團康',
    '管理',
    '會計',
    '作物栽培',
    '農牧(藝)',
    '音樂',
    '體育',
    '心理諮詢',
    '駕駛',
    '特殊教育',
    '其他',
  ];
  // 證照select選項
  selectOptions_certification: string[] = [
    '會計師',
    '律師',
    '法醫師',
    '建築師',
    '消防設備師',
    '不動產估價師',
    '專利師',
    '引水人',
    '驗船師',
    '獸醫師',
    '醫師',
    '牙醫師',
    '藥師',
    '護理師',
    '醫事檢驗師',
    '醫事放射師',
    '物理治療師',
    '職能治療師',
    '助產師',
    '中醫師',
    '營養師',
    '牙體技術師',
    '語言治療師',
    '聽力師',
    '驗光師',
    '臨床心理師',
    '諮商心理師',
    '呼吸治療師',
    '社會工作師',
    '土木工程技師',
    '水利工程技師',
    '結構工程技師',
    '大地工程技師',
    '測量技師',
    '環境工程技師',
    '都市計畫技師',
    '機械工程技師',
    '冷凍空調工程技師',
    '造船工程技師',
    '電機工程技師',
    '電子工程技師',
    '資訊技師',
    '航空工程技師',
    '化學工程技師',
    '工業工程技師',
    '工業安全技師',
    '職業衛生技師',
    '紡織工程技師',
    '食品技師',
    '冶金工程技師',
    '農藝技師',
    '園藝技師',
    '林業技師',
    '畜牧技師',
    '漁撈技師',
    '水產養殖技師',
    '水土保持技師',
    '採礦工程技師',
    '應用地質技師',
    '礦業安全技師',
    '交通工程技師',
    '記帳士',
    '消防設備士',
    '地政士',
    '不動產經紀人',
    '領隊人員（華語）',
    '導遊人員（華語）',
    '領隊人員（外語）',
    '導遊人員（外語）',
    '財產保險代理人',
    '人身保險代理人',
    '財產保險經紀人',
    '人身保險經紀人',
    '一般保險公證人',
    '海事保險公證人',
    '專責報關人員',
  ];
  // 志工職稱select選項
  selectOptions_volunteerTitle: string[] = [
    '志工',
    '榮譽站長',
    '站長',
    '副站長',
    '會計',
    '隊長',
    '組長',
    '副組長',
    '創站站長',
  ];
  // 志願服務紀錄冊select選項
  selectOptions_volunteerServiceRecord: string[] = [
    '初次',
    '換發',
    '補發',
    '註銷',
    '未領取',
  ];
  // 榮譽卡select選項
  selectOptions_honorCard: string[] = ['無', '有'];
  // 榮譽卡狀態select選項
  selectOptions_honorCard_status: string[] = ['初次', '換發', '補發', '註銷'];
  // 是否領取弘道志工制服_尺寸select選項
  selectOptions_receivedHongdaoVolunteerUniform_size: string[] = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    '2XL',
    '3XL',
  ];
  // 志工權利義務告知聲明書select選項
  selectOptions_volunteerRightsAndDutiesDeclaration: string[] = [
    '完成',
    '未完成',
  ];
  // 服務紀錄冊模擬匯入檔案
  volunteerServiceRecord_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '志願服務紀錄冊.png',
      status: 'done',
    },
  ];
  // 志工權利義務告知聲明書模擬匯入檔案
  volunteerRightsObligationsDeclaration_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '志工權利義務告知聲明書.word',
      status: 'done',
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

  // 語言勾選狀態
  languages: CheckboxGroup[] = [
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
      label: '客家話',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '英語',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '日語',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '手語',
      value: '05',
      checked: false,
      disabled: false,
    },
    {
      label: '其它',
      value: '06',
      checked: false,
      disabled: false,
    },
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

  // 志工來源勾選狀態
  volunteerSource: CheckboxGroup[] = [
    {
      label: '親友',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '電視、廣播、報紙等傳播媒體',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '海報、宣傳簡介',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '本會志工介紹',
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

  // 服務交通工具相關勾選狀態
  serviceTransportation: CheckboxGroup[] = [
    {
      label: '汽車',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '機車',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '腳踏車',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '大眾運輸',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '走路',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 擁有交通工具相關勾選狀態
  hasTransportation: CheckboxGroup[] = [
    {
      label: '汽車',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '機車',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '腳踏車',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '箱型車',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '卡車',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '遊覽車',
      value: '05',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public volunteerInformationService: VolunteerInformationService, // volunteerInformationService
    public hd200ListService: Hd200ListService // hd200ListService
  ) {
    // 串接複選框的狀態
    // this.eatingHabits =
    // this.languages =
    // this.religiousAffiliation =
    // this.volunteerSource =
    // this.serviceTransportation =
    // this.hasTransportation =

    // 飲食習慣CheckboxGroup
    const eatingHabitsGroup = this.createCheckboxGroup(this.eatingHabits);

    // 語言CheckboxGroup
    const languagesGroup = this.createCheckboxGroup(this.languages);
    languagesGroup['languages_other'] = new FormControl('');

    // 宗教信仰CheckboxGroup
    const religiousAffiliationGroup = this.createCheckboxGroup(
      this.religiousAffiliation
    );
    religiousAffiliationGroup['religiousAffiliation_other'] = new FormControl(
      ''
    );

    // 志工來源CheckboxGroup
    const volunteerSourceGroup = this.createCheckboxGroup(this.volunteerSource);
    volunteerSourceGroup['volunteerSource_other'] = new FormControl('');

    // 服務交通工具CheckboxGroup
    const serviceTransportationGroup = this.createCheckboxGroup(
      this.serviceTransportation
    );

    // 擁有交通工具CheckboxGroup
    const hasTransportationGroup = this.createCheckboxGroup(
      this.hasTransportation
    );

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.志工入隊
      // 填表日期
      formDate: new FormControl('', [DateValidators.dateValidator]),
      // 志工入隊日期
      volunteerJoinDate: new FormControl('', [DateValidators.dateValidator]),

      // 2.資訊
      // 服務單位select1
      serviceUnit_select1: new FormControl('', [Validators.required]),
      // 服務單位select2
      serviceUnit_select2: new FormControl(''),
      // 服務單位select3
      serviceUnit_select3: new FormControl(''),
      // 單位名稱
      unitName: new FormControl('', [Validators.required]),
      // 主責人
      primaryContact: new FormControl('', [Validators.required]),

      // 3.基本資料
      // 志工狀態
      volunteerStatus: new FormControl('', [Validators.required]),
      // 姓名
      name: new FormControl('', [Validators.required]),
      // 性別
      gender: new FormControl('', [Validators.required]),
      // 生日
      birthDate: new FormControl('', [DateValidators.dateValidator]),
      // 身份證字號
      idNumber: new FormControl('', [Validators.required, taiwanIdValidator()]),
      // 手機前四碼
      phonePrefix: new FormControl('', [
        Validators.required,
        taiwanMobilePhoneValidator_firstFourDigits(),
      ]),
      // 手機後六碼
      phoneSuffix: new FormControl('', [
        Validators.required,
        taiwanMobilePhoneValidator_lastSixDigits(),
      ]),
      // 電話區碼
      areaCode: new FormControl('', [taiwanHomePhoneValidator_areaCode()]),
      // 電話號碼
      phoneNumber: new FormControl('', [
        taiwanHomePhoneValidator_phoneNumber(),
      ]),
      // LINE帳號
      lineId: new FormControl(''),
      // E-mail
      email: new FormControl('', [Validators.email]),
      // 飲食習慣
      eatingHabits: new FormGroup(eatingHabitsGroup),
      // 學歷
      education: new FormControl(''),
      // 語言
      languages: new FormGroup(languagesGroup),
      // 通訊地址
      address_select: new FormControl('', [AddressValidators.addressValidator]),
      // 通訊地址
      address: new FormControl('', [Validators.required]),
      // 宗教信仰
      religiousAffiliation: new FormGroup(religiousAffiliationGroup),
      // 婚姻狀況
      maritalStatus: new FormControl(''),
      // 婚姻狀況其他
      maritalStatus_other: new FormControl(''),
      // 是否為原住民
      isIndigenous: new FormControl('', [Validators.required]),
      // 是否為新住民
      isNewResident: new FormControl(''),
      // 是否為外國籍
      isForeignNational: new FormControl('', [Validators.required]),
      // 是否加入救災志工
      isDisasterReliefVolunteer: new FormControl('', [Validators.required]),
      // 專長
      specialty: new FormControl(''),
      // 證照
      certification: new FormControl(''),
      // 志工來源
      volunteerSource: new FormGroup(volunteerSourceGroup),
      // 志工職稱
      volunteerTitle: new FormControl('', [Validators.required]),
      // 希望服務區域
      desiredServiceArea: new FormControl('', [Validators.required]),
      // 服務交通工具
      serviceTransportation: new FormGroup(serviceTransportationGroup),
      // 擁有交通工具
      hasTransportation: new FormGroup(hasTransportationGroup),

      // 4.識別
      // 是否曾擔任志工
      hasVolunteerExperience: new FormControl(''),
      // 志願服務紀錄冊
      volunteerServiceRecord: new FormControl(''),
      // 榮譽卡
      honorCard: new FormControl(''),
      // 榮譽卡_狀態
      honorCard_status: new FormControl(''),
      // 榮譽卡_發給縣市
      honorCard_issuedToCountyCity: new FormControl(''),
      // 榮譽卡_編號
      honorCard_serialNumber: new FormControl(''),
      // 榮譽卡_發卡日期
      honorCard_issueDate: new FormControl(''),
      // 榮譽卡_有效日期
      honorCard_expiryDate: new FormControl(''),
      // 榮譽卡_年資起訖
      honorCard_servicePeriod: new FormControl(''),
      // 榮譽卡_申請日期
      honorCard_applicationDate: new FormControl(''),
      // 是否領取弘道志願服務證
      receivedHongdaoVolunteerCertificate: new FormControl(''),
      // 是否領取弘道志工背心
      receivedHongdaoVolunteerVest: new FormControl(''),
      // 是否領取弘道志工制服
      receivedHongdaoVolunteerUniform: new FormControl(''),
      // 是否領取弘道志工制服_數量
      receivedHongdaoVolunteerUniform_quantity: new FormControl(''),
      // 是否領取弘道志工制服_尺寸
      receivedHongdaoVolunteerUniform_size: new FormControl(''),
      // 是否領取弘道志工名片
      receivedHongdaoVolunteerCard: new FormControl(''),
      // 志工權利義務告知聲明書
      volunteerRightsAndDutiesDeclaration: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 複選框初始化
    const religiousAffiliationCheckedValues = this.religiousAffiliation
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.religiousAffiliationChange(religiousAffiliationCheckedValues);

    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
    // 檢視模式，禁用表單
    if (this.hd200ListService.isView) {
      this.form.disable();
    }
    // 禁用語言其他
    this.form.get('languages.languages_other')?.disable();
    // 禁用宗教信仰其他
    this.form.get('religiousAffiliation.religiousAffiliation_other')?.disable();
    // 禁用婚姻狀況其他
    this.form.get('maritalStatus_other')?.disable();
    // 志工來源其他
    this.form.get('volunteerSource.volunteerSource_other')?.disable();
    // 禁用主責人
    this.form.get('primaryContact')?.disable();
  }

  // 飲食習慣選項改變
  eatingHabitsChange(checkedValues: string[]) {
    this.eatingHabits.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 語言選項改變
  languagesChange(checkedValues: string[]) {
    this.languages.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      if (option.value === '06') {
        if (option.checked) {
          this.form.get('languages.languages_other')?.enable();
        } else {
          this.form.get('languages.languages_other')?.disable();
          this.form.get('languages.languages_other')?.reset();
        }
      }
    });
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

  // 志工來源選項改變
  volunteerSourceChange(checkedValues: string[]) {
    this.volunteerSource.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      if (option.value === '04') {
        if (option.checked) {
          this.form.get('volunteerSource.volunteerSource_other')?.enable();
        } else {
          this.form.get('volunteerSource.volunteerSource_other')?.disable();
          this.form.get('volunteerSource.volunteerSource_other')?.reset();
        }
      }
    });
  }

  // 服務交通工具選項改變
  serviceTransportationChange(checkedValues: string[]) {
    this.serviceTransportation.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 擁有交通工具選項改變
  hasTransportationChange(checkedValues: string[]) {
    this.hasTransportation.forEach((option) => {
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

  // 榮譽卡選項改變
  handleHonorCard(option: string) {
    if (option === '無') {
      this.form.get('honorCard_status')?.reset();
      this.form.get('honorCard_issuedToCountyCity')?.reset();
      this.form.get('honorCard_serialNumber')?.reset();
      this.form.get('honorCard_issueDate')?.reset();
      this.form.get('honorCard_expiryDate')?.reset();
      this.form.get('honorCard_servicePeriod')?.reset();
      this.form.get('honorCard_applicationDate')?.reset();
    }
  }

  // 是否領取弘道志工制服選項改變
  handleReceivedHongdaoVolunteerUniform(option: string) {
    if (option === '否') {
      this.form.get('receivedHongdaoVolunteerUniform_quantity')?.reset();
      this.form.get('receivedHongdaoVolunteerUniform_size')?.reset();
    }
  }

  // 顯示希望服務區域modal
  showModal(): void {
    this.isVisible = true;
    this.tempDesiredServiceArea = [
      ...this.form.get('desiredServiceArea')?.value,
    ];
  }

  // 希望服務區域modal確認按鈕事件
  handleOk(): void {
    this.isVisible = false;
    this.currentSelectedDesiredServiceArea = [
      ...this.form.get('desiredServiceArea')?.value,
    ];
    this.message.success('修改成功');
  }

  // 希望服務區域modal取消按鈕事件
  handleCancel(): void {
    this.isVisible = false;
    this.form.get('desiredServiceArea')?.setValue(this.tempDesiredServiceArea); // 還原原本的表單值
    this.message.error('操作取消');
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
  }

  // 新增
  create() {
    this.message.create('success', '新增成功');
    this.closeTab('志工基本資料');
  }

  // 關閉志工基本資料
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當單位名稱選擇後觸發
  handelUnitNameChange(option: string) {
    this.form.get('serviceUnit_select1')?.setValue(option);
  }

  // 服務紀錄冊上傳點擊事件
  volunteerServiceRecord_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }

  // 志工權利義務告知聲明書上傳點擊事件
  volunteerRightsObligationsDeclaration_handleChange(
    info: NzUploadChangeParam
  ): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }
}
