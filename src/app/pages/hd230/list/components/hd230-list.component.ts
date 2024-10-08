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
import { SearchResultData } from '../service/hd230-list.interface';
import { Hd230ListService } from '../service/hd230-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd230-list',
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
  templateUrl: './hd230-list.component.html',
  styleUrl: './hd230-list.component.scss',
})
export class Hd230ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 服務內容select選項
  selectOptions_serviceContent: string[] = [
    '關懷訪視',
    '電話問安',
    '健康促進',
    '共餐服務',
    '門診服務(陪就醫)',
    '活動支援服務',
    '行政支援',
    '其他',
  ];
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceHoursRange: '113/02/01 - 113/02/28',
      serviceContent: '關懷訪視',
      serviceHours: '2.0',
      loginMethod: '系統登錄',
    },
    {
      serviceHoursRange: '113/02/01 - 113/02/28',
      serviceContent: '關懷訪視',
      serviceHours: '2.0',
      loginMethod: 'APP登錄',
    },
    {
      serviceHoursRange: '113/02/01 - 113/02/28',
      serviceContent: '關懷訪視',
      serviceHours: '2.0',
      loginMethod: 'APP登錄(異常)',
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
    private hd230ListService: Hd230ListService, // Hd230ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務時數區間_起始
      serviceHoursRange_start: new FormControl(''),
      // 服務時數區間_結束
      serviceHoursRange_end: new FormControl(''),
      // 服務內容
      serviceContent: new FormControl(''),
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
    // !TODO: 搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.serviceHoursRange_start,
        this.form.value.serviceHoursRange_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd280/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd230ListService.isCreate = false;
    this.hd230ListService.isView = true;
    this.hd230ListService.isEdit = false;
  }

  // 編輯
  async edit() {
    await this.router.navigate(['/hd280/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd230ListService.isCreate = false;
    this.hd230ListService.isView = false;
    this.hd230ListService.isEdit = true;
  }

  // 關閉服務時數
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當服務時期區間改變觸發
  onServiceHoursRangeChange(date: {
    year: string;
    month: string;
    day: string;
  }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.serviceHoursRange_start,
          this.form.value.serviceHoursRange_end
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
