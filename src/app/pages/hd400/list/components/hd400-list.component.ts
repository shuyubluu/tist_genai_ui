import { WelcomeService } from './../../../welcome/service/welcome.service';
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
import { SearchResultData } from '../service/hd400-list.interface';

@Component({
  selector: 'app-hd400-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd400-list.component.html',
  styleUrl: './hd400-list.component.scss',
})
export class Hd400ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      formName: '個案初評表',
      caseName: '王大明',
      applicant: '陳大壯',
      formFillDate: '113/01/01',
      applicationDate: '113/03/01',
      approvalStatus: '待簽核',
    },
  ];
  // 表單名稱select選項
  selectOptions_formName: string[] = [
    '全部',
    '個案初評表',
    '個案複評表',
    '個案訪視紀錄表',
    '個案結案表',
    '轉介單',
  ];
  // 簽核狀態select選項
  selectOptions_approvalStatus: string[] = [
    '全部',
    '待簽',
    '被退回',
    '已送審',
    '已簽核',
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
    private welcomeService: WelcomeService // welcomeService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 申請日期_起始
      applicationDate_start: new FormControl(''),
      // 申請日期_結束
      applicationDate_end: new FormControl(''),
      // 表單名稱
      formName: new FormControl(''),
      // 簽核狀態
      approvalStatus: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 當從儀表單簽核功能進入根據所點擊表單狀態去更改表單狀態
    if (this.welcomeService.currentFormState === 'approved') {
      this.form.get('approvalStatus')?.setValue('已簽核');
    } else if (this.welcomeService.currentFormState === 'rejected') {
      this.form.get('approvalStatus')?.setValue('被退回');
    } else if (this.welcomeService.currentFormState === 'submitted') {
      this.form.get('approvalStatus')?.setValue('已送審');
    } else {
      this.form.get('approvalStatus')?.setValue('待簽');
    }
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
  }

  // 檢視
  view() {
    // !TODO:檢視邏輯
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
