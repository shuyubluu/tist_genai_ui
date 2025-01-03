import { Hd100FormService } from './../service/hd100-form.service';
import { Hd100ListService } from './../../list/service/hd100-list.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CaseInformationService } from '../../../../common/components/caseInformation/service/case-information.service';
import { CaseInformationComponent } from '../../../../common/components/caseInformation/components/case-information.component';
import { Hd180ListService } from '../../../hd180/list/service/hd180-list.service';
import { DateValidators } from '../../../../common/validator/date-validator';

@Component({
  selector: 'app-hd100-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    ErrorMessageComponent,
    CaseInformationComponent,
  ],
  templateUrl: './hd100-form.component.html',
  styleUrl: './hd100-form.component.scss',
})
export class Hd100FormComponent implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // tab名稱
  tabName: string = '';
  // 是否從結案名冊禁入的
  isRegisterEnter: boolean = false;
  // 存放上個路由
  previousUrl: string = '';
  // 結案原因select選項
  selectOptions_closureReason: string[] = [
    '個案失聯',
    '超出服務區域範圍',
    '個案決定退出服務',
    '服務未能符合個案需求',
    '個案逝世',
    '進入照顧機構',
    '需求已被滿足',
    '其他',
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public caseInformationService: CaseInformationService, // caseInformationService
    public hd180ListService: Hd180ListService, // hd180ListService
    public hd100ListService: Hd100ListService, // hd100ListService
    public hd100FormService: Hd100FormService // hd100FormService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 1.訪次概況
      // 填表日期
      formFillingDate: new FormControl(''),
      // 結案日期
      closureDate: new FormControl('', [DateValidators.dateValidator]),
      // 結案原因
      closureReason: new FormControl('', [Validators.required]),
      // 結案原因其他
      closureReason_other: new FormControl('', [Validators.required]),
      // 重要事項概要
      importantSummary: new FormControl('', [Validators.required]),
      // 2.主管簽核
      // 單位主管意見
      supervisorOpinion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];
    // 禁用結案原因其他輸入框
    this.form.get('closureReason_other')?.disable();
    if (
      (this.hd180ListService.isView &&
        this.hd100FormService.currentRoute === 'hd180') ||
      (this.hd100ListService.isView &&
        this.hd100FormService.currentRoute === 'hd100')
    ) {
      this.form.disable();
    }
  }

  // 結案原因選擇改變
  handleClosureReasonChange(option: string) {
    if (option === '其他') {
      this.form.get('closureReason_other')?.enable();
    } else {
      this.form.get('closureReason_other')?.disable();
      this.form.get('closureReason_other')?.reset();
    }
  }

  // 儲存
  save() {
    // !TODO:儲存邏輯
  }

  // 完成送審
  review() {
    this.message.create('success', '送審成功');
    this.closeTab();
  }

  // 關閉個案初評表
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }
}
