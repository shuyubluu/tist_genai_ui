import { Hd250ListService } from './../service/hd250-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { SearchResultData } from '../service/hd250-list.interface';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

@Component({
  selector: 'app-hd250-list',
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
  templateUrl: './hd250-list.component.html',
  styleUrl: './hd250-list.component.scss',
})
export class Hd250ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // tab名稱
  tabName: string = '';
  // 檢查日期區間
  checkDateRange: boolean = false;
  // 投保狀態select選項
  selectOptions_evaluationResult: string[] = ['通過', '為期改善', '不予通過'];

  // 搜尋結果模擬資料
  // 由志工APP評分完後刷後資料
  searchResultData: SearchResultData[] = [
    {
      assessmentDate: '113/08/01',
      volunteerSelfRating: '85',
      supervisorScore: '85',
      evaluationResult: '為期改善',
      improvementPassed: '否',
      approvalStatus: '已簽核',
    },
    {
      assessmentDate: '113/08/03',
      volunteerSelfRating: '85',
      supervisorScore: '85',
      evaluationResult: '通過',
      improvementPassed: '',
      approvalStatus: '待簽',
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
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private hd250ListService: Hd250ListService, // hd250ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填寫日期區間_開始
      submissionDateRange_start: new FormControl(''),
      // 填寫日期區間_結束
      submissionDateRange_end: new FormControl(''),
      // 評核結果
      evaluationResult: new FormControl(''),
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

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
    if (
      compareDate(
        this.form.value.submissionDateRange_start,
        this.form.value.submissionDateRange_end
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
    await this.router.navigate(['/hd250/view']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd250ListService.setMode(true, false);
  }

  // 編輯
  async edit() {
    // 僅開放在可評分時間點選，其他時段禁止點選
    await this.router.navigate(['/hd250/edit']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd250ListService.setMode(false, true);
  }

  // 關閉保險
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當填寫日期區間改變觸發
  onSubmissionDateRangeChange(date: {
    year: string;
    month: string;
    day: string;
  }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.submissionDateRange_start,
          this.form.value.submissionDateRange_end
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
