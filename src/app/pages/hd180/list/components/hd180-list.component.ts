import { Hd180ListService } from './../service/hd180-list.service';
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
import { SearchResultData } from '../service/hd180-list.interface';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd180-list',
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
  templateUrl: './hd180-list.component.html',
  styleUrl: './hd180-list.component.scss',
})
export class Hd180ListComponent implements OnInit {
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
      caseName: '王大明',
      gender: '男',
      closureDate: '113/02/08',
      closureReason: '案主失聯',
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
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    public caseInformationService: CaseInformationService, // caseInformationService
    private hd180ListService: Hd180ListService // hd180ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 結案日期_起始
      closureDate_start: new FormControl(''),
      // 結案日期_結束
      closureDate_end: new FormControl(''),
      // 個案姓名
      caseName: new FormControl(''),
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
    // !TODO:搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.closureDate_start,
        this.form.value.closureDate_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd100/form']);
    this.closeTab('個案結案名冊');
    this.caseInformationService.isChoiceCase = true;
    this.hd180ListService.isEdit = false;
    this.hd180ListService.isView = true;
    this.hd180ListService.isCanReview = false;
  }

  // 編輯
  async edit() {
    await this.router.navigate(['/hd100/form']);
    this.closeTab('個案結案名冊');
    this.caseInformationService.isChoiceCase = true;
    this.hd180ListService.isEdit = true;
    this.hd180ListService.isView = false;
    this.hd180ListService.isCanReview = false;
  }

  // 關閉個案結案名冊
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當結案日期區間改變觸發
  onClosureDateChange(date: {
    year: string;
    month: string;
    day: string;
  }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.closureDate_start,
          this.form.value.closureDate_end
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
