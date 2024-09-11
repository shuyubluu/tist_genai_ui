import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd270ListService } from '../../list/service/hd270-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd270-form',
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
  templateUrl: './hd270-form.component.html',
  styleUrl: './hd270-form.component.scss',
})
export class Hd270FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 保險公司select選項
  selectOptions_insuranceStatus: string[] = ['國泰', '富邦', '新光', '第一'];
  // 經費來源select選項
  selectOptions_fundingSource: string[] = ['政府', '總會', '服務處'];
  // 投保類別select選項
  selectOptions_insuranceType: string[] = [
    '旅平險',
    '志工團保',
    '祥和',
    '獨老',
    '據點',
  ];
  // 投保單位select選項
  selectOptions_insuredUnit: string[] = [
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

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd270ListService: Hd270ListService // hd270ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [Validators.required]),
      // 退保日期
      terminationDate: new FormControl('', [Validators.required]),
      // 保險公司_下拉式選單
      insuranceCompany_select: new FormControl('', [Validators.required]),
      // 保險公司_搜尋關鍵字
      insuranceCompany_keyword: new FormControl('', [Validators.required]),
      // 經費來源
      fundingSource: new FormControl('', [Validators.required]),
      // 投保類別
      insuranceType: new FormControl('', [Validators.required]),
      // 投保日期區間_起始
      insuranceDate_start: new FormControl('', [Validators.required]),
      // 投保日期區間_結束
      insuranceDate_end: new FormControl('', [Validators.required]),
      // 保障內容
      coverageDetails: new FormControl('', [Validators.required]),
      // 投保費用
      insuranceCost: new FormControl('', [Validators.required]),
      // 政府補助
      governmentSubsidy: new FormControl('', [Validators.required]),
      // 單位自籌
      selfFunding: new FormControl('', [Validators.required]),
      // 理賠內容
      claimDetails: new FormControl('', [Validators.required]),
      // 死亡/殘廢_百萬
      deathOrDisabilityCoverage_million: new FormControl('', [
        Validators.required,
      ]),
      // 死亡/殘廢_萬
      deathOrDisabilityCoverage_tenThousand: new FormControl('', [
        Validators.required,
      ]),
      // 死亡/殘廢_千
      deathOrDisabilityCoverage_thousand: new FormControl('', [
        Validators.required,
      ]),
      // 死亡/殘廢_百
      deathOrDisabilityCoverage_hundred: new FormControl('', [
        Validators.required,
      ]),
      // 傷害醫療_萬
      injuryMedicalCoverage_tenThousand: new FormControl('', [
        Validators.required,
      ]),
      // 傷害醫療_千
      injuryMedicalCoverage_thousand: new FormControl('', [
        Validators.required,
      ]),
      // 傷害醫療_百
      injuryMedicalCoverage_hundred: new FormControl('', [Validators.required]),
      // 住院日額_萬
      hospitalizationDailyAllowance_tenThousand: new FormControl('', [
        Validators.required,
      ]),
      // 住院日額_千
      hospitalizationDailyAllowance_thousand: new FormControl('', [
        Validators.required,
      ]),
      // 住院日額_百
      hospitalizationDailyAllowance_hundred: new FormControl('', [
        Validators.required,
      ]),
      // 服務外的保障範圍
      coverageOutsideServiceScope: new FormControl('', [Validators.required]),
      // 服務外的保障範圍_其他
      coverageOutsideServiceScope_other: new FormControl('', [
        Validators.required,
      ]),
      // 投保單位
      insuredUnit: new FormControl(''),
      // 投保人員
      insuredPerson: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 禁用服務外的保障範圍_其他
    this.form.get('coverageOutsideServiceScope_other')?.disable();
  }

  // 服務外的保障範圍選項改變
  coverageOutsideServiceScopeChange(checkGroup: string[]) {
    this.form.get('coverageOutsideServiceScope')?.setValue(checkGroup);
    if (checkGroup.includes('4')) {
      this.form.get('coverageOutsideServiceScope_other')?.enable();
    } else {
      this.form.get('coverageOutsideServiceScope_other')?.disable();
      this.form.get('coverageOutsideServiceScope_other')?.reset();
    }
  }

  // 投保人員選項改變
  insuredPersonChange(checkGroup: string[]) {
    this.form.get('insuredPerson')?.setValue(checkGroup);
  }

  // 送出
  send() {
    this.message.create('success', '送出成功');
    this.closeTab('保險專區表');
  }

  // 新增
  create() {
    this.message.create('success', '新增成功');
    this.closeTab('保險專區表');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
