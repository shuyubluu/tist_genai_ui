import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function checkboxGroupValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkboxArray = control.value as {
      label: string;
      value: string;
      checked: boolean;
      disabled: boolean;
    }[];

    // 檢查是否至少有一個選項被勾選
    const isAtLeastOneChecked = checkboxArray.some((option) => option.checked);

    return isAtLeastOneChecked ? null : { atLeastOneChecked: true };
  };
}
