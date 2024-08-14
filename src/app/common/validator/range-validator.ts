// 自訂義範圍驗證器
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = parseInt(control.value, 10);
    if (isNaN(value) || value < min || value > max) {
      return { rangeError: true };
    }
    return null;
  };
}
