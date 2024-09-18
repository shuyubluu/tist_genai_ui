import { Hd100ListService } from './../service/hd100-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { PaginationComponent } from '../../../../common/components/pagination/pagination.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchResultData } from '../service/hd100-list.interface';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';

@Component({
  selector: 'app-hd100-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    PaginationComponent,
  ],
  templateUrl: './hd100-list.component.html',
  styleUrl: './hd100-list.component.scss',
})
export class Hd100ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceStatus: '持續服務',
      caseName: '王大明',
      gender: '男',
      dateOfBirth: '50/01/01',
      responsiblePerson: '吳小美',
      caseOpeningDate: '113/02/01',
      caseClassification: '中',
    },
  ];
  // 服務狀態select選項
  selectOptions_serviceStatus: string[] = [
    '持續服務',
    '暫停服務',
    '結案',
    '無',
  ];
  // 個案分級select選項
  selectOptions_caseClassification: string[] = [
    '高風險',
    '中風險',
    '低風險',
    '無',
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
    private caseInformationService: CaseInformationService, // caseInformationService
    private hd100ListService: Hd100ListService // hd100ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務狀態
      serviceStatus: new FormControl(''),
      // 個案姓名
      caseName: new FormControl(''),
      // 開案日期
      caseOpeningDate: new FormControl(''),
      // 個案分級
      caseClassification: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
  }

  // 搜尋個案資料
  search() {
    // !TODO: 搜尋邏輯
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd110']);
    this.caseInformationService.isChoiceCase = false;
    this.hd100ListService.isView = false;
    this.hd100ListService.isEdit = false;
    this.hd100ListService.isCreate = true;
  }

  // 檢視個案資料
  view() {
    this.router.navigate(['/hd110']);
    this.caseInformationService.isChoiceCase = true;
    this.hd100ListService.isView = true;
    this.hd100ListService.isEdit = false;
    this.hd100ListService.isCreate = false;
  }

  // 編輯個案資料
  edit() {
    this.router.navigate(['/hd110']);
    this.caseInformationService.isChoiceCase = true;
    this.hd100ListService.isView = false;
    this.hd100ListService.isEdit = true;
    this.hd100ListService.isCreate = false;
  }

  // 關閉個案資料清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
