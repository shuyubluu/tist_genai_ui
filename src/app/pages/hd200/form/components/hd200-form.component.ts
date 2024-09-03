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
import {
  taiwanHomePhoneValidator_areaCode,
  taiwanHomePhoneValidator_phoneNumber,
  taiwanMobilePhoneValidator_firstFourDigits,
  taiwanMobilePhoneValidator_lastSixDigits,
} from '../../../../common/validator/taiwan-phone-validators';

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
  ],
  templateUrl: './hd200-form.component.html',
  styleUrl: './hd200-form.component.scss',
})
export class Hd200FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 宗教信仰是否禁用無選項
  isDisableReligiousAffiliationNone: boolean = false;
  // 宗教信仰是否禁用無選項以外的項目
  isDisableReligiousAffiliationOthers: boolean = false;
  // 服務單位select選項1
  selectOptions_serviceUnit_1: string[] = ['團隊1', '團隊1', '團隊1'];
  // 服務單位select選項2
  selectOptions_serviceUnit_2: string[] = ['2志工隊ˇ', '3志工隊ˇ', '4志工隊ˇ'];
  // 服務單位select選項3
  selectOptions_serviceUnit_3: string[] = ['30志工站', '31志工站', '32志工站'];
  // 單位名稱select選項
  selectOptions_unitName: string[] = ['單位1', '單位2', '單位3'];
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
    '鍋爐操作技術士證',
    '固定式起重機操作技術士證',
    '移動式起重機操作技術士證',
    '人字臂起重桿操作技術士證',
    '第一種壓力容器操作技術士證',
    '職業安全管理技術士證',
    '職業衛生管理技術士證',
    '職業安全衛生管理技術士證',
    '物理性因子作業環境測定技術士證',
    '化學性因子作業環境測定技術士證',
    '堆高機操作技術士證',
    '職業潛水技術士證',
    '就業服務技術士證',
    '高壓氣體特定設備操作技術士證',
    '高壓氣體容器操作技術士證',
    '特定瓦斯器具裝修技術士證',
    '一般手工電銲技術士證',
    '鋼筋技術士證',
    '模板技術士證',
    '半自動電銲技術士證',
    '園藝技術士證',
    '造園景觀技術士證',
    '建築塗裝技術士證',
    '營建防水技術士證',
    '混凝土技術士證',
    '測量技術士證',
    '營造工程管理技術士證',
    '機械停車設備裝修技術士證',
    '升降機裝修技術士證',
    '氬氣鎢極電銲技術士證',
    '建築物室內設計技術士證',
    '建築物室內裝修工程管理技術士證',
    '下水道設施操作維護技術士證',
    '家具木工技術士證',
    '建築工程管理技術士證',
    '裝潢木工技術士證',
    '下水道用戶排水設備配管技術士證',
    '喪禮服務技術士證',
    '汽車修護技術士證',
    '機器腳踏車修護技術士證',
    '飛機修護技術士證',
    '冷凍空調裝修技術士證',
    '自來水管配管技術士證',
    '氣體燃料導管配管技術士證',
    '輸電地下電纜裝修技術士證',
    '輸電架空線路裝修技術士證',
    '變壓器裝修技術士證',
    '工業用管配管技術士證',
    '太陽光電設置技術士證',
    '工業配線技術士證',
    '配電線路裝修技術士證',
    '配電電纜裝修技術士證',
    '通信技術（電信線路）技術士證',
    '用電設備檢驗技術士證',
    '變電設備裝修技術士證',
    '室內配線技術士證',
    '網路架設技術士證',
    '工業電子技術士證',
    '視聽電子技術士證',
    '儀表電子技術士證',
    '數位電子技術士證',
    '重機械操作技術士證',
    '照顧服務員技術士證',
    '保母人員技術士證',
    '定向行動訓練技術士證',
    '手語翻譯技術士證',
    '中餐烹調技術士證',
    '烘焙食品技術士證',
    '西餐烹調技術士證',
    '中式米食加工技術士證',
    '中式麵食加工技術士證',
    '食物製備技術士證',
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

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.志工入隊
      // 填表日期
      formDate: new FormControl('', [Validators.required]),
      // 志工入隊日期
      volunteerJoinDate: new FormControl('', [Validators.required]),

      // 2.資訊
      // 服務單位select1
      serviceUnit_select1: new FormControl('', [Validators.required]),
      // 服務單位select2
      serviceUnit_select2: new FormControl('', [Validators.required]),
      // 服務單位select3
      serviceUnit_select3: new FormControl('', [Validators.required]),
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
      birthDate: new FormControl('', [Validators.required]),
      // 身份證字號
      idNumber: new FormControl('', [Validators.required]),
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
      eatingHabits: new FormControl(''),
      // 學歷
      education: new FormControl(''),
      // 語言
      languages: new FormControl(''),
      // 語言_其他
      languages_other: new FormControl(''),
      // 通訊地址
      address_select: new FormControl('', [Validators.required]),
      // 通訊地址
      address: new FormControl('', [Validators.required]),
      // 宗教信仰
      religiousAffiliation: new FormControl(''),
      // 宗教信仰_其他
      religiousAffiliation_other: new FormControl(''),
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
      volunteerSource: new FormControl(''),
      // 志工來源_其他
      volunteerSource_other: new FormControl(''),
      // 志工職稱
      volunteerTitle: new FormControl('', [Validators.required]),
      // 希望服務區域
      desiredServiceArea: new FormControl('', [Validators.required]),
      // 服務交通工具
      serviceTransportation: new FormControl(''),
      // 擁有交通工具
      hasTransportation: new FormControl(''),

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
      // 志工權利義務告知聲明書
      volunteerRightsAndDutiesDeclaration: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 禁用語言其他
    this.form.get('languages_other')?.disable();
    // 禁用宗教信仰其他
    this.form.get('religiousAffiliation_other')?.disable();
    // 禁用婚姻狀況其他
    this.form.get('maritalStatus_other')?.disable();
    // 志工來源其他
    this.form.get('volunteerSource_other')?.disable();
  }

  // 飲食習慣選項改變
  eatingHabitsChange(checkGroup: string[]) {
    this.form.get('eatingHabits')?.setValue(checkGroup);
  }

  // 語言選項改變
  languagesChange(checkGroup: string[]) {
    this.form.get('languages')?.setValue(checkGroup);
    if (checkGroup.includes('7')) {
      this.form.get('languages_other')?.enable();
    } else {
      this.form.get('languages_other')?.disable();
      this.form.get('languages_other')?.reset();
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
  volunteerSourceChange(checkGroup: string[]) {
    this.form.get('volunteerSource')?.setValue(checkGroup);
    if (checkGroup.includes('5')) {
      this.form.get('volunteerSource_other')?.enable();
    } else {
      this.form.get('volunteerSource_other')?.reset();
      this.form.get('volunteerSource_other')?.disable();
    }
  }

  // 服務交通工具選項改變
  serviceTransportationChange(checkGroup: string[]) {
    this.form.get('serviceTransportation')?.setValue(checkGroup);
  }

  // 擁有交通工具選項改變
  hasTransportationChange(checkGroup: string[]) {
    this.form.get('hasTransportation')?.setValue(checkGroup);
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

  // 暫存草稿
  save() {
    this.message.create('success', '儲存成功');
  }

  // 關閉志工基本資料
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
