import { Hd150ListService } from './../service/hd150-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchResultData } from '../service/hd150-list.interface';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { compareDate } from '../../../../common/utils/compareDate';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd150-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    CaseInformationComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd150-list.component.html',
  styleUrl: './hd150-list.component.scss',
})
export class Hd150ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      caseOpeningDate: '113/01/01',
      caseClassification: '高風險',
      approvalStatus: '已簽核',
    },
    {
      caseOpeningDate: '113/01/01',
      caseClassification: '高風險',
      approvalStatus: '待簽',
    },
  ];
  // 分頁器切割後的資料
  get newSearchResultData(): SearchResultData[] {
    return this.searchResultData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  constructor(
    public caseInformationService: CaseInformationService, // caseInformationService
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private hd150ListService: Hd150ListService // hd150ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 查詢日期_起始
      queryDate_start: new FormControl(''),
      // 查詢日期_結束
      queryDate_end: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
  }

  // 搜尋
  search() {
    // !TODO: 搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.queryDate_start,
        this.form.value.queryDate_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 檢視
  view() {
    this.router.navigate(['/hd150/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd150ListService.setMode(true, false, false);
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd150/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd150ListService.setMode(false, false, true);
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd150/form']);
    this.caseInformationService.isChoiceCase = false;
    this.hd150ListService.setMode(false, true, false);
  }

  // 關閉個案複評表清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當查詢年份區間改變觸發
  onQueryDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.queryDate_start,
          this.form.value.queryDate_end
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
