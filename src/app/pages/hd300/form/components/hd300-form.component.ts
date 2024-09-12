import { Hd300ListService } from './../../list/service/hd300-list.service';
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
  selector: 'app-hd300-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
  ],
  templateUrl: './hd300-form.component.html',
  styleUrl: './hd300-form.component.scss',
})
export class Hd300FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd300ListService: Hd300ListService, // hd300ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 上傳日期
      uploadDate: new FormControl(''),
      // 報表名稱
      reportTitle: new FormControl(''),
    });
  }
  // 模擬表單上傳檔案
  form_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '志工教育訓練表.excel',
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
      this.message.success(`${info.file.name} 匯入成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 匯入失敗.`);
    }
  }

  // 儲存
  save() {
    this.message.success('儲存成功');
  }

  // 新增
  create() {
    this.message.success('新增成功');
    this.closeTab('志工教育訓練');
  }
}
