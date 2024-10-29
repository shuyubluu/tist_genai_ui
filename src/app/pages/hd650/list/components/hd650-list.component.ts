import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxGroup } from '../service/hd650-list.interface';

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
  // tab名稱
  tabName: string = '';
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];
  // 時間單位select選項
  selectOptions_timeUnit: string[] = ['小時', '分鐘'];

  // 登入密碼規則勾選狀態
  loginPasswordRules: CheckboxGroup[] = [
    {
      label: '密碼最小長度',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '密碼為英文數字組合',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '密碼需帶有大小寫英文字',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '密碼需有特殊符號',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  // 員工變更密碼規則勾選狀態
  employeePasswordChangeRules: CheckboxGroup[] = [
    {
      label: '密碼有效天數',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '上次密碼變更後，',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '密碼變更時，不得重複前',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '首次登入系統須變更密碼',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  // 員工變更密碼規則勾選狀態
  accountLockPolicyRules: CheckboxGroup[] = [
    {
      label: '於',
      value: '00',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // message
  ) {
    // 接收後端回傳質料
    // this.loginPasswordRules =
    // this.employeePasswordChangeRules =
    // this.accountLockPolicyRules =

    // 登入密碼規則CheckboxGroup
    const loginPasswordRulesGroup = this.createCheckboxGroup(
      this.loginPasswordRules
    );
    loginPasswordRulesGroup['passwordMinLength'] = new FormControl('');

    // 員工變更密碼規則CheckboxGroup
    const employeePasswordChangeRulesGroup = this.createCheckboxGroup(
      this.employeePasswordChangeRules
    );
    employeePasswordChangeRulesGroup['passwordExpiryDays'] = new FormControl(
      ''
    );
    employeePasswordChangeRulesGroup['reminderAdvanceDays'] = new FormControl(
      ''
    );
    employeePasswordChangeRulesGroup['autoShowPasswordChangeScreen'] =
      new FormControl('');
    employeePasswordChangeRulesGroup['passwordExpiryNoPortalAccess'] =
      new FormControl('');

    // 帳戶鎖定原則CheckboxGroup
    const accountLockPolicyRulesGroup = this.createCheckboxGroup(
      this.accountLockPolicyRules
    );
    accountLockPolicyRulesGroup['time_1'] = new FormControl('');
    accountLockPolicyRulesGroup['timeUnit_1'] = new FormControl('');
    accountLockPolicyRulesGroup['passwordErrorCount'] = new FormControl('');
    accountLockPolicyRulesGroup['time_2'] = new FormControl('');
    accountLockPolicyRulesGroup['timeUnit_2'] = new FormControl('');

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 登入密碼規則
      loginPasswordRules: new FormGroup(loginPasswordRulesGroup),
      // 員工變更密碼規則
      employeePasswordChangeRules: new FormGroup(
        employeePasswordChangeRulesGroup
      ),
      // 帳戶鎖定原則
      accountLockPolicyRules: new FormGroup(accountLockPolicyRulesGroup),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 禁用密碼最小長度
    this.form.get('loginPasswordRules.passwordMinLength')?.disable();
    // 禁用密碼有效天數
    this.form.get('employeePasswordChangeRules.passwordExpiryDays')?.disable();
    // 禁用提前n天發送通知
    this.form.get('employeePasswordChangeRules.reminderAdvanceDays')?.disable();
    // 禁用系統是否主動提供使用者修改密碼畫面
    this.form
      .get('employeePasswordChangeRules.autoShowPasswordChangeScreen')
      ?.disable();
    // 禁用請使用者於個人資料維護中進行密碼修改
    this.form
      .get('employeePasswordChangeRules.passwordExpiryNoPortalAccess')
      ?.disable();
    // 禁用密碼變更間隔時間
    this.form
      .get('employeePasswordChangeRules.passwordChangeInterval')
      ?.disable();
    // 禁用不得重複前N次密碼
    this.form
      .get('employeePasswordChangeRules.passwordHistoryLimit')
      ?.disable();

    // 禁用連續錯誤次數時間
    this.form.get('accountLockPolicyRules.time_1')?.disable();
    // 禁用連續錯誤次數單位
    this.form.get('accountLockPolicyRules.timeUnit_1')?.disable();
    // 禁用連續錯誤次數次數
    this.form.get('accountLockPolicyRules.passwordErrorCount')?.disable();
    // 禁用連續錯誤次數鎖定時間
    this.form.get('accountLockPolicyRules.time_2')?.disable();
    // 禁用連續錯誤次數鎖定單位
    this.form.get('accountLockPolicyRules.timeUnit_2')?.disable();

    // 複選框初始化
    const loginPasswordRulesCheckedValues = this.loginPasswordRules
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.loginPasswordRulesChange(loginPasswordRulesCheckedValues);

    const employeePasswordChangeRulesCheckedValues =
      this.employeePasswordChangeRules
        .filter((option) => option.checked)
        .map((option) => option.value);
    this.employeePasswordChangeRulesChange(
      employeePasswordChangeRulesCheckedValues
    );

    const accountLockPolicyRulesCheckedValues = this.accountLockPolicyRules
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.accountLockPolicyRulesChange(accountLockPolicyRulesCheckedValues);
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

  // 登入密碼規則選項改變時觸發
  loginPasswordRulesChange(checkedValues: string[]) {
    this.loginPasswordRules.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '00') {
        if (option.checked) {
          this.form.get('loginPasswordRules.passwordMinLength')?.enable();
        } else {
          this.form.get('loginPasswordRules.passwordMinLength')?.reset();
          this.form.get('loginPasswordRules.passwordMinLength')?.disable();
        }
      }
    });
  }

  // 員工變更密碼規則選項改變時觸發
  employeePasswordChangeRulesChange(checkedValues: string[]) {
    this.employeePasswordChangeRules.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '00') {
        if (option.checked) {
          this.form
            .get('employeePasswordChangeRules.passwordExpiryDays')
            ?.enable();
          this.form
            .get('employeePasswordChangeRules.reminderAdvanceDays')
            ?.enable();
          this.form
            .get('employeePasswordChangeRules.autoShowPasswordChangeScreen')
            ?.enable();
          this.form
            .get('employeePasswordChangeRules.passwordExpiryNoPortalAccess')
            ?.enable();
        } else {
          this.form
            .get('employeePasswordChangeRules.passwordExpiryDays')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.passwordExpiryDays')
            ?.disable();
          this.form
            .get('employeePasswordChangeRules.reminderAdvanceDays')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.reminderAdvanceDays')
            ?.disable();
          this.form
            .get('employeePasswordChangeRules.autoShowPasswordChangeScreen')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.autoShowPasswordChangeScreen')
            ?.disable();
          this.form
            .get('employeePasswordChangeRules.passwordExpiryNoPortalAccess')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.passwordExpiryNoPortalAccess')
            ?.disable();
        }
      }
      if (option.value === '01') {
        if (option.checked) {
          this.form
            .get('employeePasswordChangeRules.passwordChangeInterval')
            ?.enable();
        } else {
          this.form
            .get('employeePasswordChangeRules.passwordChangeInterval')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.passwordChangeInterval')
            ?.disable();
        }
      }
      if (option.value === '02') {
        if (option.checked) {
          this.form
            .get('employeePasswordChangeRules.passwordHistoryLimit')
            ?.enable();
        } else {
          this.form
            .get('employeePasswordChangeRules.passwordHistoryLimit')
            ?.reset();
          this.form
            .get('employeePasswordChangeRules.passwordHistoryLimit')
            ?.disable();
        }
      }
    });
  }

  // 帳戶鎖定原則選項改變時觸發
  accountLockPolicyRulesChange(checkedValues: string[]) {
    this.accountLockPolicyRules.forEach((option) => {
      option.checked = checkedValues.includes(option.value);
      if (option.value === '00') {
        if (option.checked) {
          this.form.get('accountLockPolicyRules.time_1')?.enable();
          this.form.get('accountLockPolicyRules.timeUnit_1')?.enable();
          this.form.get('accountLockPolicyRules.passwordErrorCount')?.enable();
          this.form.get('accountLockPolicyRules.time_2')?.enable();
          this.form.get('accountLockPolicyRules.timeUnit_2')?.enable();
        } else {
          this.form.get('accountLockPolicyRules.time_1')?.reset();
          this.form.get('accountLockPolicyRules.time_1')?.disable();
          this.form.get('accountLockPolicyRules.timeUnit_1')?.reset();
          this.form.get('accountLockPolicyRules.timeUnit_1')?.disable();
          this.form.get('accountLockPolicyRules.passwordErrorCount')?.reset();
          this.form.get('accountLockPolicyRules.passwordErrorCount')?.disable();
          this.form.get('accountLockPolicyRules.time_2')?.reset();
          this.form.get('accountLockPolicyRules.time_2')?.disable();
          this.form.get('accountLockPolicyRules.timeUnit_2')?.reset();
          this.form.get('accountLockPolicyRules.timeUnit_2')?.disable();
        }
      }
    });
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
