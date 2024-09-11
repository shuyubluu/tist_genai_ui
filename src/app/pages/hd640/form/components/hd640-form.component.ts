import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  taiwanHomePhoneValidator,
  taiwanMobilePhoneValidator,
} from '../../../../common/validator/taiwan-phone-validators';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd640ListService } from '../../list/service/hd640-list.service';

@Component({
  selector: 'app-hd640-form',
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
  templateUrl: './hd640-form.component.html',
  styleUrl: './hd640-form.component.scss',
})
export class Hd640FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 控制角色modal
  isRoleVisible: boolean = false;
  // 當前已選擇的角色
  currentSelectRole: string[] = [];
  // 任職單位select選項
  selectOptions_department: string[] = [
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
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // message
    public hd640ListService: Hd640ListService // hd640ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 姓名
      name: new FormControl(''),
      // 員工編號
      employeeId: new FormControl(''),
      // 職稱
      jobTitle: new FormControl(''),
      // 代理人
      agent: new FormControl(''),
      // 電子信箱
      email: new FormControl('', Validators.email),
      // 重設密碼
      resetPassword: new FormControl(''),
      // 辦公室電話
      officePhone: new FormControl('', [taiwanHomePhoneValidator()]),
      // 公務手機
      workMobile: new FormControl('', [taiwanMobilePhoneValidator()]),
      // 任職單位
      department: new FormControl(''),
      // 任職組別
      team: new FormControl(''),
      // 任職區域
      region: new FormControl(''),
      // 角色
      role: new FormControl(''),
      // 系統管理者
      sysAdmin: new FormControl(),
      // 總會(處長)
      generalDirector: new FormControl(),
      // 服務處(處長)
      serviceDirector: new FormControl(),
      // 組長
      teamLeader: new FormControl(),
      // 站點主責人
      siteCoordinator: new FormControl(),
      // 個案管理
      caseManagement: new FormControl(''),
      // 志工管理
      volunteerManagement: new FormControl(''),
      // 報表專區
      reportSection: new FormControl(''),
      // 簽核專區
      signatureSection: new FormControl(''),
      // 成果統計專區
      outcomeStatistics: new FormControl(''),
      // 系統管理權限
      systemAdminPermissions: new FormControl(''),
      // 單位檢視權限
      unitViewPermissions: new FormControl(''),
      // 全會
      headquartersManagement: new FormControl(),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd640ListService.isView) {
      this.form.disable();
    }
    // 禁用任職組別
    this.form.get('team')?.disable();
    // 禁用任職區域
    this.form.get('region')?.disable();
    // 禁用系統管理員選項
    this.form.get('sysAdmin')?.disable();
    // 禁用總會(處長)選項
    this.form.get('generalDirector')?.disable();
    // 禁用服務處(處長)選項
    this.form.get('serviceDirector')?.disable();
    // 禁用組長選項
    this.form.get('teamLeader')?.disable();
    // 禁用站點主責人選項
    this.form.get('siteCoordinator')?.disable();
    // 禁用全會選項
    this.form.get('headquartersManagement')?.disable();
  }

  // 開啟角色modal
  showRoleModal(): void {
    this.form.get('role')?.setValue(this.currentSelectRole);
    if (this.form.get('role')?.value.includes('系統管理者')) {
      this.form.get('sysAdmin')?.setValue(true);
    } else {
      this.form.get('sysAdmin')?.setValue(false);
    }
    if (this.form.get('role')?.value.includes('總會(處長)')) {
      this.form.get('generalDirector')?.setValue(true);
    } else {
      this.form.get('generalDirector')?.setValue(false);
    }
    if (this.form.get('role')?.value.includes('服務處(處長)')) {
      this.form.get('serviceDirector')?.setValue(true);
    } else {
      this.form.get('serviceDirector')?.setValue(false);
    }
    if (this.form.get('role')?.value.includes('組長')) {
      this.form.get('teamLeader')?.setValue(true);
    } else {
      this.form.get('teamLeader')?.setValue(false);
    }
    if (this.form.get('role')?.value.includes('站點主責人')) {
      this.form.get('siteCoordinator')?.setValue(true);
    } else {
      this.form.get('siteCoordinator')?.setValue(false);
    }
    this.isRoleVisible = true;
  }

  // 角色modal按下確認
  handleRoleOk(): void {
    this.currentSelectRole = this.form.get('role')?.value;
    this.isRoleVisible = false;
  }

  // 角色modal按下取消
  handleRoleCancel(): void {
    this.form.get('role')?.setValue(this.currentSelectRole);
    this.isRoleVisible = false;
  }

  // 角色選項勾選時觸發
  handleRoleChange(checkGroup: string[]): void {
    this.form.get('role')?.setValue(checkGroup);
    if (checkGroup.includes('系統管理者')) {
      this.form.get('sysAdmin')?.setValue(true);
    } else {
      this.form.get('sysAdmin')?.setValue(false);
    }
    if (checkGroup.includes('總會(處長)')) {
      this.form.get('generalDirector')?.setValue(true);
    } else {
      this.form.get('generalDirector')?.setValue(false);
    }
    if (checkGroup.includes('服務處(處長)')) {
      this.form.get('serviceDirector')?.setValue(true);
    } else {
      this.form.get('serviceDirector')?.setValue(false);
    }
    if (checkGroup.includes('組長')) {
      this.form.get('teamLeader')?.setValue(true);
    } else {
      this.form.get('teamLeader')?.setValue(false);
    }
    if (checkGroup.includes('站點主責人')) {
      this.form.get('siteCoordinator')?.setValue(true);
    } else {
      this.form.get('siteCoordinator')?.setValue(false);
    }
  }

  // 當任職單位選擇後觸發
  onDepartmentSelectChange(option: string): void {
    if (option === '---' || option === null) {
      // 如果沒有選任職單位則禁用任職組別
      this.form.get('team')?.disable();
      this.form.get('team')?.reset();
      // 如果沒有選任職單位則禁用任職區域
      this.form.get('region')?.disable();
      this.form.get('region')?.reset();
      // 如果沒有選任職單位則禁用總會(處長)
      this.disableGeneralDirector();
      // 如果沒有選任職單位則禁用服務處(處長)
      this.disableServiceDirector();
      // 如果沒有選任職單位則禁用組長
      this.disableTeamLeader();
      // 如果沒有選任職單位則禁用站點主責人
      this.disableSiteCoordinator();
      // 如果沒有選擇總會則禁用全會選項
      this.form.get('headquartersManagement')?.disable();
      this.form.get('headquartersManagement')?.reset();
    } else if (option === '總會') {
      // 如果選擇總會則啟用全會選項
      this.form.get('headquartersManagement')?.enable();
      // 如果任職單位有選擇總會則啟用任職組別
      this.form.get('team')?.enable();
      // 如果選擇任職單位但選總會則服務處(處長)不能選擇
      this.disableServiceDirector();
      // 如果選擇總會則啟用總會(處長)
      this.form.get('generalDirector')?.enable();
      // 如果任職組別和任職區域有選擇禁用總會(處長)
      if (
        (this.form.get('team')?.value !== '---' &&
          this.form.get('team')?.value) ||
        this.form.get('region')?.value
      ) {
        this.disableGeneralDirector();
      }
    } else {
      // 如果沒有選擇總會則禁用全會選項
      this.form.get('headquartersManagement')?.disable();
      this.form.get('headquartersManagement')?.reset();
      // 如果任職單位有選擇服務處則啟用任職組別
      this.form.get('team')?.enable();
      // 如果選服務處則總會(處長)不能選擇
      this.disableGeneralDirector();
      // 如果選擇服務則啟用服務處(處長)
      this.form.get('serviceDirector')?.enable();
      // 如果任職組別和任職區域有選擇禁用服務處(處長)
      if (
        (this.form.get('team')?.value !== '---' &&
          this.form.get('team')?.value) ||
        this.form.get('region')?.value
      ) {
        this.disableServiceDirector();
      }
    }
  }

  // 當任職組別選擇後觸發
  onTeamSelectChange(option: string): void {
    if (option === '---' || option === null) {
      // 如果沒有選任職組別則禁用任職區域
      this.form.get('region')?.disable();
      this.form.get('region')?.reset();
      // 如果沒有選任職組別則禁用組長
      this.disableTeamLeader();
      // 如果沒有選任職組別則禁用站點主責人
      this.disableSiteCoordinator();
      // 如果沒有選任職組別且任職單位選擇總會則啟用總會(處長)
      if (this.form.get('department')?.value === '總會') {
        this.form.get('generalDirector')?.enable();
        // 如果沒有選任職組別且任職單位選擇服務處則啟用服務處(處長)
      } else if (
        this.form.get('department')?.value !== null ||
        this.form.get('department')?.value !== '---'
      ) {
        this.form.get('serviceDirector')?.enable();
      }
    } else {
      // 如果任職區域都沒有選擇才觸發
      if (!this.form.get('region')?.value) {
        // 如果選擇任職組別則啟用組長
        this.form.get('teamLeader')?.enable();
        // 如果選擇任職組別則啟用站點主責人
        this.form.get('siteCoordinator')?.enable();
        // 如果有選任職組別則啟用區域
        this.form.get('region')?.enable();
        // 如果選擇任職組別則啟用站點主責人
        this.disableGeneralDirector();
        // 如果選擇任職組別禁用前一級的選項
        this.disableGeneralDirector();
        this.disableServiceDirector();
      }
    }
  }

  // 當任職區域選擇後觸發
  onRegionSelectChange(option: string): void {
    // 如果選擇任職區域則重設站點主責人
    this.disableSiteCoordinator();
    this.form.get('siteCoordinator')?.enable();
    if (option === '---' || option === null) {
      // 如果沒有選擇任職區域則啟用組長
      this.form.get('teamLeader')?.enable();
    } else {
      // 如果選擇任職區域則禁用組長
      this.disableTeamLeader();
    }
  }

  // 禁用總會(處長)
  disableGeneralDirector() {
    this.form.get('generalDirector')?.disable();
    this.form.get('generalDirector')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '總會(處長)'
    );
  }

  // 禁用服務處(處長)
  disableServiceDirector() {
    this.form.get('serviceDirector')?.disable();
    this.form.get('serviceDirector')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '服務處(處長)'
    );
  }

  // 禁用組長
  disableTeamLeader() {
    this.form.get('teamLeader')?.disable();
    this.form.get('teamLeader')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '組長'
    );
  }

  // 禁用站點主責人
  disableSiteCoordinator() {
    this.form.get('siteCoordinator')?.disable();
    this.form.get('siteCoordinator')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '站點主責人'
    );
  }

  // 個案管理選項勾選時觸發
  handleCaseManagementChange(checkGroup: string[]): void {
    this.form.get('caseManagement')?.setValue(checkGroup);
  }

  // 志工管理選項勾選時觸發
  handleVolunteerManagementChange(checkGroup: string[]): void {
    this.form.get('volunteerManagement')?.setValue(checkGroup);
  }

  // 報表專區選項勾選時觸發
  handleReportSectionChange(checkGroup: string[]): void {
    this.form.get('reportSection')?.setValue(checkGroup);
  }

  // 簽核專區選項勾選時觸發
  handleSignatureSectionChange(checkGroup: string[]): void {
    this.form.get('signatureSection')?.setValue(checkGroup);
  }

  // 成果統計專區選項勾選時觸發
  handleOutcomeStatisticsChange(checkGroup: string[]): void {
    this.form.get('outcomeStatistics')?.setValue(checkGroup);
  }

  // 系統管理權限選項勾選時觸發
  handleSystemAdminPermissionsChange(checkGroup: string[]): void {
    this.form.get('systemAdminPermissions')?.setValue(checkGroup);
  }

  // 單位檢視權限選項勾選時觸發
  handleUnitViewPermissionsChange(checkGroup: string[]): void {
    this.form.get('unitViewPermissions')?.setValue(checkGroup);
  }

  // 儲存
  save(): void {
    this.message.success('儲存成功');
  }

  // 新增
  create(): void {
    this.message.success('新增成功');
    this.closeTab('社工帳號管理');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
