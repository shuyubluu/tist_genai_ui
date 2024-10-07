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
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { VolunteerInformationService } from './../../../../common/components/volunteerInformation/service/volunteer-information.service';
import { SearchResultData } from '../service/hd210-list.interface';
import { Hd210ListService } from '../service/hd210-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd210-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    VolunteerInformationComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd210-list.component.html',
  styleUrl: './hd210-list.component.scss',
})
export class Hd210ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 基礎訓完成情況
  basicTraining: boolean = true;
  // 特殊訓完成情況
  specialTraining: boolean = false;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      trainingDate: '113/02/01',
      trainingUnit: '外單位',
      trainingCourse: '基礎訓練',
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
    private hd210ListService: Hd210ListService, // hd210ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 日期區間_起始
      dateRange_start: new FormControl(''),
      // 日期區間_結束
      dateRange_end: new FormControl(''),
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
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.dateRange_start,
        this.form.value.dateRange_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 新增
  async create() {
    await this.router.navigate(['/hd210/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd210ListService.isCreate = true;
    this.hd210ListService.isView = false;
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd210/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd210ListService.isCreate = false;
    this.hd210ListService.isView = true;
  }

  // 關閉教育訓練清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當日期區間改變觸發
  onDateRangeChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.dateRange_start,
          this.form.value.dateRange_end
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
