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
 * 輸入框元件
 *
 * 寬度樣式 [inputWidth]="'寬度字串'" 百分比: %, 像素: px
 *
 * 附加客製化樣式 [attachClassName]="[...'樣式字串']" 可傳入多個 {需把客製化樣式定義在元件的.scss檔}
 *
 * 預設已輸入內容 [contentEntered]="any" 指定輸入框內容為預設已輸入內容
 *
 * disabled 預設為false 可提供布林值 禁用輸入框;
 *
 * type 預設為text [type]="'字串'" 字串內容為輸入框類型
 *
 * placeholder 為預設字詞 [placeholder]="'字串'"
 *
 * 自定義表單驗證 formControlName="input的formControlName" 綁定表單驗證的ControlName
 *
 * maxLength [maxLength]="此輸入框最大的輸入字數" 為輸入框最大字數
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() inputWidth: string = '';
  @Input() attachClassName: string[] = [];
  @Input() contentEntered: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() maxLength?: number;
  // 是否為評分輸入框
  // @Input() isScore: boolean = false;

  @Output() inputTextChange = new EventEmitter<string>();

  // ControlValueAccessor
  enteredContent: string = ''; // 預設輸入框內容
  isReady: boolean = false;

  onChange: (value: string) => void = () => {}; // 當控件值變更時調用的函數

  onTouched: () => void = () => {}; // 當控件被觸摸時調用的函數

  // 當外部表單模型更新時，Angular 會調用這個方法
  writeValue(value: string): void {
    this.enteredContent = value; // 將新值寫入控件中
  }
  // 當控件的值發生變更時，Angular 會調用這個方法來註冊一個回調函數
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn; // 當控件的值變更時，我們需要調用這個回調函數來通知外部表單模型
  }

  // 當控件被觸摸（例如，失去焦點）時，Angular 會調用這個方法來註冊一個回調函數
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn; // 當控件被觸摸時，我們需要調用這個回調函數來通知外部表單模型
  }

  // 當控件被禁用或啟用時，Angular 會調用這個方法
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; // 將禁用狀態寫入控件中
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    let value: string = target.value;

    if (this.maxLength !== undefined && value.length > this.maxLength) {
      value = value.slice(0, this.maxLength);
    }

    this.enteredContent = value;
    this.onChange(value);
    this.inputTextChange.emit(value);
  }

  constructor() {}

  ngOnInit() {
    this.enteredContent = this.contentEntered || '';
    setTimeout(() => {
      this.isReady = true;
    });
  }

  getInputClass(): string {
    let classes = [];

    if (this.attachClassName.length > 0) {
      classes.push(...this.attachClassName);
    }

    return classes.join(' ');
  }
}
