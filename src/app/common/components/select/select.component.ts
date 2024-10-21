import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * 下拉選單元件
 *
 * 寬度樣式 [selectWidth]="'寬度字串'" 百分比: %, 像素: px
 *
 * 選單內容 [options]="[...'選單']"
 *
 * 附加客製化樣式 [attachClassName]="[...'樣式字串']" 可傳入多個 {需把客製化樣式定義在元件的.scss檔}
 *
 * 選擇事件 (selectionChange)="selectOption($event)"
 *
 * disabled 預設為false 可提供布林值 禁用輸入框;
 */
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() selectWidth: string = '';
  @Input() options: string[] = [];
  @Input() attachClassName: string[] = [];
  @Input() disabled: boolean = false;

  @Output() selectionChange = new EventEmitter<string>();

  placeHolder: string = '';
  selectedOption: string = '';

  onChange: (value: string) => void = () => {}; // 當控件值變更時調用的函數
  onTouched: () => void = () => {}; // 當控件被觸摸時調用的函數

  writeValue(value: any): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // 當控件被禁用或啟用時，Angular 會調用這個方法
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {}

  getSelectClass(): string {
    let classes = [];

    if (this.attachClassName.length > 0) {
      classes.push(...this.attachClassName);
    }

    return classes.join(' ');
  }

  onSelectChange(option: string) {
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched();
    this.selectionChange.emit(this.selectedOption);
  }
}
