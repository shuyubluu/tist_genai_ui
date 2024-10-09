import { Hd610ListService } from './../service/hd610-list.service';
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
import { SearchResultData } from '../service/hd610-list.interface';

@Component({
  selector: 'app-hd610-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd610-list.component.html',
  styleUrl: './hd610-list.component.scss',
})
export class Hd610ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 角色層級select選項
  selectOptions_roleLevel: string[] = [
    '系統管理者',
    '總會(處長)',
    '服務處(處長)',
    '組長',
    '主責人',
  ];
  // 任職單位select選項
  selectOptions_department: string[] = [
    '總會(系統管理者)',
    '總會',
    '事業發展處',
    '臺北服務處',
    '新北服務處',
    '臺中服務處',
    '彰化服務處',
    '嘉義服務處',
    '高雄服務處',
    '屏東服務處',
  ];
  // 任職組別select選項
  selectOptions_team: string[] = [
    '事業發展中心- 高齡友善推廣組(總會事業)',
    '不老夢想-不老夢想號組(總會事業夢想)',
    '松山社區服務中心- 社區服務組(台北社服松山)',
    '五結社區服務中心- 社區服務組(台北社服五結)',
    '桃園社區服務中心- 個案服務組(新北社服桃園)',
    '新莊社區服務中心- 個案服務組(新北社服新莊)',
    '西區社區服務中心- 個案服務組(台中社服西區)',
    '台中中一區居家長照機構- 主任室(台中居一)',
    '彰化社區服務中心- 社區服務北彰組(彰化社服彰化)',
    '溪湖社區服務中心- 社區服務溪湖組(彰化社服溪湖)',
    '溪湖社區服務中心- 社區服務南彰組(彰化社服溪湖)',
    '大林社區服務中心- 社區服務大林組(嘉義社服大林)',
    '市區社區服務中心- 社區服務市區組(嘉義社服市區)',
    '不老食光- 不老食光鼓山店(高雄)',
    '左營社區服務中心- 個案服務組(高雄社服左營)',
    '前金社區服務中心- 社區服務組(高雄社服前金)',
    '潮州社區服務中心- 個案服務組(屏東社服潮州)',
  ];
  // 任職區域select選項
  selectOptions_region: string[] = [
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
      department: '系統管理者',
      team: '',
      region: '',
      code: 'A0',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '總會',
      team: '',
      region: '',
      code: 'A01',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '事業發展處',
      team: '',
      region: '',
      code: 'A001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '事業發展處',
      team: '事業發展中心- 高齡友善推廣組(總會事業)',
      region: '',
      code: 'A0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '事業發展處',
      team: '事業發展中心- 高齡友善推廣組(總會事業)',
      region: '彭祖體驗長者導師志工隊',
      code: 'AA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '事業發展處',
      team: '不老夢想-不老夢想號組(總會事業夢想)',
      region: '',
      code: 'A0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '事業發展處',
      team: '不老夢想-不老夢想號組(總會事業夢想)',
      region: '不老夢想125號志工隊',
      code: 'AB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '',
      region: '',
      code: 'B001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '',
      code: 'B0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '北投(北投志工站)',
      code: 'BA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '南港(南港志工站))',
      code: 'BB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '松山(松山志工站))',
      code: 'BC',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '中正(中正志工站)',
      code: 'BD',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '松山社區服務中心- 社區服務組(台北社服松山)',
      region: '內湖(內湖志工站)',
      code: 'BE',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '臺北服務處',
      team: '五結社區服務中心- 社區服務組(台北社服五結)',
      region: '',
      code: 'B0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺北服務處',
      team: '五結社區服務中心- 社區服務組(台北社服五結)',
      region: '宜蘭(宜蘭志工站',
      code: 'BF',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '',
      region: '',
      code: 'C001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '桃園社區服務中心- 個案服務組(新北社服桃園)',
      region: '',
      code: 'C0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '桃園社區服務中心- 個案服務組(新北社服桃園)',
      region: '八德(八德志工站)',
      code: 'CA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '桃園社區服務中心- 個案服務組(新北社服桃園)',
      region: '龍潭(龍潭志工站)',
      code: 'CB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '',
      code: 'C0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '平溪(平溪志工站)',
      code: 'CC',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '樹林(樹林志工站)',
      code: 'CD',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '三峽(三峽志工站)',
      code: 'CE',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '雙板(雙板志工站)',
      code: 'CF',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '新北服務處',
      team: '新莊社區服務中心- 個案服務組(新北社服新莊)',
      region: '新莊(新莊志工站)',
      code: 'CG',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '臺中服務處',
      team: '',
      region: '',
      code: 'D001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '',
      code: 'D0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '清水(清水志工站)',
      code: 'DA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '太平(太平志工站)',
      code: 'DB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '南屯(南屯志工站)',
      code: 'DC',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '北屯(北屯志工站)',
      code: 'DD',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '大雅(大雅志工站)',
      code: 'DE',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '中西(中西志工站)',
      code: 'DF',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '西區社區服務中心- 個案服務組(台中社服西區)',
      region: '埔里(埔里志工站)',
      code: 'DG',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '臺中服務處',
      team: '台中中一區居家長照機構- 主任室(台中居一)',
      region: '',
      code: 'D0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '臺中服務處',
      team: '台中中一區居家長照機構- 主任室(台中居一)',
      region: '西屯(西屯志工隊)',
      code: 'DH',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '彰化服務處',
      team: '',
      region: '',
      code: 'E001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '彰化服務處',
      team: '彰化社區服務中心- 社區服務北彰組(彰化社服彰化)',
      region: '',
      code: 'E0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '彰化服務處',
      team: '彰化社區服務中心- 社區服務北彰組(彰化社服彰化)',
      region: '和美(和美志工站)',
      code: 'EA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '彰化服務處',
      team: '溪湖社區服務中心- 社區服務溪湖組(彰化社服溪湖)',
      region: '',
      code: 'E0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '彰化服務處',
      team: '溪湖社區服務中心- 社區服務溪湖組(彰化社服溪湖)',
      region: '憶智樂活之家志工隊',
      code: 'EB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '彰化服務處',
      team: '溪湖社區服務中心- 社區服務南彰組(彰化社服溪湖)',
      region: '',
      code: 'E0003',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '彰化服務處',
      team: '溪湖社區服務中心- 社區服務南彰組(彰化社服溪湖)',
      region: '田中(田中志工站)',
      code: 'EC',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '彰化服務處',
      team: '溪湖社區服務中心- 社區服務南彰組(彰化社服溪湖)',
      region: '員林(員林志工站)',
      code: 'ED',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '嘉義服務處',
      team: '',
      region: '',
      code: 'F001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '嘉義服務處',
      team: '大林社區服務中心- 社區服務大林組(嘉義社服大林)',
      region: '',
      code: 'F0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '嘉義服務處',
      team: '大林社區服務中心- 社區服務大林組(嘉義社服大林)',
      region: '大林(大林志工站)',
      code: 'FA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '嘉義服務處',
      team: '市區社區服務中心- 社區服務市區組(嘉義社服市區)',
      region: '',
      code: 'F0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '嘉義服務處',
      team: '市區社區服務中心- 社區服務市區組(嘉義社服市區)',
      region: '嘉西(嘉西志工站)',
      code: 'FB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '高雄服務處',
      team: '',
      region: '',
      code: 'G001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '高雄服務處',
      team: '不老食光- 不老食光鼓山店(高雄)',
      region: '',
      code: 'G0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '高雄服務處',
      team: '不老食光- 不老食光鼓山店(高雄)',
      region: '大寮(大寮志工站)',
      code: 'GA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '高雄服務處',
      team: '左營社區服務中心- 個案服務組(高雄社服左營)',
      region: '',
      code: 'G0002',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '高雄服務處',
      team: '左營社區服務中心- 個案服務組(高雄社服左營)',
      region: '三民區',
      code: 'GB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '高雄服務處',
      team: '前金社區服務中心- 社區服務組(高雄社服前金)',
      region: '',
      code: 'G0003',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '高雄服務處',
      team: '前金社區服務中心- 社區服務組(高雄社服前金)',
      region: '前金(志工站)',
      code: 'GC',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '高雄服務處',
      team: '前金社區服務中心- 社區服務組(高雄社服前金)',
      region: '前金區',
      code: 'GD',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },

    {
      department: '屏東服務處',
      team: '',
      region: '',
      code: 'H001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '屏東服務處',
      team: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
      region: '',
      code: 'H0001',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '屏東服務處',
      team: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
      region: '萬丹(萬丹志工站)',
      code: 'HA',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '屏東服務處',
      team: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
      region: '潮州(潮州志工站)',
      code: 'HB',
      isCanUse: true,
      unitSupervisor: '陳小明',
    },
    {
      department: '屏東服務處',
      team: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
      region: '林邊(林邊志工站)',
      code: 'HC',
      isCanUse: true,
      unitSupervisor: '陳小明',
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
    private hd610ListService: Hd610ListService // hd610ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 任職單位
      department: new FormControl(''),
      // 任職組別
      team: new FormControl(''),
      // 任職區域
      region: new FormControl(''),
      // 單位主管
      unitSupervisor: new FormControl(''),
      // 代碼
      code: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.setMode(false, false, true);
  }

  // 搜尋
  search() {
    // !TODO:搜尋邏輯
  }

  // 檢視
  view() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.setMode(true, false, false);
  }

  // 新增
  create() {
    this.router.navigate(['/hd610/form']);
    this.hd610ListService.setMode(false, true, false);
  }

  // 停用
  disable(index: number) {
    this.searchResultData[index].isCanUse = false;
  }

  // 啟用
  enable(index: number) {
    this.searchResultData[index].isCanUse = true;
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
