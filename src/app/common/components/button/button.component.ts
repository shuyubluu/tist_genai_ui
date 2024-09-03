import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  SEARCH,
  BOARD,
  ADD,
  PRINT,
  CLOSE,
  DELETE,
  SAVE,
  UPLOAD,
  PENCIAL,
  RETURN,
  RELOAD,
  COPY,
  DATE,
  ACCEPT,
  NEXTPAGE,
  PREVIOUSPAGE,
  DOWNLOAD,
} from '../../utils/buttonHelper';

/**
 * 按鈕元件
 *
 * 若 this.buttonIcon 的值不符合以上任一情況，則返回空字串。
 *
 * 按鈕文字 [buttonText]="'字串'"
 *
 * 附加客製化樣式 [attachClassName]="[...'樣式字串']" 可傳入多個 {需把客製化樣式定義在元件的.scss檔}
 *
 * 預設提供幾種通用色 參數:primary、secondary、danger、success、warning，預設為primary。
 */

// * 按鈕圖示 [buttonIcon]="'參數'" {buttonHelper定義的參數}
// *
// * 根據 this.buttonIcon 的值返回對應的圖示類別字串。
// * 可用的 this.buttonIcon 值及其對應的圖示類別如下：
// *
// * - 'search'：返回 SEARCH (搜尋圖示)
// * - 'board'：返回 BOARD (儀表板圖示)
// * - 'add'：返回 ADD (新增圖示)
// * - 'print'：返回 PRINT (報表產製圖示)
// * - 'close'：返回 CLOSE (關閉圖示)
// * - 'delete'：返回 DELETE (刪除圖示)
// * - 'save'：返回 SAVE (更新圖示)
// * - 'upload'：返回 UPLOAD (上傳圖示)
// * - 'download'：返回 DOWNLOAD (下載圖示)
// * - 'reload'：返回 RELOAD (重載圖示)
// * - 'pencial'：返回 PENCIAL (繪製圖示)
// * - 'return'：返回 RETURN (回首頁圖示)
// * - 'copy'：返回 COPY (同上圖示)
// * - 'date'：返回 DATE (大日曆圖示)
// * - 'accept'：返回 ACCEPT (同意圖示)
// * - 'nextpage'：返回 NEXTPAGE (下一頁圖示)
// * - 'previouspage'：返回 PREVIOUSPAGE (上一頁圖示)
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  // @Input() buttonIcon: string = '';
  @Input() buttonText: string = '';
  @Input() attachClassName: string[] = [''];

  // withIcon: boolean = true;

  ngOnInit() {
    // this.updateIconStatus();
  }

  // getIconClass(): string {
  //   switch (this.buttonIcon) {
  //     case 'search':
  //       return SEARCH; // 搜尋圖示
  //     case 'board':
  //       return BOARD; // 儀表板圖示
  //     case 'add':
  //       return ADD; // 新增圖示
  //     case 'print':
  //       return PRINT; // 報表產製圖示
  //     case 'close':
  //       return CLOSE; // 關閉圖示
  //     case 'delete':
  //       return DELETE; // 刪除圖示
  //     case 'save':
  //       return SAVE; // 更新圖示
  //     case 'upload':
  //       return UPLOAD; // 上傳圖示
  //     case 'download':
  //       return DOWNLOAD; // 下載圖示
  //     case 'reload':
  //       return RELOAD; // 重載圖示
  //     case 'pencial':
  //       return PENCIAL; // 繪製圖示
  //     case 'return':
  //       return RETURN; // 回首頁圖示
  //     case 'copy':
  //       return COPY; // 同上圖示
  //     case 'date':
  //       return DATE; // 大日曆圖示
  //     case 'accept':
  //       return ACCEPT; // 同意圖示
  //     case 'nextpage':
  //       return NEXTPAGE; // 下一頁圖示
  //     case 'previouspage':
  //       return PREVIOUSPAGE; // 上一頁圖示
  //     default:
  //       return '';
  //   }
  // }

  // updateIconStatus() {
  //   this.withIcon = this.getIconClass() !== '';
  // }

  getAttachClass(): string {
    const classes = ['button'];

    if (this.attachClassName.length > 0) {
      classes.push(...this.attachClassName);
    }

    return classes.join(' ');
  }
}
