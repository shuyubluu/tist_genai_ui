import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd620ListService } from '../../list/service/hd620-list.service';

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
  ],
  templateUrl: './hd620-form.component.html',
  styleUrl: './hd620-form.component.scss',
})
export class Hd620FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd620ListService: Hd620ListService, // hd620ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 角色名稱
      roleName: new FormControl(''),
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
