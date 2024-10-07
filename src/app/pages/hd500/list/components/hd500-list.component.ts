import { HD500_ROUTES } from './../../hd500.routes';
import { Hd500ListService } from './../service/hd500-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { SearchResultData } from '../service/hd500-list.interface';

@Component({
  selector: 'app-hd500-list',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd500-list.component.html',
  styleUrl: './hd500-list.component.scss',
})
export class Hd500ListComponent implements OnInit {
  // 搜尋結果模擬資料
  searchResultData: SearchResultData[] = [
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '總人數',
      code: 'A1',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '性別',
      code: 'A2',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '年齡',
      code: 'A3',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '身份別',
      code: 'A4',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '社會福利補助',
      code: 'A5',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '特殊議題',
      code: 'A6',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '風險',
      code: 'A7',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '風險ｘ特殊議題',
      code: 'A8',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '風險ｘ身份別',
      code: 'A9',
    },
    {
      statisticsItems: '個案基本情形',
      contentStatistics: '社會福利補助ｘ特殊議題',
      code: 'A10',
    },
    {
      statisticsItems: '開結案數據',
      contentStatistics: '開案數ｘ結案數',
      code: 'B1',
    },
    {
      statisticsItems: '開結案數據',
      contentStatistics: '總案數',
      code: 'B2',
    },
    {
      statisticsItems: '開結案數據',
      contentStatistics: '開案人數ｘ來源',
      code: 'B3',
    },
    {
      statisticsItems: '開結案數據',
      contentStatistics: '結案人數ｘ原因',
      code: 'B4',
    },
    {
      statisticsItems: '服務與需求統計',
      contentStatistics: '評估需求最熱門前10項',
      code: 'C1',
    },
    {
      statisticsItems: '服務與需求統計',
      contentStatistics: '實際服務最熱門前10項',
      code: 'C2',
    },
    {
      statisticsItems: '服務與需求統計',
      contentStatistics: '志工提供服務人次',
      code: 'C3',
    },
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private router: Router, // 路由
    private hd500ListService: Hd500ListService
  ) {}

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
  // 檢視
  view(code: string, name: string) {
    this.closeTab('統計內容_' + this.hd500ListService.currentStatisticsName);
    this.router.navigate(['/hd500/form']);
    this.hd500ListService.setStatisticsCode(code);
    this.hd500ListService.setStatisticsName(name);
    HD500_ROUTES.forEach((route: any) => {
      if (route.path) {
        route.data.tabName = '統計內容_' + name;
      }
    });
  }
}
