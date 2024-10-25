import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CheckboxGroup,
  SearchResultData,
} from '../service/hd307-list.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { compareDate } from '../../../../common/utils/compareDate';

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
    ErrorMessageComponent,
  ],
  templateUrl: './hd307-list.component.html',
  styleUrl: './hd307-list.component.scss',
})
export class Hd307ListComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 當前已選取的個案
  currentSelectedCase: string[] = [];
  // 控制匯出modal是否顯示
  isVisible: boolean = false;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 檢查日期區間
  checkDateRange: boolean = false;
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

  // 匯出檔案勾選狀態
  exportFile: CheckboxGroup[] = [
    {
      label: '個案基本資料表',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '個案訪視紀錄',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '個案清冊(Excel)',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '服務紀錄清冊(Excel)',
      value: '03',
      checked: false,
      disabled: false,
    },
    {
      label: '個案生活品質量表清冊(Word)',
      value: '04',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // message
  ) {
    // 匯出檔案CheckboxGroup
    const exportFileGroup = this.createCheckboxGroup(this.exportFile);

    // 個案基本資料表_檔案類型
    exportFileGroup['caseBasicInfo_fileType'] = new FormControl('');
    // 個案基本資料表_是否需要隱碼
    exportFileGroup['caseBasicInfo_needsAnonymization'] = new FormControl('');
    // 個案訪視紀錄_檔案類型
    exportFileGroup['caseVisitRecord_fileType'] = new FormControl('');
    // 個案訪視紀錄_是否需要隱碼
    exportFileGroup['caseVisitRecord_needsAnonymization'] = new FormControl('');

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 服務狀態
      serviceStatus: new FormControl(''),
      // 個案姓名
      caseName: new FormControl(''),
      // 開案日期_起始
      caseOpeningDate_start: new FormControl(''),
      // 開案日期_結束
      caseOpeningDate_end: new FormControl(''),
      // 個案分級
      caseClassification: new FormControl(''),
      // 匯出的檔案
      exportFile: new FormGroup(exportFileGroup),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 禁用檔案類型及是否需要隱碼
    this.form.get('exportFile.caseBasicInfo_fileType')?.disable();
    this.form.get('exportFile.caseBasicInfo_needsAnonymization')?.disable();
    this.form.get('exportFile.caseVisitRecord_fileType')?.disable();
    this.form.get('exportFile.caseVisitRecord_needsAnonymization')?.disable();
  }

  // 搜尋個案資料
  search() {
    // !TODO: 搜尋邏輯
    // 如果日期有輸入，則檢查日期區間
    if (
      compareDate(
        this.form.value.caseOpeningDate_start,
        this.form.value.caseOpeningDate_end
      )
    ) {
      this.checkDateRange = false;
      return;
    } else {
      this.checkDateRange = true;
    }
  }

  // 打開匯出modal
  showModal(): void {
    if (this.currentSelectedCase.length === 0) {
      this.message.error('請先選取個案');
      return;
    }
    // 重製modal內的表單
    this.form.get('exportFile.caseBasicInfo_fileType')?.reset();
    this.form.get('exportFile.caseBasicInfo_fileType')?.disable();
    this.form.get('exportFile.caseBasicInfo_needsAnonymization')?.reset();
    this.form.get('exportFile.caseBasicInfo_needsAnonymization')?.disable();
    this.form.get('exportFile.caseBasicInfo_fileType')?.reset();
    this.form.get('exportFile.caseBasicInfo_needsAnonymization')?.reset();
    this.form.get('exportFile.caseVisitRecord_fileType')?.reset();
    this.form.get('exportFile.caseVisitRecord_fileType')?.disable();
    this.form.get('exportFile.caseVisitRecord_needsAnonymization')?.reset();
    this.form.get('exportFile.caseVisitRecord_needsAnonymization')?.disable();
    this.form.get('exportFile.caseVisitRecord_fileType')?.reset();
    this.form.get('exportFile.caseVisitRecord_needsAnonymization')?.reset();
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
  exportFileChange(checkedValues: string[]) {
    this.exportFile.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
      if (option.value === '00') {
        if (option.checked) {
          this.form.get('exportFile.caseBasicInfo_fileType')?.enable();
          this.form
            .get('exportFile.caseBasicInfo_needsAnonymization')
            ?.enable();
        } else {
          this.form.get('exportFile.caseBasicInfo_fileType')?.disable();
          this.form.get('exportFile.caseBasicInfo_fileType')?.reset();
          this.form
            .get('exportFile.caseBasicInfo_needsAnonymization')
            ?.disable();
          this.form.get('exportFile.caseBasicInfo_needsAnonymization')?.reset();
        }
      }
      if (option.value === '01') {
        if (option.checked) {
          this.form.get('exportFile.caseVisitRecord_fileType')?.enable();
          this.form
            .get('exportFile.caseVisitRecord_needsAnonymization')
            ?.enable();
        } else {
          this.form.get('exportFile.caseVisitRecord_fileType')?.disable();
          this.form.get('exportFile.caseVisitRecord_fileType')?.reset();
          this.form
            .get('exportFile.caseVisitRecord_needsAnonymization')
            ?.disable();
          this.form
            .get('exportFile.caseVisitRecord_needsAnonymization')
            ?.reset();
        }
      }
    });
  }

  // 創建checkbox group
  createCheckboxGroup(options: any[]): { [key: string]: FormControl } {
    const group: { [key: string]: FormControl } = {};
    options.forEach((option) => {
      group[option.value] = new FormControl(option.checked);
      if (option.disabled) {
        group[option.value].disable(); // 如果該選項應該被禁用，則禁用對應的 FormControl
      }
    });
    return group;
  }

  // 關閉當前的tab
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 當填單日期區間改變觸發
  onCaseOpeningDateChange(date: { year: string; month: string; day: string }) {
    // 如果日期有輸入，則檢查日期區間
    if (date && this.checkDateRange) {
      if (
        compareDate(
          this.form.value.caseOpeningDate_start,
          this.form.value.caseOpeningDate_end
        )
      ) {
        this.checkDateRange = false;
        return;
      } else {
        this.checkDateRange = true;
      }
    } else {
      this.checkDateRange = false;
    }
  }
}
