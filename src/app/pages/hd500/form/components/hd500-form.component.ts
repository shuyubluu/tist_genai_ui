import { Hd500ListService } from './../../list/service/hd500-list.service';
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
import { DateValidators } from '../../../../common/validator/date-validator';
import {
  CaseOpeningClosingDataCaseClosureReason,
  CaseOpeningClosingDataCaseSource,
  CaseOpeningClosingDataTotalCaseCountVisits,
  CaseOpeningClosingDataTotalCasesAndPeople,
  ServiceAndDemandStatsTop10DemandedNeeds,
  ServiceAndDemandStatsTop10ServiceContents,
  ServiceAndDemandStatsVolunteerServiceCount,
  TotalCaseAge,
  TotalCaseCount,
  TotalCaseGender,
  TotalCaseIdentityType,
  TotalCaseRisk,
  TotalCaseRiskAndIdentityType,
  TotalCaseRiskAndSpecialIssues,
  TotalCaseSocialWelfareSubsidy,
  TotalCaseSocialWelfareSubsidyAndSpecialIssues,
  TotalCaseSpecialIssues,
} from '../service/hd500-form.interface';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd500-form',
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
  templateUrl: './hd500-form.component.html',
  styleUrl: './hd500-form.component.scss',
})
export class Hd500FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 查看單位select選項
  selectOptions_unit: string[] = ['全會', '服務處'];
  // 任職單位select選項
  selectOptions_department: string[] = [
    '事業發展處',
    '臺北服務處',
    '新北服務處',
    '臺中服務處',
    '彰化服務處',
    '嘉義服務處',
    '高雄服務處',
    '屏東服務處',
  ];
  // 模擬個案基本情形_總人數搜尋資料
  totalCaseCount: TotalCaseCount[] = [
    {
      unitName: '臺北服務處',
      numberOfPeople: '58',
      percentage: '13%',
    },
    {
      unitName: '新北服務處',
      numberOfPeople: '62',
      percentage: '14%',
    },
    {
      unitName: '臺中服務處',
      numberOfPeople: '150',
      percentage: '34%',
    },
    {
      unitName: '彰化服務處',
      numberOfPeople: '88',
      percentage: '20%',
    },
    {
      unitName: '嘉義服務處',
      numberOfPeople: '26',
      percentage: '13%',
    },
    {
      unitName: '高雄服務處',
      numberOfPeople: '20',
      percentage: '13%',
    },
    {
      unitName: '屏東服務處',
      numberOfPeople: '35',
      percentage: '13%',
    },
    {
      unitName: '事業',
      numberOfPeople: '0',
      percentage: '0%',
    },
    {
      unitName: '總計',
      numberOfPeople: '439',
      percentage: '100%',
    },
  ];
  // 模擬個案基本情形_性別搜尋資料
  totalCaseGender: TotalCaseGender[] = [
    {
      unitName: '臺北服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '新北服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '臺中服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '彰化服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '嘉義服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '高雄服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '屏東服務處',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
    {
      unitName: '總計',
      numberOfPeople_men: '58',
      percentage_men: '13%',
      numberOfPeople_women: '58',
      percentage_women: '13%',
    },
  ];
  // 模擬個案基本情形_年齡搜尋資料
  totalCaseAge: TotalCaseAge[] = [
    {
      ageRange: '54以下',
      numberOfPeople: '58',
      percentage: '13%',
    },
    {
      ageRange: '55-64',
      numberOfPeople: '62',
      percentage: '14%',
    },
    {
      ageRange: '65-74',
      numberOfPeople: '150',
      percentage: '34%',
    },
    {
      ageRange: '75-85',
      numberOfPeople: '88',
      percentage: '20%',
    },
    {
      ageRange: '85以上',
      numberOfPeople: '26',
      percentage: '13%',
    },
    {
      ageRange: '總計',
      numberOfPeople: '20',
      percentage: '13%',
    },
  ];
  // 模擬個案基本情形_身份別搜尋資料
  totalCaseIdentityType: TotalCaseIdentityType[] = [
    {
      identityType: '一般戶',
      numberOfPeople: '58',
      percentage: '13%',
    },
    {
      identityType: '低收入戶',
      numberOfPeople: '62',
      percentage: '14%',
    },
    {
      identityType: '中低收入戶',
      numberOfPeople: '150',
      percentage: '34%',
    },
    {
      identityType: '邊緣戶',
      numberOfPeople: '88',
      percentage: '20%',
    },
    {
      identityType: '總計',
      numberOfPeople: '20',
      percentage: '13%',
    },
  ];
  // 模擬個案基本情形_社福補助搜尋資料
  totalCaseSocialWelfareSubsidy: TotalCaseSocialWelfareSubsidy[] = [
    {
      subsidyName: '身心障礙',
      numberOfPeople: '58',
    },
    {
      subsidyName: '原住民',
      numberOfPeople: '62',
    },
    {
      subsidyName: '新住民',
      numberOfPeople: '150',
    },
    {
      subsidyName: '榮民',
      numberOfPeople: '88',
    },
    {
      subsidyName: '榮眷',
      numberOfPeople: '20',
    },
  ];
  // 模擬個案基本情形_特殊議題搜尋資料
  totalCaseSpecialIssues: TotalCaseSpecialIssues[] = [
    {
      issueName: '獨居',
      numberOfPeople: '58',
    },
    {
      issueName: '老老',
      numberOfPeople: '62',
    },
    {
      issueName: '雙重老化',
      numberOfPeople: '150',
    },
    {
      issueName: '疾病狀態-失智症',
      numberOfPeople: '88',
    },
  ];
  // 模擬個案基本情形_風險搜尋資料
  totalCaseRisk: TotalCaseRisk[] = [
    {
      unitName: '臺北服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '新北服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '臺中服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '彰化服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '嘉義服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '高雄服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '屏東服務處',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
    {
      unitName: '全會總計',
      numberOfPeople_high: '58',
      percentage_high: '13%',
      numberOfPeople_medium: '58',
      percentage_medium: '13%',
      numberOfPeople_low: '58',
      percentage_low: '13%',
    },
  ];
  // 模擬個案基本情形_風險ｘ特殊議題搜尋資料
  totalCaseRiskAndSpecialIssues: TotalCaseRiskAndSpecialIssues[] = [
    {
      issueName: '獨居',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      issueName: '老老',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      issueName: '雙重老化',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      issueName: '疾病狀態-失智症',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
  ];
  // 模擬個案基本情形_風險ｘ身份別搜尋資料
  totalCaseRiskAndIdentityType: TotalCaseRiskAndIdentityType[] = [
    {
      identityType: '一般戶',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      identityType: '低收入戶',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      identityType: '中低收入戶',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
    {
      identityType: '邊緣戶',
      numberOfPeople_high: '58',
      numberOfPeople_medium: '58',
      numberOfPeople_low: '58',
    },
  ];
  // 模擬個案基本情形_社福補助ｘ特殊議題搜尋資料
  totalCaseSocialWelfareSubsidyAndSpecialIssues: TotalCaseSocialWelfareSubsidyAndSpecialIssues[] =
    [
      {
        subsidyName: '身心障礙',
        numberOfPeople_livingAlone: '70',
        numberOfPeople_elderlyCouple: '58',
        numberOfPeople_doubleElderlyCouples: '30',
        numberOfPeople_dementiaStatus: '20',
      },
      {
        subsidyName: '原住民',
        numberOfPeople_livingAlone: '70',
        numberOfPeople_elderlyCouple: '58',
        numberOfPeople_doubleElderlyCouples: '30',
        numberOfPeople_dementiaStatus: '20',
      },
      {
        subsidyName: '新住民',
        numberOfPeople_livingAlone: '70',
        numberOfPeople_elderlyCouple: '58',
        numberOfPeople_doubleElderlyCouples: '30',
        numberOfPeople_dementiaStatus: '20',
      },
      {
        subsidyName: '榮民',
        numberOfPeople_livingAlone: '70',
        numberOfPeople_elderlyCouple: '58',
        numberOfPeople_doubleElderlyCouples: '30',
        numberOfPeople_dementiaStatus: '20',
      },
      {
        subsidyName: '榮眷',
        numberOfPeople_livingAlone: '70',
        numberOfPeople_elderlyCouple: '58',
        numberOfPeople_doubleElderlyCouples: '30',
        numberOfPeople_dementiaStatus: '20',
      },
    ];
  // 模擬開結案數據_總案數_人數搜尋資料
  caseOpeningClosingDataTotalCasesAndPeople: CaseOpeningClosingDataTotalCasesAndPeople[] =
    [
      {
        month: '一月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '二月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '三月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '四月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '五月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '六月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '七月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '八月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '九月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十一月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十二月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '總計',
        activeCases: '3',
        closedCases: '0',
      },
    ];
  // 模擬開結案數據_總案數_人次搜尋資料
  caseOpeningClosingDataTotalCaseCountVisits: CaseOpeningClosingDataTotalCaseCountVisits[] =
    [
      {
        month: '一月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '二月',
        activeCases: '0',
        closedCases: '0',
      },
      {
        month: '三月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '四月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '五月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '六月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '七月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '八月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '九月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十一月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '十二月',
        activeCases: '1',
        closedCases: '0',
      },
      {
        month: '總計',
        activeCases: '2',
        closedCases: '0',
      },
    ];
  // 模擬開結案數據_開案來源搜尋資料
  caseOpeningClosingDataCaseSource: CaseOpeningClosingDataCaseSource[] = [
    {
      caseSource: '主動發掘',
      numberOfPeople: '25',
    },
    {
      caseSource: '個案求助',
      numberOfPeople: '2',
    },
    {
      caseSource: '民眾通報',
      numberOfPeople: '3',
    },
    {
      caseSource: '會內轉介',
      numberOfPeople: '6',
    },
    {
      caseSource: '會外其他單位轉介',
      numberOfPeople: '3',
    },
    {
      caseSource: '長照中心派案',
      numberOfPeople: '5',
    },
  ];
  // 模擬開結案數據_結案原因搜尋資料
  caseOpeningClosingDataCaseClosureReason: CaseOpeningClosingDataCaseClosureReason[] =
    [
      {
        caseClosureReason: '個案失聯',
        numberOfPeople: '25',
      },
      {
        caseClosureReason: '超出服務區域範圍',
        numberOfPeople: '2',
      },
      {
        caseClosureReason: '個案決定退出服務',
        numberOfPeople: '3',
      },
      {
        caseClosureReason: '服務未能符合個案需求',
        numberOfPeople: '6',
      },
      {
        caseClosureReason: '個案逝世',
        numberOfPeople: '3',
      },
      {
        caseClosureReason: '進入長照機構',
        numberOfPeople: '5',
      },
      {
        caseClosureReason: '需求已被滿足',
        numberOfPeople: '5',
      },
      {
        caseClosureReason: '其他',
        numberOfPeople: '7',
      },
    ];
  // 模擬服務與需求統計_評估需求最熱門前10搜尋資料
  serviceAndDemandStatsTop10DemandedNeeds: ServiceAndDemandStatsTop10DemandedNeeds[] =
    [
      {
        demandedNeeds: '復健',
        visitCount: '400',
      },
      {
        demandedNeeds: '日間照顧',
        visitCount: '300',
      },
      {
        demandedNeeds: '輔具修理',
        visitCount: '200',
      },
      {
        demandedNeeds: '居家環境清潔',
        visitCount: '400',
      },
      {
        demandedNeeds: '志工關懷訪視服務',
        visitCount: '300',
      },
      {
        demandedNeeds: '輔具修理',
        visitCount: '200',
      },
      {
        demandedNeeds: '復健',
        visitCount: '400',
      },
      {
        demandedNeeds: '衛教宣導',
        visitCount: '300',
      },
      {
        demandedNeeds: '用藥安全指導',
        visitCount: '200',
      },
      {
        demandedNeeds: '家庭托顧',
        visitCount: '200',
      },
    ];
  // 模擬服務與需求統計_服務內容最熱門前10搜尋資料
  serviceAndDemandStatsTop10ServiceContents: ServiceAndDemandStatsTop10ServiceContents[] =
    [
      {
        serviceContents: '代餐物資',
        visitCount: '400',
      },
      {
        serviceContents: '衛教宣導',
        visitCount: '400',
      },
      {
        serviceContents: '營養評估',
        visitCount: '400',
      },
      {
        serviceContents: '日間照顧',
        visitCount: '400',
      },
      {
        serviceContents: '居家服務',
        visitCount: '400',
      },
      {
        serviceContents: '機構安置',
        visitCount: '400',
      },
      {
        serviceContents: '居家修繕',
        visitCount: '400',
      },
      {
        serviceContents: '身障證明申請',
        visitCount: '400',
      },
      {
        serviceContents: '居家服務',
        visitCount: '400',
      },
      {
        serviceContents: '媒合據點活動',
        visitCount: '400',
      },
    ];
  // 模擬服務與需求統計_志工提供服務人次搜尋資料
  serviceAndDemandStatsVolunteerServiceCount: ServiceAndDemandStatsVolunteerServiceCount[] =
    [
      {
        volunteerService: '關懷訪視',
        visitCount: '400',
      },
      {
        volunteerService: '電話問安',
        visitCount: '400',
      },
      {
        volunteerService: '健康促進',
        visitCount: '400',
      },
      {
        volunteerService: '共餐服務',
        visitCount: '400',
      },
      {
        volunteerService: '門診服務(陪就醫)',
        visitCount: '400',
      },
      {
        volunteerService: '活動支援服務',
        visitCount: '400',
      },
      {
        volunteerService: '行政支援',
        visitCount: '400',
      },
    ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd500ListService: Hd500ListService // hd500ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    // 搜尋表單
    this.form = new FormGroup({
      // 查看單位
      unit: new FormControl('', [Validators.required]),
      // 服務處
      department: new FormControl('', [Validators.required]),
      // 統計日期_起始
      statisticsDate_start: new FormControl('', [DateValidators.dateValidator]),
      // 統計日期_結束
      statisticsDate_end: new FormControl('', [DateValidators.dateValidator]),
    });
  }

  ngOnInit(): void {
    // 禁用服務處
    this.form.get('department')?.disable();
  }

  // 搜尋統計內容
  search() {
    // !TODO: 搜尋邏輯
    // !TODO: 搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.statisticsDate_start,
        this.form.value.statisticsDate_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 查看單位select選項變化時觸發
  onUnitChange(option: string) {
    if (option === '服務處') {
      this.form.get('department')?.enable();
    } else {
      this.form.get('department')?.disable();
      this.form.get('department')?.reset();
    }
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當統計日期區間改變觸發
  onStatisticsDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.statisticsDate_start,
          this.form.value.statisticsDate_end
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
