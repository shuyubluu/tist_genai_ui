import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { InputComponent } from '../../../common/components/input/input.component';
import { SharedModule } from '../../../common/shared/shared.module';
import { ErrorMessageComponent } from '../../../common/components/message/error-message.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SharedModule,
    ErrorMessageComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private router: Router // 路由
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 電子信箱
      email: new FormControl('', [Validators.required]),
      // 新密碼
      password: new FormControl('', [Validators.required]),
      // 再次輸入密碼
      enterAgainPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  // 修改密碼
  changePassword() {
    // if (this.form.valid && (this.form.get('password')?.value === this.form.get('enterAgainPassword')?.value ) {
    this.router.navigate(['/login']);
    // }
  }
}
