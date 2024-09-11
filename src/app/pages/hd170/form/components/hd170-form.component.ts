import { Component, OnInit } from '@angular/core';
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
import { TaiwanCitySelectComponent } from '../../../../common/components/select/taiwanCitySelect/components/taiwan-city-select.component';
import { EmergencyContact } from '../service/hd170-form.interface';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Hd170ListService } from '../../list/service/hd170-list.service';

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
    CaseInformationComponent,
    TaiwanCitySelectComponent,
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
  // 緊急聯絡人區塊假資料
  emergencyContact: EmergencyContact[] = [
    {
      emergencyContact_emergencyContact: '大壯',
      emergencyContact_relationship: '父親',
      emergencyContact_phone: '0912345678',
    },
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

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public hd170ListService: Hd170ListService // hd170ListService
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
      communicationAddress_select: new FormControl(),
      // 福利身份
      welfareStatus: new FormControl(''),
      // 社會福利補助
      socialWelfareSubsidy: new FormControl(''),

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
    // 檢視模式，禁用表單
    if (this.hd170ListService.isView) {
      this.form.disable();
    }
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

    // 生成緊急聯絡人假資料三筆
    for (let i = 0; i < 2; i++) {
      this.emergencyContact.push(this.emergencyContact[i]);
    }
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
    this.message.create('success', '儲存成功');
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
