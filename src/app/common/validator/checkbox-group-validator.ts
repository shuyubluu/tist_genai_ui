import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Checkbox 群組驗證器
 * 確保至少一個 checkbox 被勾選。
 * @returns ValidatorFn - 表單驗證器函數
 */
export function checkboxGroupValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // 確保控制項的值存在且為物件
    const checkboxGroup = control.getRawValue(); // 使用 getRawValue 來獲取所有值

    // 檢查是否為有效的物件
    if (!checkboxGroup || typeof checkboxGroup !== 'object') {
      return { atLeastOneChecked: true }; // 如果值無效，視為未勾選
    }

    // 檢查是否至少有一個選項被勾選
    const isAtLeastOneChecked = Object.values(checkboxGroup).some(
      (checked) => checked === true
    );

    // 如果至少有一個被勾選，返回 null，表示通過驗證
    return isAtLeastOneChecked ? null : { atLeastOneChecked: true };
  };
}
