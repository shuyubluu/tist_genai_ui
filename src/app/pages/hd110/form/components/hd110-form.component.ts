import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import {
  taiwanHomePhoneValidator_areaCode,
  taiwanHomePhoneValidator_phoneNumber,
  taiwanMobilePhoneValidator_firstFourDigits,
  taiwanMobilePhoneValidator_lastSixDigits,
} from '../../../../common/validator/taiwan-phone-validators';
import { taiwanIdValidator } from '../../../../common/validator/taiwan-id-validator';
import { TaiwanCitySelectComponent } from '../../../../common/components/select/taiwanCitySelect/components/taiwan-city-select.component';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd110-form',
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
  ],
  templateUrl: './hd110-form.component.html',
  styleUrl: './hd110-form.component.scss',
})
export class Hd110FormComponent implements OnInit {
  // 個案開案評估表單
  form: FormGroup;
  // 是否為轉介
  isReferral: boolean = false;
  // 社會福利補助是否禁用無選項
  isDisableNone: boolean = false;
  // 社會福利補助是否禁用無選項以外的項目
  isDisableNoneOthers: boolean = false;
  // 是否需填其他-自填指標
  isOtherFieldsRequired: boolean = false;
  // 個案來源select選項
  selectOptions_caseSource: string[] = [
    '主動發掘',
    '個案求助',
    '民眾通報',
    '會內轉介',
    '會外其他單位轉介',
    '長照中心派案',
  ];
  // 性別select選項
  selectOptions_gender: string[] = ['男', '女'];
  // 福利身分select選項
  selectOptions_welfareStatus: string[] = [
    '一般戶',
    '低收入戶',
    '中低收入戶',
    '邊緣戶',
  ];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 個案風險select選項
  selectOptions_caseClassification: string[] = [
    '低風險',
    '中風險',
    '高風險',
    '無',
  ];
  // 長者接受服務的意願select選項
  selectOptions_serviceAcceptanceByElderly: string[] = ['有意願', '無意願'];
  // 長者接受服務的意願select選項
  selectOptions_elderlyNeedsSatisfactionStatus: string[] = [
    '可提供',
    '不可提供',
  ];
  // 判定是否開案
  get isCaseOpened(): string | undefined {
    if (this.caseNotOpenedResult) {
      return '不開案';
    }
    if (
      this.form.get('isOlderPerson')?.value === '是' &&
      (this.form.get('isVulnerableGroup')?.value === '是' ||
        this.form.get('isIncludesSpecialIssues')?.value === '是' ||
        (this.form.get('isPriorityIssue')?.value === '是' &&
          this.form.get('isSelfReportedMetric')?.value?.length > 0)) &&
      this.form.get('caseClassification')?.value !== '無' &&
      this.form.get('isServiceAcceptanceByElderly')?.value === '有意願' &&
      this.form.get('isElderlyNeedsSatisfactionStatus')?.value === '可提供' &&
      this.form.get('isElderlyInServiceArea')?.value === '是'
    ) {
      return '開案';
    } else {
      return '不開案';
    }
  }
  // 輸出不開案的原因
  get caseNotOpenedResult(): string | undefined {
    let results: string[] = []; // 用陣列收集結果
    if (
      this.form.get('isOlderPerson')?.value === '否' ||
      (this.form.get('isVulnerableGroup')?.value === '否' &&
        this.form.get('isIncludesSpecialIssues')?.value === '否' &&
        this.form.get('isPriorityIssue')?.value === '否') ||
      this.form.get('caseClassification')?.value === '無' ||
      (this.form.get('isPriorityIssue')?.value === '是' &&
        this.form.get('isSelfReportedMetric')?.value?.length === 0)
    ) {
      results.push('尚未符合開案標準');
    }
    if (this.form.get('isServiceAcceptanceByElderly')?.value === '無意願') {
      results.push('長者無意願接受服務');
    }
    if (
      this.form.get('isElderlyNeedsSatisfactionStatus')?.value === '不可提供'
    ) {
      results.push('服務未能符合長者需求');
    }
    if (this.form.get('isElderlyInServiceArea')?.value === '否') {
      results.push('超出服務區域範圍');
    }
    if (results.length > 0) {
      return results.join('、'); // 用頓號連結所有結果
    } else {
      return '';
    }
  }

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private modal: NzModalService, // 彈窗
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.來源
      // 個案來源
      caseSource: new FormControl('', [Validators.required]),
      // 填表日期
      formFillingDate: new FormControl('', [Validators.required]),

