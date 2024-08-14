import { AbstractControl, ValidatorFn } from '@angular/forms';

export function taiwanCityValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const { city, district, village } = control.value;

    if (city === '' || district === '' || village === '') {
      // 檢查每個字段是否為空字串
      return { fieldsCannotBeEmpty: true };
    }

    return null;
  };
}
