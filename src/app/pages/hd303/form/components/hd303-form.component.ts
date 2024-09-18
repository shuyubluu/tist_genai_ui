import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hd303-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd303-form.component.html',
  styleUrl: './hd303-form.component.scss',
})
export class Hd303FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({});
  }
  // 模擬表單上傳檔案
  form_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '志工考核表.excel',
      status: 'done',
    },
  ];

  ngOnInit(): void {}

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 表單上傳點擊事件
  form_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }

  // 儲存
  save() {
    this.message.success('儲存成功');
  }


}