      // 2.轉介單位資料
      // 轉介單位
      referralUnit: new FormControl('', [Validators.required]),
      // 聯絡人
      contactPerson: new FormControl('', [Validators.required]),
      // 轉介單位手機_前四碼
      referralUnit_mobilePhone_firstFourDigits: new FormControl('', [
        taiwanMobilePhoneValidator_firstFourDigits(),
      ]),
      // 轉介單位手機_後六碼
      referralUnit_mobilePhone_lastSixDigits: new FormControl('', [
        taiwanMobilePhoneValidator_lastSixDigits(),
      ]),
      // 轉介單位電話_區碼
      referralUnit_phone_areaCode: new FormControl(
        '',
        taiwanHomePhoneValidator_areaCode()
      ),
      // 轉介單位電話_電話
      referralUnit_phone_phoneNumber: new FormControl(
        '',
        taiwanHomePhoneValidator_phoneNumber()
      ),
      // 轉介單位傳真
      referralUnit_fax: new FormControl(''),
      // 轉介單位其他
      referralUnit_other: new FormControl(''),

      // 3.基本資料
      // 姓名
      name: new FormControl('', [Validators.required]),
      // 性別
      gender: new FormControl('', [Validators.required]),
      // 生日
      dateOfBirth: new FormControl('', [Validators.required]),
      // 身分證字號
      idNumber: new FormControl('', [Validators.required, taiwanIdValidator()]),
      // 手機_前四碼
      mobilePhone_firstFourDigits: new FormControl('', [
        taiwanMobilePhoneValidator_firstFourDigits(),
      ]),
      // 手機_後六碼
      mobilePhone_lastSixDigits: new FormControl('', [
        taiwanMobilePhoneValidator_lastSixDigits(),
      ]),
      // 電話_區碼
      phone_areaCode: new FormControl('', taiwanHomePhoneValidator_areaCode()),
      // 電話_電話
      phone_phoneNumber: new FormControl(
        '',
        taiwanHomePhoneValidator_phoneNumber()
      ),
      // 通訊地址下拉式選單
      communicationAddress_select: new FormControl(''),
      // 通訊地址
      communicationAddress: new FormControl(''),
      // 福利身分
      welfareStatus: new FormControl('', [Validators.required]),
      // 社會福利補助
      socialWelfareAssistance: new FormControl('', [Validators.required]),

      // 4.開案條件
      // 是否老年人口
      isOlderPerson: new FormControl('', [Validators.required]),
      // 是否符合弱勢群體
      isVulnerableGroup: new FormControl('', [Validators.required]),
      // 是否含有特殊議題
      isIncludesSpecialIssues: new FormControl('', [Validators.required]),
      // 是否符合服務處重點關注議題
      isPriorityIssue: new FormControl('', [Validators.required]),
      // 其他-自填指標
      isSelfReportedMetric: new FormControl('', [Validators.required]),
      // 評估個案有需求且有風險
      caseClassification: new FormControl('', [Validators.required]),
      // 自述/轉介之服務需求
      selfReferralServiceNeeds: new FormControl('', [Validators.required]),
      // 長者接受服務的意願
      isServiceAcceptanceByElderly: new FormControl('', [Validators.required]),
      // 長者需求弘道服務是否可滿足
      isElderlyNeedsSatisfactionStatus: new FormControl('', [
        Validators.required,
      ]),
      // 長者是否位於弘道服務區域內
      isElderlyInServiceArea: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    // 刷新時判定是否為轉介
    // 是的話用開啟所有轉介單位資料欄位
    // 否則一律關閉
    if (this.isReferral === false) {
      this.form.get('referralUnit')?.reset();
      this.form.get('contactPerson')?.reset();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.reset();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.reset();
      this.form.get('referralUnit_phone_areaCode')?.reset();
      this.form.get('referralUnit_phone_phoneNumber')?.reset();
      this.form.get('referralUnit_fax')?.reset();
      this.form.get('referralUnit_other')?.reset();
      this.form.get('referralUnit')?.disable();
      this.form.get('contactPerson')?.disable();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.disable();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.disable();
      this.form.get('referralUnit_phone_areaCode')?.disable();
      this.form.get('referralUnit_phone_phoneNumber')?.disable();
      this.form.get('referralUnit_fax')?.disable();
      this.form.get('referralUnit_other')?.disable();
    } else {
      this.form.get('referralUnit')?.enable();
      this.form.get('contactPerson')?.enable();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.enable();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.enable();
      this.form.get('referralUnit_phone_areaCode')?.enable();
      this.form.get('referralUnit_phone_phoneNumber')?.enable();
      this.form.get('referralUnit_fax')?.enable();
      this.form.get('referralUnit_other')?.enable();
    }

