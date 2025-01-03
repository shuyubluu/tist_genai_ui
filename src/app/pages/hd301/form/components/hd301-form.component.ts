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
import { NzIconModule } from 'ng-zorro-antd/icon';  // 匯入 NzIconModule

@Component({
  selector: 'app-hd301-form',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    NzIconModule,  // 在這裡加入 NzIconModule
  ],
  templateUrl: './hd301-form.component.html',
  styleUrls: ['./hd301-form.component.scss'],
})
export class Hd301FormComponent implements OnInit {
  form: FormGroup;
  tabName: string = '';

  // 模擬上傳的檔案清單
  form_fileList: NzUploadFile[] = [
    {
      uid: '1',
      name: '突發緊急通報單.docx',
      status: 'done',
    },
  ];

  // 模擬的個案清單資料
  form_caseList: Array<any> = [
    {
      caseId: 'E202401001',
      name: '張家航',
      idCard: 'A123456789',
      reporter: '呂育銓',
      unit: '台北市社會局',
      reportTime: '2024-12-23 10:45',
      reported: false, // 新增欄位來標示是否通報過
      riskLevel: '', // 風險等級
    },
    {
      caseId: 'E202401002',
      name: '劉偉健',
      idCard: 'B987654321',
      reporter: '鐘培生',
      unit: '新北市社會局',
      reportTime: '2024-12-23 11:30',
      reported: false, // 新增欄位來標示是否通報過
      riskLevel: '', // 風險等級
    },
    {
      caseId: 'E202401003',
      name: '孫生',
      idCard: 'C112233445',
      reporter: '陳玟理',
      unit: '高雄市社會局',
      reportTime: '2024-12-23 12:15',
      reported: false, // 新增欄位來標示是否通報過
      riskLevel: '', // 風險等級
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tabService: TabService,
    private message: NzMessageService
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.tabName = this.route.snapshot.data['tabName'];
  }

  closeTab() {
    this.tabService.closeTab(this.tabName);
  }

  form_handleChange(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} 上傳成功`);

      // 模擬新增資料至個案清單
      this.form_caseList.push({
        caseId: `E20240100${this.form_caseList.length + 1}`,
        name: '張美麗',
        idCard: 'B987654321',
        reporter: '林小芳',
        unit: '新北市衛生局',
        reportTime: new Date().toLocaleString(),
        reported: false, // 初始未通報
        riskLevel: '', // 初始風險等級
      });
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }

  save() {
    this.message.success('儲存成功');
  }

  // 新增通報方法
  reportCase(index: number): void {
    const caseData = this.form_caseList[index];

    if (caseData.reported) {
      this.message.info(`案件 ${caseData.caseId} 已通報過`);
      return; // 如果已經通報過，就不再處理
    }

    // 模擬後端處理
    this.message.loading('正在處理通報...', { nzDuration: 2000 });

    setTimeout(() => {
      caseData.reported = true; // 標記為已通報

      // 假資料：直接給定風險等級
      caseData.riskLevel = this.getMockRiskLevel(); // 假資料的風險等級

      // 根據風險等級新增附加訊息
      const additionalMessage =
        caseData.riskLevel === 'high'
          ? '，已發送通知信件'
          : '';

      this.message.success(
        `案件 ${caseData.caseId} 通報成功，風險等級為：${caseData.riskLevel}${additionalMessage}`
      );
    }, 2000);
  }

  // 假資料風險等級（模擬後端 API 回傳的風險等級）
  getMockRiskLevel(): string {
    // 這邊你可以根據需求自訂假資料的風險等級邏輯
    const mockLevels = ['low', 'medium', 'high'];
    const randomIndex = Math.floor(Math.random() * mockLevels.length);
    return mockLevels[randomIndex];
  }
}
