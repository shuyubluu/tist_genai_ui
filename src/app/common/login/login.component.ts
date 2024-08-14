import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { SharedModule } from '../shared/shared.module';
import { SelectComponent } from '../components/select/select.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent, SharedModule, SelectComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  selectOptions_1 = [
    '請選擇讀卡機',
    'USB Smart Card Reader 0000',
    'USB Smart Card Reader2 6666',
  ];
  contentEntered_1 = '123456';
}
