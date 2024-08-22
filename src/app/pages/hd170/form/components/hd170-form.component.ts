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
  selector: 'app-hd170-form',
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
  templateUrl: './hd170-form.component.html',
  styleUrl: './hd170-form.component.scss',
})
export class Hd170FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 轉介單位select選項
  selectOptions_referralUnit: string[] = [
    '轉介單位1',
    '轉介單位2',
    '轉介單位3',
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

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private message: NzMessageService // 訊息
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.單位資料
      // 轉介單位
      referralUnit: new FormControl(''),
      // 單位電話
      unitPhone: new FormControl(''),
      // 單位傳真
      unitFax: new FormControl(''),

      // 2.基本資料
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
      // 通訊地址
      communicationAddress: new FormControl(''),
      // 通訊地址下拉式選單
      registeredAddress_select: new FormControl(),
      // 福利身份
      welfareStatus: new FormControl(''),
      // 社會福利補助
      socialWelfareSubsidy: new FormControl(''),

      // 3.緊急聯絡人
      // 緊急聯絡人1
      emergencyContact1: new FormControl(''),
      // 緊急聯絡人1關係
      emergencyContact1_relationship: new FormControl(''),
      // 緊急聯絡人1電話
      emergencyContact1_phone: new FormControl(''),
      // 緊急聯絡人2
      emergencyContact2: new FormControl(''),
      // 緊急聯絡人2關係
      emergencyContact2_relationship: new FormControl(''),
      // 緊急聯絡人2電話
      emergencyContact2_phone: new FormControl(''),
      // 緊急聯絡人3
      emergencyContact3: new FormControl(''),
      // 緊急聯絡人3關係
      emergencyContact3_relationship: new FormControl(''),
      // 緊急聯絡人3電話
      emergencyContact3_phone: new FormControl(''),

      // 4.轉介內容
      // 個案概況與處遇摘要
      caseSummaryAndTreatment: new FormControl('', [Validators.required]),
      // 轉介目的
      referralPurpose: new FormControl('', [Validators.required]),

      // 5.受理轉介單位
      // 受理轉介單位聯絡人
      referralUnitContactPerson: new FormControl('', [Validators.required]),
      // 受理轉介單位電話
      referralUnitPhone: new FormControl('', [Validators.required]),
      // 受理轉介單位傳真
      referralUnitFax: new FormControl('', [Validators.required]),

      // 6.主管簽核
      // 單位主管意見
      supervisorComments: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 禁用轉介單位
    this.form.get('referralUnit')?.disable();
    // 禁用單位電話
    this.form.get('unitPhone')?.disable();
    // 禁用單位傳真
    this.form.get('unitFax')?.disable();
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
    // 禁用通訊地址select
    this.form.get('communicationAddress_select')?.disable();
    // 禁用通訊地址input
    this.form.get('communicationAddress')?.disable();
    // 禁用福利身份select
    this.form.get('welfareStatus')?.disable();
    // 禁用緊急聯絡人1
    this.form.get('emergencyContact1')?.disable();
    // 禁用緊急聯絡人1關係
    this.form.get('emergencyContact1_relationship')?.disable();
    // 禁用緊急聯絡人1電話
    this.form.get('emergencyContact1_phone')?.disable();
    // 禁用緊急聯絡人2
    this.form.get('emergencyContact2')?.disable();
    // 禁用緊急聯絡人2關係
    this.form.get('emergencyContact2_relationship')?.disable();
    // 禁用緊急聯絡人2電話
    this.form.get('emergencyContact2_phone')?.disable();
    // 禁用緊急聯絡人3
    this.form.get('emergencyContact3')?.disable();
    // 禁用緊急聯絡人3關係
    this.form.get('emergencyContact3_relationship')?.disable();
    // 禁用緊急聯絡人3電話
    this.form.get('emergencyContact3_phone')?.disable();
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

  // 暫存草稿
  save() {
    this.message.create('success', '草稿儲存成功');
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab('轉介單');
  }

  // 關閉轉介單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
