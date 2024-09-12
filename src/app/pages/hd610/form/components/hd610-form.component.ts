import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Hd610ListService } from '../../list/service/hd610-list.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd610-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd610-form.component.html',
  styleUrl: './hd610-form.component.scss',
})
export class Hd610FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 角色層級select選項
  selectOptions_roleLevel: string[] = [
    '系統管理者',
    '總會(處長)',
    '服務處(處長)',
    '組長',
    '主責人',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd610ListService: Hd610ListService, // hd610ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 單位名稱
      unitName: new FormControl(''),
      // 代碼
      code: new FormControl(''),
      // 角色層級
      roleLevel: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  // 儲存
  save() {
    this.message.success('儲存成功');
  }

  // 新增
  create() {
    this.message.success('新增成功');
    this.closeTab('組織單位資料維護');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
