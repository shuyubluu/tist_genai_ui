import { VolunteerData } from './../../../../common/components/volunteerInformation/service/volunteer-information.interface';
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
import { SearchResultData } from '../service/hd306-list.interface';
import { of } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd306-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd306-list.component.html',
  styleUrl: './hd306-list.component.scss',
})
export class Hd306ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 當前已選取的志工
  currentSelectedVolunteer: string[] = [];
  // 控制匯出modal是否顯示
  isVisible: boolean = false;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;

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

  searchResultData: SearchResultData[] = [
    {
      serviceUnit: '彭祖體驗長者導師志工隊',
      volunteerID: '11300200001',
      name: '吳小美',
      gender: '女',
      idNumber: 'D223456789',
      joinDate: '113/01/01',
      isChoice: false,
    },
    {
      serviceUnit: '不老夢想125號志工隊',
      volunteerID: '11300200002',
      name: '陳大壯',
      gender: '男',
      idNumber: 'D123456789',
      joinDate: '113/01/03',
      isChoice: false,
    },
    {
      serviceUnit: '林邊(林邊志工站)',
      volunteerID: '11300200003',
      name: '王小琪',
      gender: '女',
      idNumber: 'D233456789',
      joinDate: '113/01/05',
      isChoice: false,
    },
    {
      serviceUnit: '宜蘭(宜蘭志工站)',
      volunteerID: '11300200004',
      name: '張小明',
      gender: '男',
      idNumber: 'D133456789',
      joinDate: '113/01/07',
      isChoice: false,
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
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務單位
      serviceUnit: new FormControl(''),
      // 姓名
      name: new FormControl(''),
      // 志工編號
      volunteerID: new FormControl(''),
      // 身份證字號
      idNumber: new FormControl(''),
      // 入隊日期_起始
      joinDate_start: new FormControl(''),
      // 入隊日期_結束
      joinDate_end: new FormControl(''),
      // 匯出的檔案
      exportFile: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
  }

  // 打開匯出modal
  showModal(): void {
    if (this.currentSelectedVolunteer.length === 0) {
      this.message.error('請先選取志工');
      return;
    }
    this.isVisible = true;
  }

  // 匯出
  export(): void {
    // !TODO:匯出邏輯
    this.message.success('匯出成功');
    this.isVisible = false;
  }

  // 取消匯出
  handleCancel(): void {
    this.message.error('取消操作');
    this.isVisible = false;
  }

  // 選取
  pick(volunteer: SearchResultData) {
    volunteer.isChoice = true;
    this.currentSelectedVolunteer.push(volunteer.volunteerID);
  }

  // 取消選取
  cancelPick(volunteer: SearchResultData) {
    volunteer.isChoice = false;
    this.currentSelectedVolunteer = this.currentSelectedVolunteer.filter(
      (item) => item !== volunteer.volunteerID
    );
  }

  // 當匯出檔案的選項改變時觸發
  handleExportFileChange(checkGroup: string[]) {
    this.form.get('exportFile')?.setValue(checkGroup);
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
