import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MinguoDateAdapter,
  MY_DATE_FORMATS,
} from '../../utils/minguo-date-adapter';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-dayPicker',
  standalone: true,
  templateUrl: './dayPicker.component.html',
  styleUrls: ['./dayPicker.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MinguoDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }, // 使用自訂的日期格式化設定 MY_DATE_FORMATS
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DayPickerComponent),
      multi: true,
    },
  ],
})
export class DayPickerComponent implements ControlValueAccessor {
  selectedDate: Date | null = null;
  onChange: (value: Date | null) => void = () => {}; // 當控件值變更時調用的函數

  onTouched: () => void = () => {}; // 當控件被觸摸時調用的函數

  // 當外部表單模型更新時，Angular 會調用這個方法
  writeValue(value: Date | null): void {
    this.selectedDate = value; // 將新值寫入控件中
  }
  // 當控件的值發生變更時，Angular 會調用這個方法來註冊一個回調函數
  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn; // 當控件的值變更時，我們需要調用這個回調函數來通知外部表單模型
  }

  // 當控件被觸摸（例如，失去焦點）時，Angular 會調用這個方法來註冊一個回調函數
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn; // 當控件被觸摸時，我們需要調用這個回調函數來通知外部表單模型
  }

  onselect(event: Date | null) {
    this.selectedDate = event;
    this.onChange(this.selectedDate);
  }
}
