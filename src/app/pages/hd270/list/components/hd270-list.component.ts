import { Hd270ListService } from './../service/hd270-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  SearchResultData,
  ViewData_searchResultData,
} from '../service/hd270-list.interface';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd270-list',
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
  templateUrl: './hd270-list.component.html',
  styleUrl: './hd270-list.component.scss',
})
export class Hd270ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 分頁器當前頁數
  currentPage: number = 1;
  // 檢視資料分頁器一頁多少筆數據
  viewData_pageSize: number = 10;
  // 檢視資料分頁器當前頁數
  viewData_currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 是否展示檢視資料
  isShowViewData: boolean = false;
  // 投保狀態select選項
  selectOptions_insuranceStatus: string[] = ['在保', '退保/過期'];

  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      insuranceCompany: '富邦',
      insuranceType: '志工團隊',
      fundingSource: '總會',
      insuranceStatus: '已加保',
      insurancePeriod: '2024/01/01 ~ 2024/12/31',
    },
  ];
  // 檢視資料_搜尋結果模擬資料
  viewData_searchResultData: ViewData_searchResultData[] = [
    {
      insuredPerson: '吳小美',
    },
  ];

  // 分頁器切割後的資料
  get newSearchResultData(): SearchResultData[] {
    return this.searchResultData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }
  // 檢視資料_分頁器切割後的資料
  get viewData_newSearchResultData(): ViewData_searchResultData[] {
    return this.viewData_searchResultData.slice(
      (this.viewData_currentPage - 1) * this.viewData_pageSize,
      this.viewData_currentPage * this.viewData_pageSize
    );
  }

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    public hd270ListService: Hd270ListService // hd270ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 投保期間_起始
      insurancePeriod_start: new FormControl(''),
      // 投保期間_結束
      insurancePeriod_end: new FormControl(''),
      // 投保狀態
      insuranceStatus: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
    // 生成多筆模擬檢視資料搜尋結果資料
    for (let i = 0; i < 10; i++) {
      this.viewData_searchResultData.push(this.viewData_searchResultData[i]);
    }
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.insurancePeriod_start,
        this.form.value.insurancePeriod_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 新增
  create() {
    this.router.navigate(['/hd270/create']);
    this.hd270ListService.setMode(false, true, false);
  }

  // 檢視
  view() {
    this.router.navigate(['/hd270/view']);
    this.hd270ListService.setMode(true, false, false);
  }

  // 列出投保人
  policyHolder() {
    this.isShowViewData = true;
  }

  // 申請退保
  async surrender() {
    await this.router.navigate(['/hd270/surrender']);
    this.hd270ListService.setMode(false, false, true);
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當檢視資料改變頁數時觸發
  onViewDataPageIndexChange(currentPage: number) {
    this.viewData_currentPage = currentPage;
  }

  // 當投保日期區間改變觸發
  onInsurancePeriodChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.insurancePeriod_start,
          this.form.value.insurancePeriod_end
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
