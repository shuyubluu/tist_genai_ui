import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkboxGroupValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // 取得 checkbox group 的值
    const checkboxGroup = control.value;

    // 檢查是否至少有一個選項被勾選
    const isAtLeastOneChecked = Object.values(checkboxGroup).some(
      (checked) => checked === true
    );

    return isAtLeastOneChecked ? null : { atLeastOneChecked: true };
  };
}
