import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerInformationService } from './../../../../common/components/volunteerInformation/service/volunteer-information.service';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';

@Component({
  selector: 'app-hd260-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    VolunteerInformationComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd260-form.component.html',
  styleUrl: './hd260-form.component.scss',
})
export class Hd260FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 重要事項概要select選項
  selectOptions_importantNotesSummary: string[] = [
    '評核未通過',
    '實習期未通過',
    '違反倫理 ',
    '志工搬離',
    '志工不適任 ',
    '自主退隊',
    '疾病/死亡',
    '其他',
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [Validators.required]),
      // 填表人
      fillingPerson: new FormControl('', [Validators.required]),
      // 退隊日期
      resignationDate: new FormControl('', [Validators.required]),
      // 重要事項概要
      importantNotesSummary: new FormControl('', [Validators.required]),
      // 備品是否繳回
      equipmentReturned: new FormControl('', [Validators.required]),
      // 志工制服數量
      // volunteerUniformCount: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 禁用志工制服數量
    // this.form.get('volunteerUniformCount')?.disable();
  }

  // 備品是否繳回選項改變
  equipmentReturnedChange(checkGroup: string[]) {
    this.form.get('equipmentReturned')?.setValue(checkGroup);
    // if (checkGroup.includes('3')) {
    //   this.form.get('volunteerUniformCount')?.enable();
    // } else {
    //   this.form.get('volunteerUniformCount')?.disable();
    //   this.form.get('volunteerUniformCount')?.reset();
    // }
  }

  // 送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab('退隊表');
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
