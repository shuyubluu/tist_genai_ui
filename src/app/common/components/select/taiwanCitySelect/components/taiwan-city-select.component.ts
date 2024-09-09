import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiwanCitySelectService } from '../service/taiwan-city-select.service';
import {
  Cities,
  TaiwanCitySelectValue,
  Districts,
  Villages,
} from '../service/taiwan-city-select.interface';
import { SharedModule } from '../../../../shared/shared.module';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * 台灣地址下拉選單元件
 *
 * 用法:
 * - 直接引入套用即可
 *
 * 隱藏鄉鎮市區及村里:
 * - [onlyCity]="true" (預設為false)
 *
 * disabled 預設為false 可提供布林值 禁用輸入框;
 */

@Component({
  selector: 'app-taiwan-city-select',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './taiwan-city-select.component.html',
  styleUrl: './taiwan-city-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaiwanCitySelectComponent),
      multi: true,
    },
  ],
})
export class TaiwanCitySelectComponent implements OnInit, ControlValueAccessor {
  @Input() onlyCity: boolean = false;
  @Input() disabled: boolean = false;

  // 存放API回傳的縣市資料
  cities: Cities[] = [];
  // 存放API回傳的鄉鎮市區資料
  districts: Districts[] = [];
  // 存放API回傳的村里資料
  villages: Villages[] = [];

  // 存放選項選取的資料
  value: TaiwanCitySelectValue = {
    city: '',
    district: '',
    village: '',
  };

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private taiwanCityService: TaiwanCitySelectService) {}

  // 頁面刷新時，取得縣市資料
  ngOnInit(): void {
    this.taiwanCityService.getCityData().subscribe((cities) => {
      this.cities = cities;
    });
  }

  writeValue(value: TaiwanCitySelectValue): void {
    if (value) {
      this.value = value;
      this.updateSelections();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 當控件被禁用或啟用時，Angular 會調用這個方法
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // 選擇縣市資料後，取得該縣市的鄉鎮市區資料
  onCityChange(event: Event) {
    const cityCode = (event.target as HTMLSelectElement).value;
    this.value.city = cityCode;
    this.value.district = '';
    this.value.village = '';
    this.districts = [];
    this.villages = [];

    this.taiwanCityService.getDistrictData(cityCode).subscribe((districts) => {
      this.districts = districts;
    });

    this.emitValue();
  }
  // 選擇鄉鎮市區資料後，取得該鄉鎮市區的村里資料
  onDistrictChange(event: Event) {
    const townCode = (event.target as HTMLSelectElement).value;
    this.value.district = townCode;
    this.value.village = '';
    this.villages = [];

    this.taiwanCityService.getVillageData(townCode).subscribe((villages) => {
      this.villages = villages;
    });

    this.emitValue();
  }
  // 選擇村里資料後，更新表單值
  onVillageChange(event: Event) {
    const villageCode = (event.target as HTMLSelectElement).value;
    this.value.village = villageCode;
    this.emitValue();
  }
  // 通知父組件表單值已改變
  private emitValue(): void {
    this.onChange(this.value);
    this.onTouched();
  }
  // 更新地選項菜單
  private updateSelections(): void {
    if (this.value.city) {
      this.taiwanCityService
        .getDistrictData(this.value.city)
        .subscribe((districts) => {
          this.districts = districts;
          if (this.value.district) {
            this.taiwanCityService
              .getVillageData(this.value.district)
              .subscribe((villages) => {
                this.villages = villages;
              });
          }
        });
    }
  }
}
