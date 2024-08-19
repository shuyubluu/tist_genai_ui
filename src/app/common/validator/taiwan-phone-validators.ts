// 台灣家用電話及手機號碼驗證器
import { AbstractControl, ValidatorFn } from '@angular/forms';

// 台灣電話號碼
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
// 台灣電話號碼_區碼
export function taiwanHomePhoneValidator_areaCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣家用電話格式：
    // 1. 區碼（2-4位數字））
    const homePhonePattern = /^(0[2-9]{1,3})$/;

    if (!homePhonePattern.test(value)) {
      return { invalidHomePhone_areaCode: true };
    }

    return null;
  };
}
// 台灣電話號碼_電話
export function taiwanHomePhoneValidator_phoneNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣家用電話格式：
    // 1. 電話號碼（6-8位數字）
    const homePhonePattern = /^\d{6,8}$/;

    if (!homePhonePattern.test(value)) {
      return { invalidHomePhone_phoneNumber: true };
    }

    return null;
  };
}
// 台灣手機號碼
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
// 台灣手機號碼_前四碼
export function taiwanMobilePhoneValidator_firstFourDigits(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣手機號碼格式：
    // 1. 以09開頭
    // 2. 後面跟著2位數字
    const mobilePhonePattern = /^09\d{2}$/;

    if (!mobilePhonePattern.test(value)) {
      return { invalidMobilePhone_firstFourDigits: true };
    }

    return null;
  };
}
// 台灣手機號碼_後六碼
export function taiwanMobilePhoneValidator_lastSixDigits(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // 台灣手機號碼格式：
    // 1. 一定要有6位數字
    const mobilePhonePattern = /^\d{6}$/;

    if (!mobilePhonePattern.test(value)) {
      return { invalidMobilePhone_lastSixDigits: true };
    }

    return null;
  };
}
