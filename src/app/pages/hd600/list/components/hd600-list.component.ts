import { Hd600ListService } from './../service/hd600-list.service';
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
import { SearchResultData } from '../service/hd600-list.interface';

@Component({
  selector: 'app-hd600-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd600-list.component.html',
  styleUrl: './hd600-list.component.scss',
})
export class Hd600ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;

  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      insuranceCompanyName: '富邦',
      isCanUse: true,
    },
    {
      insuranceCompanyName: '台新',
      isCanUse: false,
    },
    {
      insuranceCompanyName: '第一',
      isCanUse: true,
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
    private hd600ListService: Hd600ListService // hd600ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 保險公司名稱
      insuranceCompanyName: new FormControl(''),
    });
  }

  ngOnInit(): void {}

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
    this.router.navigate(['/hd600/form']);
    this.hd600ListService.isView = true;
    this.hd600ListService.isCreate = false;
    this.hd600ListService.isEdit = false;
  }

  // 新增
  create() {
    this.router.navigate(['/hd600/form']);
    this.hd600ListService.isView = false;
    this.hd600ListService.isCreate = true;
    this.hd600ListService.isEdit = false;
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd600/form']);
    this.hd600ListService.isView = false;
    this.hd600ListService.isCreate = false;
    this.hd600ListService.isEdit = true;
  }

  // 停用
  disable(index: number) {
    this.searchResultData[index].isCanUse = false;
  }

  // 啟用
  enable(index: number) {
    this.searchResultData[index].isCanUse = true;
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
