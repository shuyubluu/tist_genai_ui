import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { Hd620ListService } from '../service/hd620-list.service';
import { SearchResultData } from '../service/hd620-list.interface';

@Component({
  selector: 'app-hd620-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd620-list.component.html',
  styleUrl: './hd620-list.component.scss',
})
export class Hd620ListComponent implements OnInit {
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      roleName: '系統管理者',
      level: '1',
    },
    {
      roleName: '總會(處長)',
      level: '2',
    },
    {
      roleName: '服務處(處長)',
      level: '3',
    },
    {
      roleName: '組長',
      level: '4',
    },
    {
      roleName: '主責人',
      level: '5',
    },
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private hd620ListService: Hd620ListService // hd620ListService
  ) {}

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 編輯
  edit() {
    this.router.navigate(['/hd620/form']);
    this.hd620ListService.setMode(false, true);
  }

  // 檢視
  view() {
    this.router.navigate(['/hd620/form']);
    this.hd620ListService.setMode(true, false);
  }
}
