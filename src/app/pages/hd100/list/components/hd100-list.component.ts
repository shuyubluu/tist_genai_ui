import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { PaginationComponent } from '../../../../common/components/pagination/pagination.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchResultData } from '../service/hd100-list.interface';

@Component({
  selector: 'app-hd100-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    PaginationComponent,
  ],
  templateUrl: './hd100-list.component.html',
  styleUrl: './hd100-list.component.scss',
})
export class Hd100ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 是否顯示搜尋結果
  isShowSearchResult: boolean = false;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceStatus: '持續服務',
      caseName: '王大明',
      gender: '男',
      dateOfBirth: '113/01/01',
      responsiblePerson: '王小明',
      caseOpeningDate: '113/01/01',
      caseClassification: '高風險',
    },
  ];
  // 服務狀態select選項
  selectOptions_serviceStatus: string[] = [
    '持續服務',
    '暫停服務',
    '結案',
    '無',
  ];
  // 個案分級select選項
  selectOptions_caseClassification: string[] = [
    '高風險',
    '中風險',
    '低風險',
    '無',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務狀態
      serviceStatus: new FormControl(''),
      // 個案姓名
      caseName: new FormControl(''),
      // 開案日期
      caseOpeningDate: new FormControl(''),
      // 個案分級
      caseClassification: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 生成多筆模擬搜尋結果資料
    for (let i = 0; i < 5; i++) {
      this.searchResultData.push(this.searchResultData[i]);
    }
  }

  // 搜尋個案資料
  search() {
    this.isShowSearchResult = true;
  }

  // 新增個案資料
  create() {
    this.router.navigate(['/hd110']);
  }

  // 關閉個案資料清單
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
