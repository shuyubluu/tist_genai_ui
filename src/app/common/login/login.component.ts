import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { SharedModule } from '../shared/shared.module';
import { SelectComponent } from '../components/select/select.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../components/message/error-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SharedModule,
    SelectComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private router: Router // 路由
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 帳號
      account: new FormControl('', [Validators.required]),
      // 密碼
      password: new FormControl('', [Validators.required]),
      // 驗證碼
      captcha: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  // 登入
  login() {
    // if (this.form.valid) {
    this.router.navigate(['/']);
    // }
  }
}
