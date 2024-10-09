import { Hd200ListService } from './../service/hd200-list.service';
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
import { SearchResultData } from '../service/hd200-list.interface';
import { VolunteerInformationService } from '../../../../common/components/volunteerInformation/service/volunteer-information.service';

@Component({
  selector: 'app-hd200-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd200-list.component.html',
  styleUrl: './hd200-list.component.scss',
})
export class Hd200ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceStatus: '服務中',
      volunteerName: '張小美',
      gender: '女',
      birthDate: '113/02/01',
      phoneNumber: '0912-345678',
      serviceUnit: '彭祖體驗長者導師志工隊',
      yearJoined: '093年',
    },
  ];
  // 服務單位select選項
  selectOptions_serviceUnit: string[] = [
    '彭祖體驗長者導師志工隊',
    '不老夢想125號志工隊',
    '北投(北投志工站)',
    '南港(南港志工站)',
    '松山(松山志工站)',
    '中正(中正志工站)',
    '內湖(內湖志工站)',
    '宜蘭(宜蘭志工站)',
    '八德(八德志工站)',
    '龍潭(龍潭志工站)',
    '平溪(平溪志工站)',
    '樹林(樹林志工站)',
    '三峽(三峽志工站)',
    '雙板(雙板志工站)',
    '新莊(新莊志工站)',
    '清水(清水志工站)',
    '太平(太平志工站)',
    '南屯(南屯志工站)',
    '北屯(北屯志工站)',
    '大雅(大雅志工站)',
    '中西(中西志工站)',
    '埔里(埔里志工站)',
    '西屯(西屯志工隊)',
    '和美(和美志工站)',
    '憶智樂活之家志工隊',
    '田中(田中志工站)',
    '員林(員林志工站)',
    '大林(大林志工站)',
    '嘉西(嘉西志工站)',
    '大寮(大寮志工站)',
    '三民區',
    '前金(志工站)',
    '前金區',
    '萬丹(萬丹志工站)',
    '潮州(潮州志工站)',
    '林邊(林邊志工站)',
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
    public volunteerInformationService: VolunteerInformationService, // volunteerInformationService
    private hd200ListService: Hd200ListService // hd200ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 姓名
      name: new FormControl(''),
      // 身分證字號
      idNumber: new FormControl(''),
      // 服務單位
      serviceUnit: new FormControl(''),
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
    await this.router.navigate(['/hd200/form']);
    this.volunteerInformationService.isChoiceVolunteer = false;
    this.hd200ListService.setMode(false, true, false);
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd200/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd200ListService.setMode(true, false, false);
  }

  // 編輯
  async edit() {
    await this.router.navigate(['/hd200/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
    this.hd200ListService.setMode(false, false, true);
  }

  // 關閉志工資料清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
