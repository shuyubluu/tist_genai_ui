import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/**
 * 日期選擇元件
 *
 * disabled 預設為false 可提供布林值 禁止選擇日期
 *
 * isDefaultToday 預設為false 可提供布林值 是否預設為今天日期
 *
 * startRange 預設為5 可提供數字值 選擇日期的起始範圍 由當前日期往前做延伸
 *
 * endRange 預設為5 可提供數字值 選擇日期的結束範圍 由當前日期往後做延伸
 *
 * 日期資料格式 範例：傳入{year: '113',month: '1',day: '1'} 則會顯示 113/01/01 
 */

@Component({
  selector: 'app-dayPicker',
  standalone: true,
  templateUrl: './dayPicker.component.html',
  styleUrls: ['./dayPicker.component.scss'],
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DayPickerComponent),
      multi: true,
    },
  ],
})
export class DayPickerComponent implements ControlValueAccessor {
  // 是否禁用dayPicker
  @Input() disabled: boolean = false;
  // 是否預設為當天日期
  @Input() isDefaultToday: boolean = false;
  // 選擇日期的起始範圍
  @Input() startRange: number = 5;
  // 選擇日期的結束範圍
  @Input() endRange: number = 5;

  // 初始化資料
  years: number[] = [];
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  days: number[] = [];
  // 當前所選日期
  selectedYear: number = 0;
  selectedMonth: number = 0;
  selectedDay: number = 0;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {
    // 生成年份範圍
    const currentYear = new Date().getFullYear() - 1911;
    for (
      let i = currentYear - this.startRange;
      i <= currentYear + this.endRange;
      i++
    ) {
      this.years.push(i);
    }
    // 如果是預設為當天日期，則選擇當天日期
    if (this.isDefaultToday) {
      this.onTodayClick();
    }
  }

  // ControlValueAccessor 的實作
  writeValue(value: any): void {
    if (value) {
      this.selectedYear = value.year;
      this.selectedMonth = value.month;
      this.selectedDay = value.day;
      this.updateDays();
    } else {
      // 如果是預設為當天日期，則選擇當天日期
      if (this.isDefaultToday) {
        this.onTodayClick();
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 當年份或月份改變時，更新天數
  onYearChange() {
    this.updateDays();
    this.propagateChange();
  }

  onMonthChange() {
    this.updateDays();
    this.propagateChange();
  }

  onDayChange() {
    this.propagateChange();
  }

  // 選擇當天日期
  onTodayClick() {
    const currentYear = new Date().getFullYear() - 1911;
    // 預設為當前年份與月份
    this.selectedYear = currentYear;
    this.selectedMonth = new Date().getMonth() + 1;
    this.selectedDay = new Date().getDate();
    this.updateDays();
    this.propagateChange();
  }

  // 清空日期選擇器
  onClearClick() {
    this.selectedYear = 0;
    this.selectedMonth = 0;
    this.selectedDay = 0;
    this.updateDays();
    this.propagateChange();
  }

  // 更新日期選擇器
  updateDays() {
    const daysInMonth = new Date(
      this.selectedYear,
      this.selectedMonth,
      0
    ).getDate();
    this.days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push(i);
    }
    // 避免當選擇日期比新月份天數大時出現錯誤
    if (this.selectedDay > daysInMonth) {
      this.selectedDay = daysInMonth;
    }
  }

  // 格式化日期
  formatDate(date: number): string {
    if (date < 10) {
      return '0' + date;
    } else {
      return date.toString();
    }
  }

  // 通知外部模型變化
  private propagateChange() {
    this.onChange({
      year: this.selectedYear.toString(),
      month: this.selectedMonth.toString(),
      day: this.selectedDay.toString(),
    });
  }
}
