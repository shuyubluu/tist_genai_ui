import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AddressValidators {
  // 封裝的自訂地址驗證器
  static addressValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || value.city === '' || value.district === '') {
      return { invalidAddress: true }; // 無效日期
    }
    return null; // 日期有效
  }
}
