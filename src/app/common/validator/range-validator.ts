// 自訂義範圍驗證器
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // 檢查是否為空
    if (value === null || value === undefined || value === '') {
      return null; // 空值不驗證
    }

    // 檢查是否為數字（排除非數字字符，包含英文字母）
    if (isNaN(value)) {
      return { rangeError: true }; // 任何非數字字符觸發錯誤
    }

    // 檢查是否為純數字，允許最多一位小數點
    if (!/^\d+(\.\d{0,1})?$/.test(value)) {
      return { rangeError: true }; // 如果不符合數字格式，返回錯誤
    }
    const numValue = parseFloat(value);

    // 檢查範圍
    if (numValue < 0 || numValue > 100) {
      return { rangeError: true }; // 超出範圍
    }

    return null; // 通過驗證
  };
}
