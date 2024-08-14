// 台灣身分證字號驗證器
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function taiwanIdValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const idPattern = /^[A-Z][12]\d{8}$/;

    if (!idPattern.test(value)) {
      return { invalidTaiwanId: true };
    }

    return null;
  };
}
