import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { SearchResultData } from '../service/hd670-list.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd670-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd670-list.component.html',
  styleUrl: './hd670-list.component.scss',
})
export class Hd670ListComponent implements OnInit {
  // tab名稱
  tabName: string = '';

  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器一頁多少筆數據
  pageSize: number = 10;
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      eventName: '保險申請',
      listOfOption: ['系統管理者1', '系統管理者2'],
      listOfSelectedValue: [],
      creationTime: '113/05/02',
    },
    {
      eventName: '公告信件通知',
      listOfOption: ['系統管理者'],
      listOfSelectedValue: ['系統管理者'],
      creationTime: '113/05/02',
    },
  ];

  // 分頁器切割後的資料
  get newSearchResultData(): SearchResultData[] {
    return this.searchResultData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  constructor(
    private message: NzMessageService, // message
    private route: ActivatedRoute,
    private tabService: TabService // 關閉tab的Service
  ) {}

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }

  // 儲存
  save() {
    this.message.success('儲存成功');
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }
}
