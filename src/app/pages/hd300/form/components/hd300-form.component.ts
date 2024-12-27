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

interface ExtendedNzUploadFile extends NzUploadFile {
  isConverting?: boolean;
  isConverted?: boolean;
  isLoading?: boolean;
}

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
  styleUrls: ['./hd300-form.component.scss'],
})
export class Hd300FormComponent implements OnInit {
  form: FormGroup;
  tabName: string = '';

  // 模擬的上傳檔案資料，並且包含轉換結果
  form_fileList: ExtendedNzUploadFile[] = [
    {
      uid: '1',
      name: '訪談紀錄1.mp3',
      status: 'done',
      result: `
        李美玲：陳先生，最近生活過得還好嗎？有沒有遇到什麼困難需要我們協助的？
        陳建國：嗯，還可以啦，就是膝蓋有點不舒服，天氣變冷的時候會覺得酸痛，不知道是不是年紀大了的關係。
        李美玲：明白了，像這樣的情況可能是關節退化的問題。我建議您可以去附近的診所做個檢查，順便問問醫生是否需要做復健。最近家裡有需要添購什麼輔助設備嗎？
        陳建國：現在還好，不過家裡樓梯有點滑，上下樓不太方便。扶手之前有想裝，不過沒找人來弄。
        李美玲：這確實很重要，尤其是避免摔倒的風險。我可以幫您聯繫相關單位，看看是否有補助資源可以申請，這樣可以減輕負擔。
        陳建國：那太好了，謝謝您。
        李美玲：不客氣的。另外，我聽說您有參加社區的活動，最近還有參加嗎？
        陳建國：有啊，每週的舞蹈課還在上，就是最近人有點少，活動氣氛沒以前熱鬧了。
        李美玲：這是很好的活動，能保持身體健康。我也會向社區建議多辦一些符合長輩興趣的活動，吸引更多人參加。
        陳建國：那很好，我覺得社區活動能讓我們這些老人家多動動，心情也會比較好。
        李美玲：沒錯！如果有任何需要，您隨時可以聯繫我。今天的訪談就到這邊，謝謝您的配合。
        陳建國：謝謝您特地來家訪，辛苦了。
      `,
    },
    {
      uid: '2',
      name: '訪談紀錄2.mp3',
      status: 'done',
      result: '預設文本 2',
    },
    {
      uid: '3',
      name: '訪談紀錄3.mp3',
      status: 'done',
      result: '預設文本 3',
    },
  ];

  editingFile: NzUploadFile | null = null;
  newFileName: string = '';

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
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} 上傳失敗.`);
    }
  }

  save() {
    this.message.success('儲存成功');
  }

  deleteFile(file: NzUploadFile): void {
    const index = this.form_fileList.indexOf(file);
    if (index > -1) {
      this.form_fileList.splice(index, 1);
      this.message.success(`${file.name} 已刪除`);
    }
  }

  editFile(file: NzUploadFile): void {
    this.editingFile = file;
    this.newFileName = file['result']; // 預設為檔案的 result ...
  }

  cancelEdit(): void {
    this.editingFile = null;
    this.newFileName = '';
  }

  saveEdit(): void {
    if (this.editingFile) {
      this.editingFile['result'] = this.newFileName;
      this.message.success(`編輯成功: ${this.editingFile['name']}`);
      this.cancelEdit();
    }
  }

  // 轉換檔案的方法
  convertFile(file: NzUploadFile): void {
    console.log('開始轉換檔案:', file);
  
    // 開始轉換過程，顯示loading
    file['isConverting'] = true;  // 設定為轉換中
  
    // 模擬3秒鐘轉換過程
    setTimeout(() => {
      file['isConverted'] = true;  // 設定轉換完成
      file['isConverting'] = false;  // 停止轉換狀態
  
      this.message.success(`${file.name} 已轉換`);
    }, 3000); 
  }

  // 處理檔案下載
  downloadFile(file: NzUploadFile): void {
    this.message.success(`${file.name} 開始下載`);
    // 這裡您可以處理實際的下載邏輯
  }

  summarizeFile(file: NzUploadFile): void {
    // 開始處理摘要，顯示 loading
    file['isLoading'] = true;
  
    // 模擬 3 秒的延遲運算
    setTimeout(() => {
      // 模擬 API 回應
      const response = {
        summary: `摘要內容: 檔案 ${file.name}`,
        keyPoints: ['重點1', '重點2', '重點3'],
      };
  
      // 顯示摘要結果
      this.message.success(`摘要：${response.summary}`);
      console.log('重點:', response.keyPoints);
  
      // 處理結束，隱藏 loading
      file['isLoading'] = false;
    }, 3000); // 3 秒延遲
  }
  
  
}
