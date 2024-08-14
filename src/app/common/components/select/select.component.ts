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
 * 寬度樣式 [selectWidth]="'寬度字串'"
 * 可用的寬度範圍：
 * - 百分比：15% ~ 100%
 * - 像素：70px ~ 300px
 * - 寬度值皆以 5 為單位遞增
 *
 * 範例：
 * - '20pc' 表示 20 百分比 寬度
 * - '125px' 表示 125 像素 寬度
 *
 * 選單內容 [options]="[...'選單']"
 *
 * 預設選項 [defaultPlaceHolder]="boolean" 預設為true: 則預設選單--- ; 若為false: 則預設選單第一個值
 *
 * 預設已選擇選項 [optionSelected]="string" 指定選項為預設選項
 *
 * 附加客製化樣式 [attachClassName]="[...'樣式字串']" 可傳入多個 {需把客製化樣式定義在元件的.scss檔}
 *
 * 選擇事件 (selectionChange)="selectOption($event)"
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
  @Input() defaultPlaceHolder: boolean = true;
  @Input() optionSelected: string = '';
  @Input() attachClassName: string[] = [];

  @Output() selectionChange = new EventEmitter<string>();

  placeHolder: string = '---';
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

  ngOnInit() {
    if (
      this.defaultPlaceHolder &&
      this.options.indexOf(this.placeHolder) === -1
    ) {
      this.options = [this.placeHolder, ...this.options];
    }

    if (this.optionSelected) {
      this.selectedOption = this.optionSelected;
    } else {
      this.selectedOption = this.defaultPlaceHolder
        ? this.placeHolder
        : this.options.length > 0
        ? this.options[0]
        : '';
    }
  }

  getSelectClass(): string {
    let classes = [];
    if (this.selectWidth.includes('pc')) {
      let widthValue = this.selectWidth.replace('pc', '');
      switch (widthValue) {
        case '15':
          classes.push('select-width-15pc');
          break;
        case '20':
          classes.push('select-width-20pc');
          break;
        case '25':
          classes.push('select-width-25pc');
          break;
        case '30':
          classes.push('select-width-30pc');
          break;
        case '35':
          classes.push('select-width-35pc');
          break;
        case '40':
          classes.push('select-width-40pc');
          break;
        case '45':
          classes.push('select-width-45pc');
          break;
        case '50':
          classes.push('select-width-50pc');
          break;
        case '55':
          classes.push('select-width-55pc');
          break;
        case '60':
          classes.push('select-width-60pc');
          break;
        case '65':
          classes.push('select-width-65pc');
          break;
        case '70':
          classes.push('select-width-70pc');
          break;
        case '75':
          classes.push('select-width-75pc');
          break;
        case '80':
          classes.push('select-width-80pc');
          break;
        case '85':
          classes.push('select-width-85pc');
          break;
        case '90':
          classes.push('select-width-90pc');
          break;
        case '95':
          classes.push('select-width-95pc');
          break;
        case '100':
          classes.push('select-width-100pc');
          break;
        default:
          break;
      }
    }

    if (this.selectWidth.includes('px')) {
      let widthValue = this.selectWidth.replace('px', '');
      switch (widthValue) {
        case '70':
          classes.push('select-width-70px');
          break;
        case '75':
          classes.push('select-width-75px');
          break;
        case '80':
          classes.push('select-width-80px');
          break;
        case '85':
          classes.push('select-width-85px');
          break;
        case '90':
          classes.push('select-width-90px');
          break;
        case '95':
          classes.push('select-width-95px');
          break;
        case '100':
          classes.push('select-width-100px');
          break;
        case '105':
          classes.push('select-width-105px');
          break;
        case '110':
          classes.push('select-width-110px');
          break;
        case '115':
          classes.push('select-width-115px');
          break;
        case '120':
          classes.push('select-width-120px');
          break;
        case '125':
          classes.push('select-width-125px');
          break;
        case '130':
          classes.push('select-width-130px');
          break;
        case '135':
          classes.push('select-width-135px');
          break;
        case '140':
          classes.push('select-width-140px');
          break;
        case '145':
          classes.push('select-width-145px');
          break;
        case '150':
          classes.push('select-width-150px');
          break;
        case '155':
          classes.push('select-width-155px');
          break;
        case '160':
          classes.push('select-width-160px');
          break;
        case '165':
          classes.push('select-width-165px');
          break;
        case '170':
          classes.push('select-width-170px');
          break;
        case '175':
          classes.push('select-width-175px');
          break;
        case '180':
          classes.push('select-width-180px');
          break;
        case '185':
          classes.push('select-width-185px');
          break;
        case '190':
          classes.push('select-width-190px');
          break;
        case '195':
          classes.push('select-width-195px');
          break;
        case '200':
          classes.push('select-width-200px');
          break;
        case '205':
          classes.push('select-width-205px');
          break;
        case '210':
          classes.push('select-width-210px');
          break;
        case '215':
          classes.push('select-width-215px');
          break;
        case '220':
          classes.push('select-width-220px');
          break;
        case '225':
          classes.push('select-width-225px');
          break;
        case '230':
          classes.push('select-width-230px');
          break;
        case '235':
          classes.push('select-width-235px');
          break;
        case '240':
          classes.push('select-width-240px');
          break;
        case '245':
          classes.push('select-width-245px');
          break;
        case '250':
          classes.push('select-width-250px');
          break;
        case '255':
          classes.push('select-width-255px');
          break;
        case '260':
          classes.push('select-width-260px');
          break;
        case '265':
          classes.push('select-width-265px');
          break;
        case '270':
          classes.push('select-width-270px');
          break;
        case '275':
          classes.push('select-width-275px');
          break;
        case '280':
          classes.push('select-width-280px');
          break;
        case '285':
          classes.push('select-width-285px');
          break;
        case '290':
          classes.push('select-width-290px');
          break;
        case '295':
          classes.push('select-width-295px');
          break;
        case '300':
          classes.push('select-width-300px');
          break;
        default:
          break;
      }
    }

    if (this.attachClassName.length > 0) {
      classes.push(...this.attachClassName);
    }

    return classes.join(' ');
  }

  onSelectChange(event: any) {
    this.selectedOption = event;
    this.onChange(event);
    this.onTouched();
    this.selectionChange.emit(this.selectedOption);
  }
}
