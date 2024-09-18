import { Hd300ListService } from './../service/hd300-list.service';
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
import { SearchResultData } from '../service/hd300-list.interface';

@Component({
  selector: 'app-hd300-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd300-list.component.html',
  styleUrl: './hd300-list.component.scss',
})
export class Hd300ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;

  searchResultData: SearchResultData[] = [
    {
      uploadDate: '113/01/01',
      reportTitle: '新人訓練',
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
    private hd300ListService: Hd300ListService // hd300ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 上傳日期
      uploadDate: new FormControl(''),
      // 報表名稱
      reportTitle: new FormControl(''),
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
  }

  // 新增
  create() {
    this.router.navigate(['/hd300/form']);
    this.hd300ListService.isCreate = true;
    this.hd300ListService.isView = false;
    this.hd300ListService.isEdit = false;
  }

  // 檢視
  view() {
    this.router.navigate(['/hd300/form']);
    this.hd300ListService.isCreate = false;
    this.hd300ListService.isView = true;
    this.hd300ListService.isEdit = false;
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd300/form']);
    this.hd300ListService.isCreate = false;
    this.hd300ListService.isView = false;
    this.hd300ListService.isEdit = true;
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}