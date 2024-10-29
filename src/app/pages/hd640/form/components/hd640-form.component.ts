import { Hd640ListService } from './../../list/service/hd640-list.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
import { HondaoUnitComponent } from '../../../../common/components/hondaoUnit/components/hondao-unit.component';
import { CheckboxGroup } from '../service/hd640-form.interface';

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
    HondaoUnitComponent,
  ],
  templateUrl: './hd640-form.component.html',
  styleUrl: './hd640-form.component.scss',
})
export class Hd640FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 控制角色modal
  isRoleVisible: boolean = false;
  // 控制單位檢視權限modal
  isUnitViewPermissionsVisible: boolean = false;
  // 當前已選擇的角色
  currentSelectRole: string[] = [];
  // 當前所選的單位檢視權限
  currentSelectedUnitViewPermissions: string[] = [];
  // 用來暫存單位檢視權限
  tempUnitViewPermissions: string[] = [];
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

  // 職稱select選項
  selectOptions_jobTitle: string[] = [
    // 模擬用資料
    '職稱1',
    '職稱2',
    '職稱3',
  ];

  // 功能權限_個案管理勾選狀態
  functionPermission_caseManagement: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 功能權限_志工管理勾選狀態
  functionPermission_volunteerManagement: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 功能權限_報表專區勾選狀態
  functionPermission_reportSection: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 功能權限_簽核專區勾選狀態
  functionPermission_signatureSection: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 功能權限_成果統計專區勾選狀態
  functionPermission_outcomeStatistics: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  // 功能權限_系統管理權限勾選狀態
  functionPermission_systemAdminPermissions: CheckboxGroup[] = [
    {
      label: '新增',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '檢視',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '編輯',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '列印',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '刪除',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // message
    public hd640ListService: Hd640ListService // hd640ListService
  ) {
    // 接收後端回傳資料
    // this.functionPermission_caseManagement =
    // this.functionPermission_volunteerManagement =
    // this.functionPermission_reportSection =
    // this.functionPermission_signatureSection =
    // this.functionPermission_outcomeStatistics =
    // this.functionPermission_systemAdminPermissions =

    // 功能權限_個案管理CheckboxGroup
    const functionPermission_caseManagementGroup = this.createCheckboxGroup(
      this.functionPermission_caseManagement
    );
    // 功能權限_志工管理CheckboxGroup
    const functionPermission_volunteerManagementGroup =
      this.createCheckboxGroup(this.functionPermission_volunteerManagement);
    // 功能權限_報表專區CheckboxGroup
    const functionPermission_reportSectionGroup = this.createCheckboxGroup(
      this.functionPermission_reportSection
    );
    // 功能權限_簽核專區CheckboxGroup
    const functionPermission_signatureSectionGroup = this.createCheckboxGroup(
      this.functionPermission_signatureSection
    );
    // 功能權限_成果統計專區CheckboxGroup
    const functionPermission_outcomeStatisticsGroup = this.createCheckboxGroup(
      this.functionPermission_outcomeStatistics
    );
    // 功能權限_系統管理權限CheckboxGroup
    const functionPermission_systemAdminPermissionsGroup =
      this.createCheckboxGroup(this.functionPermission_systemAdminPermissions);

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 姓名
      name: new FormControl('', [Validators.required]),
      // 員工編號
      employeeId: new FormControl('', [Validators.required]),
      // 職稱
      jobTitle: new FormControl(''),
      // 代理人
      agent: new FormControl(''),
      // 電子信箱
      email: new FormControl('', Validators.email),
      // 辦公室電話
      officePhone: new FormControl('', [taiwanHomePhoneValidator()]),
      // 公務手機
      workMobile: new FormControl('', [taiwanMobilePhoneValidator()]),
      // 任職單位
      department: new FormControl('', [Validators.required]),
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

      // 功能權限_個案管理
      functionPermission_caseManagement: new FormGroup(
        functionPermission_caseManagementGroup
      ),
      // 功能權限_志工管理
      functionPermission_volunteerManagement: new FormGroup(
        functionPermission_volunteerManagementGroup
      ),
      // 功能權限_報表專區
      functionPermission_reportSection: new FormGroup(
        functionPermission_reportSectionGroup
      ),
      // 功能權限_簽核專區
      functionPermission_signatureSection: new FormGroup(
        functionPermission_signatureSectionGroup
      ),
      // 功能權限_成果統計專區
      functionPermission_outcomeStatistics: new FormGroup(
        functionPermission_outcomeStatisticsGroup
      ),
      // 功能權限_系統管理權限
      functionPermission_systemAdminPermissions: new FormGroup(
        functionPermission_systemAdminPermissionsGroup
      ),

      // 單位檢視權限
      unitViewPermissions: new FormControl(),
    });
  }

  ngOnInit(): void {
    // 單位檢視權限串接後端資料
    this.form.get('unitViewPermissions')?.patchValue([]);
    this.handleUnitViewPermissionsOk();

    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd640ListService.isView) {
      this.form.disable();
    }
    // 編輯模式，禁用不可編輯欄位
    if (this.hd640ListService.isEdit) {
      this.form.get('name')?.disable();
      this.form.get('employeeId')?.disable();
      this.form.get('jobTitle')?.disable();
      this.form.get('email')?.disable();
    }
    // 新增模式，禁用功能權限
    if (this.hd640ListService.isCreate) {
      this.disableFunctionPermissions();
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

    // 複選框初始化
    const functionPermission_caseManagementCheckedValues =
      this.functionPermission_caseManagement
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_caseManagementChange(
      functionPermission_caseManagementCheckedValues
    );

    const functionPermission_volunteerManagementCheckedValues =
      this.functionPermission_volunteerManagement
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_volunteerManagementChange(
      functionPermission_volunteerManagementCheckedValues
    );

    const functionPermission_reportSectionCheckedValues =
      this.functionPermission_reportSection
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_reportSectionChange(
      functionPermission_reportSectionCheckedValues
    );

    const functionPermission_signatureSectionCheckedValues =
      this.functionPermission_signatureSection
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_signatureSectionChange(
      functionPermission_signatureSectionCheckedValues
    );

    const functionPermission_outcomeStatisticsCheckedValues =
      this.functionPermission_outcomeStatistics
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_outcomeStatisticsChange(
      functionPermission_outcomeStatisticsCheckedValues
    );

    const functionPermission_systemAdminPermissionsCheckedValues =
      this.functionPermission_systemAdminPermissions
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.functionPermission_systemAdminPermissionsChange(
      functionPermission_systemAdminPermissionsCheckedValues
    );
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

  // 將每個權限組的選項根據條件進行更新的通用函式
  private updatePermissions(
    permissionGroup: any[],
    formControlName: string,
    selectedValues: string[] = [],
    defaultCheck: boolean = false
  ) {
    // 構建 patchValue 所需的物件格式
    const updatedValues = permissionGroup.reduce((acc, option) => {
      acc[option.value] = selectedValues.includes(option.value)
        ? true
        : defaultCheck;
      option.checked = acc[option.value];
      return acc;
    }, {} as { [key: string]: boolean });

    // 更新表單的權限組狀態
    this.form.get(formControlName)?.patchValue(updatedValues);
  }

  // 角色modal按下確認
  handleRoleOk(): void {
    this.currentSelectRole = this.form.get('role')?.value;
    if (this.form.get('role')?.value.includes('系統管理者')) {
      // 實際情況後端要從hd620-form抓取設定好的功能權限
      this.updatePermissions(
        this.functionPermission_caseManagement,
        'functionPermission_caseManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_volunteerManagement,
        'functionPermission_volunteerManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_outcomeStatistics,
        'functionPermission_outcomeStatistics',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_reportSection,
        'functionPermission_reportSection',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_signatureSection,
        'functionPermission_signatureSection',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_systemAdminPermissions,
        'functionPermission_systemAdminPermissions',
        [],
        true
      );
    } else if (this.form.get('role')?.value.includes('總會(處長)')) {
      // 實際情況後端要從hd620-form抓取設定好的功能權限
      this.updatePermissions(
        this.functionPermission_caseManagement,
        'functionPermission_caseManagement',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_volunteerManagement,
        'functionPermission_volunteerManagement',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_reportSection,
        'functionPermission_reportSection',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_signatureSection,
        'functionPermission_signatureSection',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_outcomeStatistics,
        'functionPermission_outcomeStatistics',
        ['01', '03']
      );
      this.updatePermissions(
        this.functionPermission_systemAdminPermissions,
        'functionPermission_systemAdminPermissions',
        [],
        false
      );
    } else if (this.form.get('role')?.value.includes('服務處(處長)')) {
      // 實際情況後端要從hd620-form抓取設定好的功能權限
      this.updatePermissions(
        this.functionPermission_caseManagement,
        'functionPermission_caseManagement',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_volunteerManagement,
        'functionPermission_volunteerManagement',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_reportSection,
        'functionPermission_reportSection',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_signatureSection,
        'functionPermission_signatureSection',
        ['01']
      );
      this.updatePermissions(
        this.functionPermission_outcomeStatistics,
        'functionPermission_outcomeStatistics',
        ['01', '03']
      );
      this.updatePermissions(
        this.functionPermission_systemAdminPermissions,
        'functionPermission_systemAdminPermissions',
        [],
        false
      );
    } else if (this.form.get('role')?.value.includes('組長')) {
      // 實際情況後端要從hd620-form抓取設定好的功能權限
      this.updatePermissions(
        this.functionPermission_caseManagement,
        'functionPermission_caseManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_volunteerManagement,
        'functionPermission_volunteerManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_reportSection,
        'functionPermission_reportSection',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_signatureSection,
        'functionPermission_signatureSection',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_outcomeStatistics,
        'functionPermission_outcomeStatistics',
        ['01', '03']
      );
      this.updatePermissions(
        this.functionPermission_systemAdminPermissions,
        'functionPermission_systemAdminPermissions',
        [],
        true
      );
    } else if (this.form.get('role')?.value.includes('站點主責人')) {
      // 實際情況後端要從hd620-form抓取設定好的功能權限
      this.updatePermissions(
        this.functionPermission_caseManagement,
        'functionPermission_caseManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_volunteerManagement,
        'functionPermission_volunteerManagement',
        [],
        true
      );
      this.updatePermissions(
        this.functionPermission_reportSection,
        'functionPermission_reportSection',
        ['00', '01', '02', '03']
      );
      this.updatePermissions(
        this.functionPermission_signatureSection,
        'functionPermission_signatureSection',
        ['01', '03']
      );
      this.updatePermissions(
        this.functionPermission_outcomeStatistics,
        'functionPermission_outcomeStatistics',
        ['01', '03']
      );
      this.updatePermissions(
        this.functionPermission_systemAdminPermissions,
        'functionPermission_systemAdminPermissions',
        [],
        false
      );
    } else {
      // 取消勾選所有功能權限
      this.cancelAllFunctionPermission();
    }
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
      // 如果沒有選任職單位則禁用系統管理者
      this.disableSysAdmin();
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
    } else if (option === '總會(系統管理者)') {
      // 如果選擇總會則啟用全會選項
      this.form.get('headquartersManagement')?.enable();
      // 如果任職單位有選擇總會則啟用任職組別
      this.form.get('team')?.enable();
      // 如果選擇任職單位但選總會則總會(處長)不能選擇
      this.disableGeneralDirector();
      // 如果選擇任職單位但選總會則服務處(處長)不能選擇
      this.disableServiceDirector();
      // 如果選擇總會則啟用系統管理者
      this.form.get('sysAdmin')?.enable();
      // 如果任職組別和任職區域有選擇禁用系統管理者
      if (
        (this.form.get('team')?.value !== '---' &&
          this.form.get('team')?.value) ||
        this.form.get('region')?.value
      ) {
        this.disableSysAdmin();
      }
    } else if (option === '總會') {
      // 如果選擇總會則啟用全會選項
      this.form.get('headquartersManagement')?.enable();
      // 如果任職單位有選擇總會則啟用任職組別
      this.form.get('team')?.enable();
      // 如果選擇任職單位但選總會則服務處(處長)不能選擇
      this.disableServiceDirector();
      // 如果選擇任職單位但選總會則系統管理者不能選擇
      this.disableSysAdmin();
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
      // 如果選服務處則禁用系統管理者
      this.disableSysAdmin();
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
      // 如果沒有選任職組別且任職單位選擇總會(系統管理者)則啟用系統管理者
      if (this.form.get('department')?.value === '總會(系統管理者)') {
        this.form.get('sysAdmin')?.enable();
      }
      // 如果沒有選任職組別且任職單位選擇總會則啟用總會(處長)
      else if (this.form.get('department')?.value === '總會') {
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
        // 如果選擇任職組別則禁用總會(系統管理者)
        this.disableSysAdmin();
        // 如果選擇任職組別則禁用總會(處長)
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

  // 禁用系統管理者
  disableSysAdmin() {
    this.form.get('sysAdmin')?.disable();
    this.form.get('generalDirector')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '系統管理者'
    );
    // 取消勾選所有功能權限
    this.cancelAllFunctionPermission();
  }

  // 禁用總會(處長)
  disableGeneralDirector() {
    this.form.get('generalDirector')?.disable();
    this.form.get('generalDirector')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '總會(處長)'
    );
    // 取消勾選所有功能權限
    this.cancelAllFunctionPermission();
  }

  // 禁用服務處(處長)
  disableServiceDirector() {
    this.form.get('serviceDirector')?.disable();
    this.form.get('serviceDirector')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '服務處(處長)'
    );
    // 取消勾選所有功能權限
    this.cancelAllFunctionPermission();
  }

  // 禁用組長
  disableTeamLeader() {
    this.form.get('teamLeader')?.disable();
    this.form.get('teamLeader')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '組長'
    );
    // 取消勾選所有功能權限
    this.cancelAllFunctionPermission();
  }

  // 禁用站點主責人
  disableSiteCoordinator() {
    this.form.get('siteCoordinator')?.disable();
    this.form.get('siteCoordinator')?.reset();
    this.currentSelectRole = this.currentSelectRole.filter(
      (item) => item !== '站點主責人'
    );
    // 取消勾選所有功能權限
    this.cancelAllFunctionPermission();
  }

  // 取消勾選所有功能權限
  cancelAllFunctionPermission() {
    this.functionPermission_caseManagement.forEach((option) => {
      option.checked = false;
    });
    this.functionPermission_volunteerManagement.forEach((option) => {
      option.checked = false;
    });
    this.functionPermission_reportSection.forEach((option) => {
      option.checked = false;
    });
    this.functionPermission_outcomeStatistics.forEach((option) => {
      option.checked = false;
    });
    this.functionPermission_signatureSection.forEach((option) => {
      option.checked = false;
    });
    this.functionPermission_systemAdminPermissions.forEach((option) => {
      option.checked = false;
    });
  }

  // 禁用功能權限
  disableFunctionPermissions(): void {
    this.functionPermission_caseManagement.forEach((option) => {
      option.disabled = false;
    });
    this.functionPermission_volunteerManagement.forEach((option) => {
      option.disabled = false;
    });
    this.functionPermission_reportSection.forEach((option) => {
      option.disabled = false;
    });
    this.functionPermission_outcomeStatistics.forEach((option) => {
      option.disabled = false;
    });
    this.functionPermission_signatureSection.forEach((option) => {
      option.disabled = false;
    });
    this.functionPermission_systemAdminPermissions.forEach((option) => {
      option.disabled = false;
    });
  }

  // 個案管理選項勾選時觸發
  functionPermission_caseManagementChange(checkedValues: string[]): void {
    this.functionPermission_caseManagement.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 志工管理選項勾選時觸發
  functionPermission_volunteerManagementChange(checkedValues: string[]): void {
    this.functionPermission_caseManagement.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 報表專區選項勾選時觸發
  functionPermission_reportSectionChange(checkedValues: string[]): void {
    this.functionPermission_caseManagement.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 簽核專區選項勾選時觸發
  functionPermission_signatureSectionChange(checkedValues: string[]): void {
    this.functionPermission_caseManagement.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 成果統計專區選項勾選時觸發
  functionPermission_outcomeStatisticsChange(checkedValues: string[]): void {
    this.functionPermission_caseManagement.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
  }

  // 系統管理權限選項勾選時觸發
  functionPermission_systemAdminPermissionsChange(
    checkedValues: string[]
  ): void {
    this.functionPermission_caseManagement.forEach((option) => {
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

  // 開啟單位檢視權限modal
  showUnitViewPermissionsModal(): void {
    this.isUnitViewPermissionsVisible = true;
    this.tempUnitViewPermissions = [
      ...this.form.get('unitViewPermissions')?.value,
    ];
  }

  // 單位檢視權限modal確認按鈕事件
  handleUnitViewPermissionsOk(): void {
    this.isUnitViewPermissionsVisible = false;
    this.currentSelectedUnitViewPermissions = [
      ...this.form.get('unitViewPermissions')?.value,
    ];
    this.message.success('修改成功');
    console.log(this.form.get('unitViewPermissions')?.value);
  }

  // 單位檢視權限modal取消按鈕事件
  handleUnitViewPermissionsCancel(): void {
    this.isUnitViewPermissionsVisible = false;
    this.form
      .get('unitViewPermissions')
      ?.setValue(this.tempUnitViewPermissions);
    this.message.error('操作取消');
  }

  // 儲存
  save(): void {
    this.message.success('儲存成功');
  }

  // 新增
  create(): void {
    this.message.success('新增成功');
    this.closeTab();
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
