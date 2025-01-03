import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd270ListService } from '../../list/service/hd270-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';
import { DateValidators } from '../../../../common/validator/date-validator';
import { CheckboxGroup } from '../service/hd270-form.interface';
import { checkboxGroupValidator } from '../../../../common/validator/checkbox-group-validator';

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
  // 檢查日期區間
  checkDateRange: boolean = false;
  // tab名稱
  tabName: string = '';
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

  // 服務外的保障範圍勾選狀態
  coverageOutsideServiceScope: CheckboxGroup[] = [
    {
      label: '志工會議',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '教育訓練',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '外縣市活動',
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

  // 投保人員勾選狀態
  insuredPerson: CheckboxGroup[] = [
    {
      label: '吳小美',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '陳大天',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '張大壯',
      value: '02',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd270ListService: Hd270ListService // hd270ListService
  ) {
    // 接收後端回傳質料
    // this.coverageOutsideServiceScope =
    // this.insuredPerson =

    // 服務外的保障範圍CheckboxGroup
    const coverageOutsideServiceScopeGroup = this.createCheckboxGroup(
      this.coverageOutsideServiceScope
    );
    coverageOutsideServiceScopeGroup['coverageOutsideServiceScope_other'] =
      new FormControl('', [Validators.required]);

    // 投保人員CheckboxGroup
    const insuredPersonGroup = this.createCheckboxGroup(this.insuredPerson);

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [Validators.required]),
      // 退保日期
      terminationDate: new FormControl('', [Validators.required]),
      // 保險公司_下拉式選單
      insuranceCompany_select: new FormControl('', [Validators.required]),
      // 經費來源
      fundingSource: new FormControl('', [Validators.required]),
      // 投保類別
      insuranceType: new FormControl('', [Validators.required]),
      // 投保日期區間_起始
      insuranceDate_start: new FormControl('', [DateValidators.dateValidator]),
      // 投保日期區間_結束
      insuranceDate_end: new FormControl('', [DateValidators.dateValidator]),
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
      coverageOutsideServiceScope: new FormGroup(
        coverageOutsideServiceScopeGroup,
        [checkboxGroupValidator()]
      ),
      // 投保單位
      insuredUnit: new FormControl(''),
      // 投保人員
      insuredPerson: new FormGroup(insuredPersonGroup),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd270ListService.isView) {
      this.form.disable();
    }
    // 退保模式，禁用退保日期以外的欄位
    if (this.hd270ListService.isSurrender) {
      this.form.disable();
      this.form.get('surrenderDate')?.enable();
    }
    // 禁用服務外的保障範圍_其他
    this.form
      .get('coverageOutsideServiceScope.coverageOutsideServiceScope_other')
      ?.disable();

    // 複選框初始化
    const coverageOutsideServiceScopeCheckedValues =
      this.coverageOutsideServiceScope
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.coverageOutsideServiceScopeChange(
      coverageOutsideServiceScopeCheckedValues
    );

    const insuredPersonCheckedValues = this.insuredPerson
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.insuredPersonChange(insuredPersonCheckedValues);
  }

  // 服務外的保障範圍選項改變
  coverageOutsideServiceScopeChange(checkedValues: string[]) {
    this.coverageOutsideServiceScope.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      if (option.value === '03') {
        if (option.checked) {
          this.form
            .get(
              'coverageOutsideServiceScope.coverageOutsideServiceScope_other'
            )
            ?.enable();
        } else {
          this.form
            .get(
              'coverageOutsideServiceScope.coverageOutsideServiceScope_other'
            )
            ?.disable();
          this.form
            .get(
              'coverageOutsideServiceScope.coverageOutsideServiceScope_other'
            )
            ?.reset();
        }
      }
    });
  }

  // 投保人員選項改變
  insuredPersonChange(checkedValues: string[]) {
    this.insuredPerson.forEach((option) => {
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

  // 送出
  send() {
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.insuranceDate_start,
        this.form.value.insuranceDate_end
      )
    ) {
      this.checkDateRange = false;
    } else {
      this.checkDateRange = true;
    }
    if (!this.checkDateRange) {
      this.message.create('success', '送出成功');
      this.closeTab();
    }
  }

  // 新增
  create() {
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.insuranceDate_start,
        this.form.value.insuranceDate_end
      )
    ) {
      this.checkDateRange = false;
    } else {
      this.checkDateRange = true;
    }
    if (!this.checkDateRange) {
      this.message.create('success', '新增成功');
      this.closeTab();
    }
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 當投保日期起迄改變觸發
  onInsuranceDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.insuranceDate_start,
          this.form.value.insuranceDate_end
        )
      ) {
        this.checkDateRange = false;
        return;
      } else {
        this.checkDateRange = true;
      }
    } else {
      this.checkDateRange = false;
    }
  }
}
