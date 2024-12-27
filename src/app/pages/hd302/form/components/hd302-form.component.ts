import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzProgressModule } from 'ng-zorro-antd/progress'; // 引入 Progress 模組
import { NzStatisticModule } from 'ng-zorro-antd/statistic'; // 引入統計模組
import { NzTableModule } from 'ng-zorro-antd/table'; // 引入表格模組

@Component({
  selector: 'app-hd302-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    NzProgressModule,  // 註冊 Progress 模組
    NzStatisticModule, // 註冊統計模組
    NzTableModule,     // 註冊表格模組
  ],
  templateUrl: './hd302-form.component.html',
  styleUrls: ['./hd302-form.component.scss'],
})
export class Hd302FormComponent implements OnInit {
  // 模擬的風險數據
  public riskData = [
    { level: '高風險', count: 50, color: '#FF5733' },
    { level: '中風險', count: 30, color: '#FFC300' },
    { level: '低風險', count: 20, color: '#28A745' }
  ];

  // 今日通報總數
  public totalReports = 100;

  // 未處理的通報數
  public pendingReports = 40;

  // 已處理的通報數
  public completedReports = 60;

  // 計算百分比
  public riskPercentages: number[] = [];

  // 顏色對應
  public riskColors = ['#FF5733', '#FFC300', '#28A745'];

  // 通報列表數據
  public reportList = [
    { id: 1, level: '高風險', description: '通報1描述', status: '處理中' },
    { id: 2, level: '中風險', description: '通報2描述', status: '已完成' },
    { id: 3, level: '低風險', description: '通報3描述', status: '處理中' },
    { id: 4, level: '高風險', description: '通報4描述', status: '已完成' },
  ];

  constructor() { }

  ngOnInit(): void {
    // 計算每個風險等級的百分比
    const total = this.riskData.reduce((sum, item) => sum + item.count, 0);
    this.riskPercentages = this.riskData.map(item => (item.count / total) * 100);
  }

  // 格式化百分比
  public percentFormatter(value: number): string {
    return `${value.toFixed(2)}%`;
  }

  // 計算已處理與未處理通報的百分比
  public calculateCompletionPercentage(): number {
    return (this.completedReports / this.totalReports) * 100;
  }

  // 計算風險等級進度條顯示
  public getRiskProgress(level: string): number {
    const data = this.riskData.find(item => item.level === level);
    return data ? (data.count / this.totalReports) * 100 : 0;
  }
}
