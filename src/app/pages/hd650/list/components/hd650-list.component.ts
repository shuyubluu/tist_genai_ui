import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hd650-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd650-list.component.html',
  styleUrl: './hd650-list.component.scss',
})
export class Hd650ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 時間單位select選項
  selectOptions_timeUnit: string[] = ['小時', '分鐘'];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 是否提供前台ID帳號修改
      allowFrontendIdEdit: new FormControl(''),
      // 登入密碼規則
      loginPasswordRules: new FormControl(''),
      // 密碼最小長度
      passwordMinLength: new FormControl(''),
      // 員工變更密碼規則
      employeePasswordChangeRules: new FormControl(''),
      // 密碼有效天數
      passwordExpiryDays: new FormControl(''),
      // 提前n天發送通知
      reminderAdvanceDays: new FormControl(''),
      // 系統是否主動提供使用者修改密碼畫面
      autoShowPasswordChangeScreen: new FormControl(''),
      // 密碼變更間隔時間
      passwordChangeInterval: new FormControl(''),
      // 不得重複前N次密碼
      passwordHistoryLimit: new FormControl(''),
      // 帳戶鎖定原則
      accountLockPolicy: new FormControl(''),
      // 時間1
      time_1: new FormControl(''),
      // 時間單位1
      timeUnit_1: new FormControl(''),
      // 密碼錯誤次數
      passwordErrorCount: new FormControl(''),
      // 時間2
      time_2: new FormControl(''),
      // 時間單位2
      timeUnit_2: new FormControl(''),
      // 密碼到期未修改
      passwordExpirationCheckbox: new FormControl(),
    });
  }

  ngOnInit(): void {
    // 禁用密碼最小長度
    this.form.get('passwordMinLength')?.disable();
    // 禁用密碼有效天數
    this.form.get('passwordExpiryDays')?.disable();
    // 禁用提前n天發送通知
    this.form.get('reminderAdvanceDays')?.disable();
    // 禁用系統是否主動提供使用者修改密碼畫面
    this.form.get('autoShowPasswordChangeScreen')?.disable();
    // 禁用密碼變更間隔時間
    this.form.get('passwordChangeInterval')?.disable();
    // 禁用不得重複前N次密碼
    this.form.get('passwordHistoryLimit')?.disable();
    // 禁用密碼到期未修改
    this.form.get('passwordExpirationCheckbox')?.disable();
    // 禁用連續錯誤次數時間
    this.form.get('time_1')?.disable();
    // 禁用連續錯誤次數單位
    this.form.get('timeUnit_1')?.disable();
    // 禁用連續錯誤次數次數
    this.form.get('passwordErrorCount')?.disable();
    // 禁用連續錯誤次數鎖定時間
    this.form.get('time_2')?.disable();
    // 禁用連續錯誤次數鎖定單位
    this.form.get('timeUnit_2')?.disable();
  }

  // 登入密碼規則選項改變時觸發
  loginPasswordRulesChange(checkGroup: string[]) {
    this.form.get('loginPasswordRules')?.setValue(checkGroup);
    if (checkGroup.includes('1')) {
      this.form.get('passwordMinLength')?.enable();
    } else {
      this.form.get('passwordMinLength')?.disable();
      this.form.get('passwordMinLength')?.reset();
    }
  }

  // 員工變更密碼規則選項改變時觸發
  employeePasswordChangeRulesChange(checkGroup: string[]) {
    this.form.get('employeePasswordChangeRules')?.setValue(checkGroup);
    if (checkGroup.includes('1')) {
      this.form.get('passwordExpiryDays')?.enable();
      this.form.get('reminderAdvanceDays')?.enable();
      this.form.get('autoShowPasswordChangeScreen')?.enable();
      this.form.get('passwordExpirationCheckbox')?.enable();
    } else {
      this.form.get('passwordExpiryDays')?.disable();
      this.form.get('passwordExpiryDays')?.reset();
      this.form.get('reminderAdvanceDays')?.disable();
      this.form.get('reminderAdvanceDays')?.reset();
      this.form.get('autoShowPasswordChangeScreen')?.disable();
      this.form.get('autoShowPasswordChangeScreen')?.reset();
      this.form.get('passwordExpirationCheckbox')?.disable();
      this.form.get('passwordExpirationCheckbox')?.reset();
    }
    if (checkGroup.includes('3')) {
      this.form.get('passwordChangeInterval')?.enable();
    } else {
      this.form.get('passwordChangeInterval')?.disable();
      this.form.get('passwordChangeInterval')?.reset();
    }
    if (checkGroup.includes('4')) {
      this.form.get('passwordHistoryLimit')?.enable();
    } else {
      this.form.get('passwordHistoryLimit')?.disable();
      this.form.get('passwordHistoryLimit')?.reset();
    }
  }

  // 帳戶鎖定原則選項改變時觸發
  accountLockPolicyChange(checkGroup: string[]) {
    this.form.get('accountLockPolicy')?.setValue(checkGroup);
    if (checkGroup.includes('1')) {
      this.form.get('time_1')?.enable();
      this.form.get('timeUnit_1')?.enable();
      this.form.get('passwordErrorCount')?.enable();
      this.form.get('time_2')?.enable();
      this.form.get('timeUnit_2')?.enable();
    } else {
      this.form.get('time_1')?.disable();
      this.form.get('time_1')?.reset();
      this.form.get('timeUnit_1')?.disable();
      this.form.get('timeUnit_1')?.reset();
      this.form.get('passwordErrorCount')?.disable();
      this.form.get('passwordErrorCount')?.reset();
      this.form.get('time_2')?.disable();
      this.form.get('time_2')?.reset();
      this.form.get('timeUnit_2')?.disable();
      this.form.get('timeUnit_2')?.reset();
    }
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
