import { Hd100ListService } from './../service/hd100-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { compareDate } from '../../../../common/utils/compareDate';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { Hd100FormService } from '../../form/service/hd100-form.service';

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
    ErrorMessageComponent,
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
  // 檢查日期區間
  checkDateRange: boolean = false;
  // tab名稱
  tabName: string = '';
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
    '不予開案',
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
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private caseInformationService: CaseInformationService, // caseInformationService
    private hd100ListService: Hd100ListService, // hd100ListService
    private hd100FormService: Hd100FormService // hd100FormService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務狀態
      serviceStatus: new FormControl(''),
      // 個案姓名
      caseName: new FormControl(''),
      // 開案日期_起始
      caseOpeningDate_start: new FormControl(''),
      // 開案日期_結束
      caseOpeningDate_end: new FormControl(''),
      // 個案分級
      caseClassification: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 20; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
  }

  // 搜尋個案資料
  search() {
    // !TODO: 搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.caseOpeningDate_start,
        this.form.value.caseOpeningDate_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 檢視個案資料
  view() {
    this.hd100FormService.setCurrentRoute('hd100');
    this.router.navigate(['/hd110/view']);
    this.caseInformationService.isChoiceCase = true;
    this.hd100ListService.setMode(true, false, false);
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd110/create']);
    this.caseInformationService.isChoiceCase = false;
    this.hd100ListService.setMode(false, true, false);
  }

  // 編輯個案資料
  edit() {
    this.hd100FormService.setCurrentRoute('hd100');
    this.router.navigate(['/hd110/edit']);
    this.caseInformationService.isChoiceCase = true;
    this.hd100ListService.setMode(false, false, true);
  }

  // 關閉個案資料清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當開案日期區間改變觸發
  onCaseOpeningDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.caseOpeningDate_start,
          this.form.value.caseOpeningDate_end
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
