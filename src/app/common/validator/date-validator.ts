import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DateValidators {
  // 封裝的自訂日期驗證器
  static dateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (
      !value ||
      value.year === '0' ||
      value.month === '0' ||
      value.day === '0'
    ) {
      return { invalidDate: true }; // 無效日期
    }
    return null; // 日期有效
  }
}
