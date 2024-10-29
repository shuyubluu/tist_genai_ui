import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { InputComponent } from '../../../common/components/input/input.component';
import { SelectComponent } from '../../../common/components/select/select.component';
import { SharedModule } from '../../../common/shared/shared.module';
import { TabService } from '../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../../../common/components/message/error-message.component';
import e from 'express';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService, // message
    private tabService: TabService // 關閉tab的Service
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 舊密碼
      oldPassword: new FormControl('', [Validators.required]),
      // 新密碼
      newPassword: new FormControl('', [Validators.required]),
      // 再次輸入新密碼
      confirmNewPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
  }

  // 修改密碼
  edit(): void {
    if (
      this.form.get('oldPassword')?.value === '' ||
      this.form.get('newPassword')?.value === '' ||
      this.form.get('confirmNewPassword')?.value === ''
    ) {
      this.message.error('請輸入完整資料');
      return;
    }
    if (
      this.form.get('oldPassword')?.value ===
      this.form.get('newPassword')?.value
    ) {
      this.message.error('新密碼與舊密碼不能相同');
      return;
    }
    if (this.form.valid && !this.comparePassword()) {
      this.message.success('修改成功');
      return;
    }
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 比較兩次輸入密碼是否相同
  comparePassword(): boolean {
    if (
      this.form.get('newPassword')?.value &&
      this.form.get('confirmNewPassword')?.value
    ) {
      return (
        this.form.get('newPassword')?.value !==
        this.form.get('confirmNewPassword')?.value
      );
    } else {
      return false;
    }
  }
}
