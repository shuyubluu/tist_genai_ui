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
import { SearchResultData } from '../service/hd250-list.interface';

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
  // 投保狀態select選項
  selectOptions_evaluationResult: string[] = ['通過', '為期改善', '不予通過'];

  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      assessmentDate: '113/08/01',
      volunteerSelfRating: '85',
      supervisorScore: '85',
      evaluationResult: '為期改善',
      improvementPassed: '否',
    },
    {
      assessmentDate: '113/08/03',
      volunteerSelfRating: '85',
      supervisorScore: '85',
      evaluationResult: '通過',
      improvementPassed: '',
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
  async create() {
    await this.router.navigate(['/hd250/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd250/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
  }

  // 編輯
  async edit() {
    await this.router.navigate(['/hd250/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
  }

  // 關閉保險
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
