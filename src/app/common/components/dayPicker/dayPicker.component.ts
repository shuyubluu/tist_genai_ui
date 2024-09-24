import { Component, forwardRef, Input } from '@angular/core';
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
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from '../../shared/shared.module';

/**
 * 日期選擇元件
 *
 * disabled 預設為false 可提供布林值 禁止選擇日期;
 */

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
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DayPickerComponent),
      multi: true,
    },
  ],
})
export class DayPickerComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;

  date: Date | null = null;
  formattedDate: string | null = '';
  isShowClearButton: boolean = false;
  onChange: (date: string | null) => void = () => {};
  onTouched: () => void = () => {};

  onDateChange(date: Date | null): void {
    if (date !== null) {
      this.isShowClearButton = true;
    } else {
      this.isShowClearButton = false;
    }
    this.date = date;
    this.formattedDate = this.formatDateToTaiwanese(date);
    this.onChange(this.formattedDate);
    this.onTouched();
  }

  // 實作 ControlValueAccessor 方法
  writeValue(value: Date | null): void {
    this.date = value;
    this.formattedDate = this.formatDateToTaiwanese(value);
  }

  registerOnChange(fn: (date: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private formatDateToTaiwanese(date: Date | null): string | null {
    if (!date) return null;

    const year = date.getFullYear() - 1911; // 將西元年轉換為民國年
    const month = date.getMonth() + 1; // 月份從0開始
    const day = date.getDate();

    return `${year}/${this.formatDate(month)}/${this.formatDate(day)}`;
  }

  // 格式化日期，如果日期小於10，前面補0
  formatDate(date: number): string {
    return date <= 9 ? `0${date}` : `${date}`;
  }

  // 清空日期
  clearDate(): void {
    this.onDateChange(null);
  }
}
