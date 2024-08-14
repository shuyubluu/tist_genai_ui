// 台灣家用電話及手機號碼驗證器
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function taiwanHomePhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣家用電話格式：
    // 1. 區碼（2-4位數字）
    // 2. 連字符（可選）
    // 3. 電話號碼（6-8位數字）
    const homePhonePattern = /^(0[2-9]{1,3})-?\d{6,8}$/;

    if (!homePhonePattern.test(value)) {
      return { invalidHomePhone: true };
    }

    return null;
  };
}

export function taiwanMobilePhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣手機號碼格式：
    // 1. 以09開頭
    // 2. 後面跟著8位數字
    const mobilePhonePattern = /^09\d{8}$/;

    if (!mobilePhonePattern.test(value)) {
      return { invalidMobilePhone: true };
    }

    return null;
  };
}
