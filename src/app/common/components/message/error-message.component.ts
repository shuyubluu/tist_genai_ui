import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * 驗證訊息元件
 *
 * 這個元件用於顯示表單控件的驗證錯誤訊息。
 *
 * 使用方法：
 * 1. 加入要驗證的組件：
 *    [control]="表單.get('組件的formControlName')"
 *
 *    範例：
 *    [control]="form.get('name')"
 *    在名為form表單中驗證formControlName為name的組件
 *
 * 2. 驗證的關鍵字：
 *    errorKey="表單驗證錯誤的key"
 *
 *    常用的驗證key:
 *    - required: 必填欄位
 *    - maxlength: 最大長度
 *    - minlength: 最小長度
 *    - pattern: 正則表達式匹配
 *    - email: 電子郵件格式
 *
 * 3. 要顯示的錯誤訊息：
 *    errorMessage="表單驗證錯誤的訊息"
 *
 *    範例：
 *    errorMessage="這是必填欄位。"
 *
 * 4. 是否需要失焦後才會觸發驗證
 *    [isTouched]="true" 預設為true
 *
 * 5. 自訂訊息顯示的條件：
 *    [isCustom]="true" 預設為false
 *
 * 6. 判斷是否顯示自訂訊息：
 *    [condition]="true" 預設為false
 *
 * 完整使用範例：
 * - 表單驗證錯誤訊息
 * <app-error-message
 *   [control]="form.get('name')"
 *   errorKey="required"
 *   errorMessage="這是必填欄位。"
 *  />
 * - 自訂錯誤訊息
 * <app-error-message
 *   [isCustom]="true"
 *   [condition]="true"
 *   errorMessage="這是必填欄位。"
 *  />
 */

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() errorKey: string = '';
  @Input() errorMessage: string = '';
  @Input() isTouched: boolean = true;
  @Input() isCustom: boolean = false;
  @Input() condition: boolean = false;

  shouldShowError(): boolean {
    // 如果是自訂的錯誤訊息，則根據condition來決定是否顯示
    if (this.isCustom) {
      if (this.condition) {
        return true;
      } else {
        return false;
      }
    }
    // 如果是驗證關鍵字是必填的，需失焦才會觸發表單驗證
    if (this.errorKey === 'required' && this.isTouched) {
      return this.control
        ? this.control.hasError(this.errorKey) && this.control.touched
        : false;
    } else {
      return this.control ? this.control.hasError(this.errorKey) : false;
    }
  }
}
