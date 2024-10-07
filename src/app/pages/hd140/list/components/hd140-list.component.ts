import { Hd140ListService } from './../service/hd140-list.service';
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
import {
  SearchResultData_socialWorker,
  SearchResultData_volunteer,
} from '../service/hd140-list.interface';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { compareDate } from '../../../../common/utils/compareDate';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd140-list',
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
  templateUrl: './hd140-list.component.html',
  styleUrl: './hd140-list.component.scss',
})
export class Hd140ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 搜尋結果模擬資料_社工
  searchResultData_socialWorker: SearchResultData_socialWorker[] = [
    {
      caseOpeningDate: '113/01/01',
      caseClassification: '高風險',
      responsiblePerson: '王小明',
      approvalStatus: '已簽核',
    },
  ];

  // 搜尋結果模擬資料_志工
  searchResultData_volunteer: SearchResultData_volunteer[] = [
    {
      caseOpeningDate: '113/02/01',
      responsiblePerson: '陳大明',
    },
  ];

  // 分頁器切割後的資料_社工
  get newSearchResultData_socialWorker(): SearchResultData_socialWorker[] {
    return this.searchResultData_socialWorker.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  // 分頁器切割後的資料_志工
  get newSearchResultData_volunteer(): SearchResultData_volunteer[] {
    return this.searchResultData_volunteer.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  constructor(
    public caseInformationService: CaseInformationService, // caseInformationService
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    public hd140ListService: Hd140ListService // hd140ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 查詢開始時間
      queryStartTime: new FormControl(''),
      // 查詢結束時間
      queryEndTime: new FormControl(''),
      // 訪視人員姓名
      responsiblePerson: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData_socialWorker.push(
        this.searchResultData_socialWorker[i]
      );
      this.searchResultData_volunteer.push(this.searchResultData_volunteer[i]);
    }
  }

  // 搜尋
  search() {
    // !TODO搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(this.form.value.queryStartTime, this.form.value.queryEndTime)
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 檢視
  view() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd140ListService.isEdit = false;
    this.hd140ListService.isCreate = false;
    this.hd140ListService.isView = true;
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd140ListService.isEdit = true;
    this.hd140ListService.isCreate = false;
    this.hd140ListService.isView = false;
  }

  // 檢視_志工
  view_volunteer() {
    this.router.navigate(['/hd140/form2']);
    this.caseInformationService.isChoiceCase = true;
    this.hd140ListService.isEdit = false;
    this.hd140ListService.isCreate = false;
    this.hd140ListService.isView = true;
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = false;
    this.hd140ListService.isEdit = false;
    this.hd140ListService.isCreate = true;
    this.hd140ListService.isView = false;
  }

  handleCurrentViewMode(mode: string) {
    this.hd140ListService.currentViewMode = mode;
  }

  // 關閉例行訪視記錄表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當查詢區間改變觸發
  onQueryTimeChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.queryStartTime,
          this.form.value.queryEndTime
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
