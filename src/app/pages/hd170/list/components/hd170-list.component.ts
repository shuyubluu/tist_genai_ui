import { Hd170ListService } from './../service/hd170-list.service';
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
import { SearchResultData } from '../service/hd170-list.interface';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';

@Component({
  selector: 'app-hd170-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    CaseInformationComponent,
  ],
  templateUrl: './hd170-list.component.html',
  styleUrl: './hd170-list.component.scss',
})
export class Hd170ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      formSubmissionDate: '113/01/01',
      filler: '王大明',
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
    private hd170ListService: Hd170ListService // hd170ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填單日期
      formSubmissionDate: new FormControl(''),
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
  }

  // 檢視
  view() {
    this.router.navigate(['/hd170/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd170ListService.isCreate = false;
    this.hd170ListService.isEdit = false;
    this.hd170ListService.isView = true;
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd170/form']);
    this.caseInformationService.isChoiceCase = true;
    this.hd170ListService.isEdit = true;
    this.hd170ListService.isCreate = false;
    this.hd170ListService.isView = false;
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd170/form']);
    this.caseInformationService.isChoiceCase = false;
    this.hd170ListService.isEdit = false;
    this.hd170ListService.isCreate = true;
    this.hd170ListService.isView = false;
  }

  // 關閉個案複評表清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