    // 刷新時判定是否需要輸入其他-自填指標
    // 是的話用開啟輸入其他-自填指標欄位
    // 否則一律關閉
    if (this.isOtherFieldsRequired === false) {
      this.form.get('isSelfReportedMetric')?.disable();
    } else {
      this.form.get('isSelfReportedMetric')?.enable();
    }
  }
  // 當個案來源的select發生變化時
  onCaseSourceSelectChange() {
    // 如果是轉介案才可以填寫轉介單位資料
    // 否則將轉介單位資料鎖定
    if (
      this.form.get('caseSource')?.value === '會內轉介' ||
      this.form.get('caseSource')?.value === '會外其他單位轉介' ||
      this.form.get('caseSource')?.value === '長照中心派案'
    ) {
      this.isReferral = true;
      this.form.get('referralUnit')?.enable();
      this.form.get('contactPerson')?.enable();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.enable();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.enable();
      this.form.get('referralUnit_phone_areaCode')?.enable();
      this.form.get('referralUnit_phone_phoneNumber')?.enable();
      this.form.get('referralUnit_fax')?.enable();
      this.form.get('referralUnit_other')?.enable();
    } else {
      this.isReferral = false;
      this.form.get('referralUnit')?.reset();
      this.form.get('contactPerson')?.reset();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.reset();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.reset();
      this.form.get('referralUnit_phone_areaCode')?.reset();
      this.form.get('referralUnit_phone_phoneNumber')?.reset();
      this.form.get('referralUnit_fax')?.reset();
      this.form.get('referralUnit_other')?.reset();
      this.form.get('referralUnit')?.disable();
      this.form.get('contactPerson')?.disable();
      this.form.get('referralUnit_mobilePhone_firstFourDigits')?.disable();
      this.form.get('referralUnit_mobilePhone_lastSixDigits')?.disable();
      this.form.get('referralUnit_phone_areaCode')?.disable();
      this.form.get('referralUnit_phone_phoneNumber')?.disable();
      this.form.get('referralUnit_fax')?.disable();
      this.form.get('referralUnit_other')?.disable();
    }
  }

  // 社會福利補助選項改變
  socialWelfareAssistanceChange(checkGroup: string[]) {
    this.form.get('socialWelfareAssistance')?.setValue(checkGroup);
    // 如果勾選了無將禁用其他選項
    // 勾取其他選項則禁用無
    if (checkGroup.includes('1')) {
      this.isDisableNoneOthers = true;
    } else {
      this.isDisableNoneOthers = false;
    }
    this.isDisableNone = checkGroup.some((check) =>
      ['2', '3', '4', '5', '6'].includes(check)
    );
  }

  // 是否符合服務處重點關注議題改變
  handleSelectChange_isPriorityIssue(option: string) {
    if (option === '是') {
      this.isOtherFieldsRequired = true;
      this.form.get('isSelfReportedMetric')?.enable();
    } else {
      this.isOtherFieldsRequired = false;
      this.form.get('isSelfReportedMetric')?.disable();
      this.form.get('isSelfReportedMetric')?.reset();
    }
  }
  
  // 暫存草稿
  save() {
    this.message.create('success', '草稿暫存成功');
  }

  // 點選下一頁後執行操作判斷
  onNextPage() {
    // if (this.form.valid) {
    // if (this.isCaseOpened === '開案') {
    this.router.navigate(['/hd120']);
    this.message.create('success', '開案成功');
    // } else {
    //   this.showConfirmationModal();
    // }
    // } else {
    //   this.message.create('warning', '所有必須填寫的項目請先完成填寫');
    // }
  }

  // 顯示送審modal
  showConfirmationModal() {
    this.modal.confirm({
      nzTitle: '是否送審?',
      nzContent: '該個案不符合開案評估條件，是否要送審？',
      nzOkText: '送審',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.message.create('success', '送審成功');
      },
      nzOnCancel: () => {
        this.message.create('error', '取消送審');
      },
    });
  }

  // 關閉個案開案評估表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}