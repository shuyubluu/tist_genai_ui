import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchResultData } from '../service/hd307-list.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd307-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd307-list.component.html',
  styleUrl: './hd307-list.component.scss',
})
export class Hd307ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 當前已選取的個案
  currentSelectedCase: string[] = [];
  // 控制匯出modal是否顯示
  isVisible: boolean = false;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      serviceStatus: '持續服務',
      caseName: '王大明',
      gender: '男',
      dateOfBirth: '50/01/01',
      responsiblePerson: '吳小美',
      caseOpeningDate: '113/02/01',
      caseClassification: '中',
      isChoice: false,
    },
    {
      serviceStatus: '暫停服務',
      caseName: '張大明',
      gender: '男',
      dateOfBirth: '50/02/01',
      responsiblePerson: '吳小美',
      caseOpeningDate: '113/02/01',
      caseClassification: '高',
      isChoice: false,
    },
    {
      serviceStatus: '結案',
      caseName: '陳小華',
      gender: '女',
      dateOfBirth: '50/01/01',
      responsiblePerson: '吳小美',
      caseOpeningDate: '113/02/01',
      caseClassification: '低',
      isChoice: false,
    },
    {
      serviceStatus: '持續服務',
      caseName: '黃阿志',
      gender: '男',
      dateOfBirth: '50/01/01',
      responsiblePerson: '吳小美',
      caseOpeningDate: '113/02/01',
      caseClassification: '中',
      isChoice: false,
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
  // 檔案類型
  selectOptions_fileType: string[] = ['pdf', 'word'];
  // 是非題select選項
  selectOptions_trueOrFalse: string[] = ['是', '否'];

  // 分頁器切割後的資料
  get newSearchResultData(): SearchResultData[] {
    return this.searchResultData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // message
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
      // 個案基本資料表_檔案類型
      caseBasicInfo_fileType: new FormControl(''),
      // 個案基本資料表_是否需要隱碼
      caseBasicInfo_needsAnonymization: new FormControl(''),
      // 個案訪視紀錄_檔案類型
      caseVisitRecord_fileType: new FormControl(''),
      // 個案訪視紀錄_是否需要隱碼
      caseVisitRecord_needsAnonymization: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 搜尋個案資料
  search() {
    // !TODO: 搜尋邏輯
  }

  // 打開匯出modal
  showModal(): void {
    if (this.currentSelectedCase.length === 0) {
      this.message.error('請先選取個案');
      return;
    }
    // 重製modal內的表單
    this.form.get('caseBasicInfo_fileType')?.reset();
    this.form.get('caseBasicInfo_needsAnonymization')?.reset();
    this.form.get('caseVisitRecord_fileType')?.reset();
    this.form.get('caseVisitRecord_needsAnonymization')?.reset();
    this.isVisible = true;
  }

  // 匯出
  export(): void {
    // !TODO:匯出邏輯
    this.message.success('匯出成功');
    this.isVisible = false;
  }

  // 取消匯出
  handleCancel(): void {
    this.message.error('取消操作');
    this.isVisible = false;
  }

  // 選取
  pick(caseValue: SearchResultData) {
    caseValue.isChoice = true;
    this.currentSelectedCase.push(caseValue.caseName);
  }

  // 取消選取
  cancelPick(caseValue: SearchResultData) {
    caseValue.isChoice = false;
    this.currentSelectedCase = this.currentSelectedCase.filter(
      (item) => item !== caseValue.caseName
    );
  }

  // 當匯出檔案的選項改變時觸發
  handleExportFileChange(checkGroup: string[]) {
    this.form.get('exportFile')?.setValue(checkGroup);
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
