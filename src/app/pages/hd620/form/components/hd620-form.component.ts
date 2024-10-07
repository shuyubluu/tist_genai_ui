import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd620ListService } from '../../list/service/hd620-list.service';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

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
  checkedValues: string[] = [];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd620ListService: Hd620ListService, // hd620ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 角色名稱
      roleName: new FormControl('', [Validators.required]),

      // 個案管理
      caseManagement: new FormControl(''),
      // 個案管理_新增
      caseManagement_add: new FormControl(),
      // 個案管理_檢視
      caseManagement_view: new FormControl(),
      // 個案管理_編輯
      caseManagement_edit: new FormControl(),
      // 個案管理_列印
      caseManagement_print: new FormControl(),
      // 個案管理_刪除
      caseManagement_delete: new FormControl(),

      // 志工管理
      volunteerManagement: new FormControl(''),
      // 志工管理_新增
      volunteerManagement_add: new FormControl(),
      // 志工管理_檢視
      volunteerManagement_view: new FormControl(),
      // 志工管理_編輯
      volunteerManagement_edit: new FormControl(),
      // 志工管理_列印
      volunteerManagement_print: new FormControl(),
      // 志工管理_刪除
      volunteerManagement_delete: new FormControl(),

      // 報表專區
      reportSection: new FormControl(''),
      // 報表專區_新增
      reportSection_add: new FormControl(),
      // 報表專區_檢視
      reportSection_view: new FormControl(),
      // 報表專區_編輯
      reportSection_edit: new FormControl(),
      // 報表專區_列印
      reportSection_print: new FormControl(),
      // 報表專區_刪除
      reportSection_delete: new FormControl(),

      // 簽核專區
      signatureSection: new FormControl(''),
      // 簽核專區_新增
      signatureSection_add: new FormControl(),
      // 簽核專區_檢視
      signatureSection_view: new FormControl(),
      // 簽核專區_編輯
      signatureSection_edit: new FormControl(),
      // 簽核專區_列印
      signatureSection_print: new FormControl(),
      // 簽核專區_刪除
      signatureSection_delete: new FormControl(),

      // 成果統計專區
      outcomeStatistics: new FormControl(''),
      // 成果統計專區_新增
      outcomeStatistics_add: new FormControl(),
      // 成果統計專區_檢視
      outcomeStatistics_view: new FormControl(),
      // 成果統計專區_編輯
      outcomeStatistics_edit: new FormControl(),
      // 成果統計專區_列印
      outcomeStatistics_print: new FormControl(),
      // 成果統計專區_刪除
      outcomeStatistics_delete: new FormControl(),

      // 系統管理權限
      systemAdminPermissions: new FormControl(''),
      // 系統管理權限_新增
      systemAdminPermissions_add: new FormControl(),
      // 系統管理權限_檢視
      systemAdminPermissions_view: new FormControl(),
      // 系統管理權限_編輯
      systemAdminPermissions_edit: new FormControl(),
      // 系統管理權限_列印
      systemAdminPermissions_print: new FormControl(),
      // 系統管理權限_刪除
      systemAdminPermissions_delete: new FormControl(),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd620ListService.isView) {
      this.form.disable();
    }
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

  // 儲存
  save() {
    this.message.success('儲存成功');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
