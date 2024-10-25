import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerInformationService } from './../../../../common/components/volunteerInformation/service/volunteer-information.service';
import { VolunteerInformationComponent } from '../../../../common/components/volunteerInformation/components/volunteer-information.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { DateValidators } from '../../../../common/validator/date-validator';
import { Hd200ListService } from '../../../hd200/list/service/hd200-list.service';
import { CheckboxGroup } from '../service/hd260-form.interface';

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
  // 是否需要上傳同意書
  isNeedUploadConsentForm: boolean = false;
  // tab名稱
  tabName: string = '';
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
  // 同意書模擬匯入檔案
  consentForm_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '同意書.word',
      status: 'done',
    },
  ];

  // 備品是否繳回
  equipmentReturned: CheckboxGroup[] = [
    {
      label: '志工證',
      value: '00',
      checked: false,
      disabled: false,
    },
    {
      label: '志工背心',
      value: '01',
      checked: false,
      disabled: false,
    },
    {
      label: '志工名片',
      value: '02',
      checked: false,
      disabled: false,
    },
    {
      label: '志工制服 2 件',
      value: '03',
      checked: false,
      disabled: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService, // 關閉tab的Service
    private message: NzMessageService, // 訊息
    public hd200ListService: Hd200ListService, // hd200ListService
    public volunteerInformationService: VolunteerInformationService // volunteerInformationService
  ) {
    // 接收後端回傳資料
    // this.equipmentReturned =

    const equipmentReturnedGroup = this.createCheckboxGroup(
      this.equipmentReturned
    );

    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 填表日期
      fillingDate: new FormControl('', [DateValidators.dateValidator]),
      // 填表人
      fillingPerson: new FormControl('', [Validators.required]),
      // 退隊日期
      resignationDate: new FormControl('', [DateValidators.dateValidator]),
      // 重要事項概要
      importantNotesSummary: new FormControl('', [Validators.required]),
      // 備品是否繳回
      equipmentReturned: new FormGroup(equipmentReturnedGroup),
      // 志工制服數量
      // volunteerUniformCount: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    // 複選框初始化
    const equipmentReturnedCheckedValues = this.equipmentReturned
      .filter((option) => option.checked)
      .map((option) => option.value);
    this.equipmentReturnedChange(equipmentReturnedCheckedValues);

    // 若不是從志工管理頁簽進入，則禁用表單
    if (
      !this.volunteerInformationService.isChoiceVolunteer ||
      this.hd200ListService.isView
    ) {
      this.form.disable();
    }
    // 禁用志工制服數量
    // this.form.get('volunteerUniformCount')?.disable();
  }

  // 備品是否繳回選項改變
  equipmentReturnedChange(checkedValues: string[]) {
    this.equipmentReturned.forEach((option) => {
      // 更新每個選項的 checked 狀態
      option.checked = checkedValues.includes(option.value);
    });
    this.isNeedUploadConsentForm = !this.equipmentReturned.some(
      (option) => option.checked
    );
  }

  // 創建checkbox group
  createCheckboxGroup(options: any[]): { [key: string]: FormControl } {
    const group: { [key: string]: FormControl } = {};
    options.forEach((option) => {
      group[option.value] = new FormControl(option.checked);
      if (option.disabled) {
        group[option.value].disable(); // 如果該選項應該被禁用，則禁用對應的 FormControl
      }
    });
    return group;
  }

  // 儲存
  save() {
    this.message.create('success', '儲存成功');
    this.closeTab();
  }

  // 關閉當前的tab
  closeTab(): void {
    this.tabService.closeTab(this.tabName);
  }

  // 同意書上傳點擊事件
  consentForm_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }
}
