import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd620ListService } from '../../list/service/hd620-list.service';

@Component({
  selector: 'app-hd620-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd620-form.component.html',
  styleUrl: './hd620-form.component.scss',
})
export class Hd620FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd620ListService: Hd620ListService, // hd620ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 角色名稱
      roleName: new FormControl(''),
      // 層級
      level: new FormControl(''),
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
    this.closeTab('角色資料權限維護');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
