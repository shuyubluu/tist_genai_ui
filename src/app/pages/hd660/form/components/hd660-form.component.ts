import { NzMessageService } from 'ng-zorro-antd/message';
import { Hd660ListService } from './../../list/service/hd660-list.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { DateValidators } from '../../../../common/validator/date-validator';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd660-form',
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
  templateUrl: './hd660-form.component.html',
  styleUrl: './hd660-form.component.scss',
})
export class Hd660FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';

  // 附件模擬上傳檔案
  attachment_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '附件.pdf',
      status: 'done',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    public hd660ListService: Hd660ListService, // hd660ListService
    private message: NzMessageService // message
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 發佈日期
      publicationDate: new FormControl('', [DateValidators.dateValidator]),
      // 下架日期
      offShelfDate: new FormControl(''),
      // 發佈單位
      publishingUnit: new FormControl('總會(系統管理者)'),
      // 主旨標題
      subjectTitle: new FormControl('', [Validators.required]),
      // 發佈人
      publisher: new FormControl(''),
      // 公告內容
      noticeContent: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 檢視模式，禁用表單
    if (this.hd660ListService.isView) {
      this.form.disable();
    }
    // 禁用發佈單位
    this.form.get('publishingUnit')?.disable();
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 附件上傳點擊事件
  attachment_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }
}
