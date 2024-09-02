import { Hd220ListService } from './../service/hd220-list.service';
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
import { SearchResultData } from '../service/hd220-list.interface';

@Component({
  selector: 'app-hd220-list',
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
  templateUrl: './hd220-list.component.html',
  styleUrl: './hd220-list.component.scss',
})
export class Hd220ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 表揚單位select選項
  selectOptions_recognizingUnit: string[] = ['外單位', '本單位'];
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      awardDate: '113/02/01',
      recognizingUnit: '外單位',
      awardName: '金駝獎',
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
    private hd220ListService: Hd220ListService // hd220ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 受獎日期
      awardDate: new FormControl(''),
      // 表揚單位
      recognizingUnit: new FormControl(''),
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
    await this.router.navigate(['/hd220/form']);
    this.hd220ListService.isCreate = true;
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd220/form']);
    this.hd220ListService.isCreate = false;
  }

  // 關閉獎勵表揚
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
