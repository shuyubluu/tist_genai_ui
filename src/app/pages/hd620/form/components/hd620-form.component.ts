import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd620ListService } from '../../list/service/hd620-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { CheckboxGroup } from '../service/hd620-form.interface';

@Component({
  selector: 'app-hd620-form',
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
  templateUrl: './hd620-form.component.html',
  styleUrl: './hd620-form.component.scss',
})
export class Hd620FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';

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
    public hd620ListService: Hd620ListService, // hd620ListService
    private message: NzMessageService // message
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
      // 角色名稱
      roleName: new FormControl('', [Validators.required]),
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
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd620ListService.isView) {
      this.form.disable();
    }

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

  // 儲存
  save() {
    this.message.success('儲存成功');
    console.log(this.form.value);
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
