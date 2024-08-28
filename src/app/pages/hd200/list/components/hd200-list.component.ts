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
      serviceUnit: '000 志工站',
      yearJoined: '093年',
    },
  ];
  // 服務單位select選項
  selectOptions_serviceUnit: string[] = [
    '000 志工站',
    '001 志工站',
    '002 志工站',
    '003 志工站',
    '004 志工站',
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
  }

  // 檢視
  async view() {
    await this.router.navigate(['/hd200/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
  }

  // 編輯
  async edit() {
    await this.router.navigate(['/hd200/form']);
    this.volunteerInformationService.isChoiceVolunteer = true;
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
