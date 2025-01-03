import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hd610ListService } from '../../list/service/hd610-list.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd610-form',
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
  templateUrl: './hd610-form.component.html',
  styleUrl: './hd610-form.component.scss',
})
export class Hd610FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 任職單位是否自訂
  isCustomDepartment: boolean = false;
  // 任職組別是否自訂
  isCustomTeam: boolean = false;
  // 任職區域是否自訂
  isCustomRegion: boolean = false;
  // 是否禁用任職區域按鈕
  isDisabledRegionButton: boolean = false;
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

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    public hd610ListService: Hd610ListService, // hd610ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 任職單位
      department: new FormControl('', [Validators.required]),
      // 任職單位_輸入框
      department_input: new FormControl('', [Validators.required]),
      // 任職組別
      team: new FormControl(''),
      // 任職組別_輸入框
      team_input: new FormControl('', [Validators.required]),
      // 任職區域
      region: new FormControl(''),
      // 任職區域_輸入框
      region_input: new FormControl('', [Validators.required]),
      // 代碼
      code: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd610ListService.isView) {
      this.form.disable();
      // 編輯模式，禁用代碼欄位
    } else if (this.hd610ListService.isEdit) {
      this.form.get('code')?.disable();
    }

    // 禁用任職區域
    this.form.get('region')?.disable();
    this.isDisabledRegionButton = true;

    // 如果任職單位輸入框為空則禁用
    if (this.form.get('department_input')?.value === '') {
      this.form.get('department_input')?.disable();
    }

    // 如果任職團隊不是空的，則開啟任職組別
    if (this.form.get('team')?.value !== '') {
      this.form.get('region')?.enable();
    }

    // 如果任職團隊輸入框不是空的，則開啟任職組別，並自訂任職團隊輸入框
    if (this.form.get('team_input')?.value !== '') {
      this.form.get('region')?.enable();
      this.isCustomTeam = true;
    } else {
      this.form.get('team_input')?.disable();
    }

    // 如果任職團隊不是空的，則開啟任職組別
    if (this.form.get('region')?.value !== '') {
      this.form.get('region')?.enable();
      this.isDisabledRegionButton = false;
    }

    // 如果任職區域輸入框不是空的，則開啟任職區域輸入框，並自訂任職區域輸入框
    if (this.form.get('region_input')?.value !== '') {
      this.form.get('region_input')?.enable();
      this.isCustomRegion = true;
    } else {
      this.form.get('region_input')?.disable();
    }
  }

  // 開啟自訂任職單位
  onCustomDepartment() {
    this.isCustomDepartment = true;
    this.form.get('department')?.disable();
    this.form.get('department')?.reset();
    this.form.get('department_input')?.enable();
  }

  // 取消自訂任職單位
  onCancelCustomDepartment() {
    this.isCustomDepartment = false;
    this.form.get('department')?.enable();
    this.form.get('department_input')?.disable();
    this.form.get('department_input')?.reset();
  }

  // 開啟自訂任職組別
  onCustomTeam() {
    this.isCustomTeam = true;
    this.form.get('team')?.disable();
    this.form.get('team')?.reset();
    this.form.get('team_input')?.enable();
  }

  // 取消自訂任職組別
  onCancelCustomTeam() {
    this.isCustomTeam = false;
    this.form.get('team')?.enable();
    this.form.get('team_input')?.disable();
    this.form.get('team_input')?.reset();
  }

  // 選擇任職組別後觸發
  onSelectTeam(option: string) {
    this.onDisableCustomRegion(option);
  }

  // 自訂任職組別輸入時觸發
  onCustomTeamInput(content: string) {
    this.onDisableCustomRegion(content);
  }

  // 開啟自訂任職區域
  onCustomRegion() {
    this.isCustomRegion = true;
    this.form.get('region')?.disable();
    this.form.get('region')?.reset();
    this.form.get('region_input')?.enable();
  }

  // 取消自訂任職區域
  onCancelCustomRegion() {
    this.isCustomRegion = false;
    this.form.get('region')?.enable();
    this.form.get('region_input')?.disable();
    this.form.get('region_input')?.reset();
  }

  // 禁止自訂任職區域
  onDisableCustomRegion(content: string) {
    if (content === '' || content === null) {
      this.form.get('region')?.disable();
      this.form.get('region')?.reset();
      this.form.get('region_input')?.disable();
      this.form.get('region_input')?.reset();
      this.isDisabledRegionButton = true;
      this.isCustomRegion = false;
    } else {
      this.form.get('region')?.enable();
      this.isDisabledRegionButton = false;
    }
  }

  // 儲存
  save() {
    this.message.success('儲存成功');
  }

  // 新增
  create() {
    this.message.success('新增成功');
    this.closeTab();
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
