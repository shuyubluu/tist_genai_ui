import { Hd280ListService } from './../service/hd280-list.service';
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
import { SearchResultData } from '../service/hd280-list.interface';
import { VolunteerInformationService } from '../../../../common/components/volunteerInformation/service/volunteer-information.service';

@Component({
  selector: 'app-hd280-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd280-list.component.html',
  styleUrl: './hd280-list.component.scss',
})
export class Hd280ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 服務單位select選項
  selectOptions_serviceUnit: string[] = ['001志工站', '002志工站', '003志工站'];
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceUnit: '001志工站',
      volunteerName: '吳小美',
      volunteerId: '11300200001',
      serviceHours: '2.5',
      totalServiceHours: '22.5',
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
    private hd280ListService: Hd280ListService, // Hd280ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務單位
      serviceUnit: new FormControl(''),
      // 志工姓名
      volunteerName: new FormControl(''),
      // 志工編號
      volunteerId: new FormControl(''),
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
    await this.router.navigate(['/hd280/form']);
    this.volunteerInformationService.isChoiceVolunteer = false;
    this.hd280ListService.isCreate = true;
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd230']);
    this.volunteerInformationService.isChoiceVolunteer = true;
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
