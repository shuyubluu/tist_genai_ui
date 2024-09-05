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
import { SearchResultData } from '../service/hd140-list.interface';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { CaseInformationService } from '../../../../common/components/caseInformation/serivce/case-information.service';

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
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      caseOpeningDate: '113/01/01',
      caseClassification: '高風險',
      caseName: '王大明',
      responsiblePersonJobTitle: '社工',
      responsiblePerson: '王小明',
    },
    {
      caseOpeningDate: '113/02/01',
      caseClassification: '中風險',
      caseName: '王大明',
      responsiblePersonJobTitle: '志工',
      responsiblePerson: '陳大明',
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
    private router: Router
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 查詢開始時間
      queryStartTime: new FormControl(''),
      // 查詢結束時間
      queryEndTime: new FormControl(''),
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
    // !TODO搜尋邏輯
  }

  // 檢視
  view() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = true;
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = true;
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd140/form']);
    this.caseInformationService.isChoiceCase = false;
  }

  // 關閉例行訪視記錄表
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
