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
import { Hd620ListService } from '../service/hd620-list.service';
import { SearchResultData } from '../service/hd620-list.interface';

@Component({
  selector: 'app-hd620-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd620-list.component.html',
  styleUrl: './hd620-list.component.scss',
})
export class Hd620ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;

  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      roleName: '系統管理者',
      level: '1',
    },
    {
      roleName: '總會(處長)',
      level: '2',
    },
    {
      roleName: '服務處(處長)',
      level: '3',
    },
    {
      roleName: '組長',
      level: '4',
    },
    {
      roleName: '主責人',
      level: '5',
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
    private hd620ListService: Hd620ListService // hd620ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 角色名稱
      roleName: new FormControl(''),
      // 層級
      level: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd620/form']);
    this.hd620ListService.isView = false;
    this.hd620ListService.isCreate = false;
    this.hd620ListService.isEdit = true;
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
  }

  // 檢視
  view() {
    this.router.navigate(['/hd620/form']);
    this.hd620ListService.isView = true;
    this.hd620ListService.isCreate = false;
    this.hd620ListService.isEdit = false;
  }

  // 新增
  create() {
    this.router.navigate(['/hd620/form']);
    this.hd620ListService.isView = false;
    this.hd620ListService.isCreate = true;
    this.hd620ListService.isEdit = false;
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
