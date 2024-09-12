import { Hd610ListService } from './../service/hd610-list.service';
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
import { SearchResultData } from '../service/hd610-list.interface';

@Component({
  selector: 'app-hd610-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd610-list.component.html',
  styleUrl: './hd610-list.component.scss',
})
export class Hd610ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 角色層級select選項
  selectOptions_roleLevel: string[] = [
    '系統管理者',
    '總會(處長)',
    '服務處(處長)',
    '組長',
    '主責人',
  ];

  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      unitName: '總會(系統管理者)',
      code: '000',
      roleLevel: '系統管理者',
      isCanUse: true,
    },
    {
      unitName: '總會',
      code: '00',
      roleLevel: '總會(處長)',
      isCanUse: true,
    },
    {
      unitName: '事業發展處',
      code: '01',
      roleLevel: '服務處(處長)',
      isCanUse: true,
    },
    {
      unitName: '事業發展處',
      code: '01',
      roleLevel: '服務處(處長)',
      isCanUse: true,
    },
    {
      unitName: '事業發展中心- 高齡友善推廣組(總會事業)',
      code: 'A',
      roleLevel: '組長',
      isCanUse: true,
    },
    {
      unitName: '彭祖體驗長者導師志工隊',
      code: 'AA',
      roleLevel: '主責人',
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
    private hd610ListService: Hd610ListService // hd610ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 單位名稱
      unitName: new FormControl(''),
      // 代碼
      code: new FormControl(''),
      // 角色層級
      roleLevel: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.isView = false;
    this.hd610ListService.isCreate = false;
    this.hd610ListService.isEdit = true;
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
  }

  // 檢視
  view() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.isView = true;
    this.hd610ListService.isCreate = false;
    this.hd610ListService.isEdit = false;
  }

  // 新增
  create() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.isView = false;
    this.hd610ListService.isCreate = true;
    this.hd610ListService.isEdit = false;
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
