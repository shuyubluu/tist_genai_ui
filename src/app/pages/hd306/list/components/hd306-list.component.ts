import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CheckboxGroup,
  SearchResultData,
} from '../service/hd306-list.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

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
    ErrorMessageComponent,
  ],
  templateUrl: './hd306-list.component.html',
  styleUrl: './hd306-list.component.scss',
})
export class Hd306ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 檢查日期區間
  checkDateRange: boolean = false;
  // tab名稱
  tabName: string = '';
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

  // 搜尋結果模擬資料
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

  // 匯出檔案勾選狀態
  exportFile: CheckboxGroup[] = [
    {
      label: '志工基本資料表(Excel)',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '志工教育訓練(Excel)',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '志工時數(Excel)',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '志工考核表清冊(Excel)',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '志工紀錄冊(Word)',
      value: '04',
      checked: false,
      disabled: false,
    },
    {
      label: '志願服務績效證明書(Word)',
      value: '05',
      checked: false,
      disabled: false,
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
    private message: NzMessageService // message
  ) {
    // 匯出檔案CheckboxGroup
    const exportFileGroup = this.createCheckboxGroup(this.exportFile);

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
      exportFile: new FormGroup(exportFileGroup),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 複選框初始化
    const exportFileCheckedValues = this.exportFile
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.exportFileChange(exportFileCheckedValues);
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(this.form.value.joinDate_start, this.form.value.joinDate_end)
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
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
  exportFileChange(checkedValues: string[]) {
    this.exportFile.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 創建checkbox group
  createCheckboxGroup(options: any[]): { [key: string]: FormControl } {
    const group: { [key: string]: FormControl } = {};
    options.forEach((option) => {
      group[option.value] = new FormControl(option.checked);
      if (option.disabled) {
        group[option.value].disable(); // 如果該選項應該被禁用，則禁用對應的 FormControl
      }
    });
    return group;
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當入隊日期區間改變觸發
  onJoinDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.joinDate_start,
          this.form.value.joinDate_end
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
