import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared.module';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { create } from 'domain';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [SharedModule, ButtonComponent],
})
export class WelcomeComponent {
  @ViewChild('contentTemplate', { static: true })
  contentTemplate!: TemplateRef<any>;

  items_1: any[] = [];
  items_2: any[] = [];
  items_3: any[] = [];
  items_4: any[] = [];
  items_5: any[] = [];
  items_6: any[] = [];


  constructor(public dialog: MatDialog) {
    // Initialize items_1 and items_2 arrays with mock data
    const originalData_1 = {
      isChecked: true,
      info: '1 筆',
      info2: '5 筆',
      info3: '4 筆',
      info4: '3 筆',
      info5: '2 筆',
    };

    const originalData_2 = {
      date: '113/6/20',
      info: '【公告】這是測試公告。測試佈局和樣式效果。我們需要確保文字能正確換行，並且在不同裝置上都能正常顯示。這個公告的目的是驗證文字長度對頁面佈局的影響。',
      attach: '無',
      unit: '資訊室',
      create: '王小明',
    };

    for (let i = 0; i < 1; i++) {
      const newData = { ...originalData_1 };
      this.items_1.push(newData);
    }

    for (let i = 0; i < 5; i++) {
      const newData = { ...originalData_2 };
      this.items_2.push(newData);
    }
  }

  getInfoWithLink(info: string): string {
    const numberMatch = info.match(/\d+/);

    if (numberMatch) {
      const number = numberMatch[0];
      return info.replace(number, `<a class="modal-link">${number}</a>`);
    }

    return info;
  }
  ngOnInit() {
    // Initialization code if needed
  }

  saveData(key: string, value: any): void {
    console.log(`Saving data for key: ${key}, value: ${value}`);
  }

  openModal(title: string, info: string, contentTemplate: any): void {
    // Method to open modal dialog
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px', // Adjust the width as needed
      height: '600px',
      data: {
        title: `${title}`, // Example title
        content: `${info}`,
        contentTemplate: contentTemplate,
        button: '關閉視窗', // Example button text
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // Handle any actions after dialog closes if needed
    });
  }

  handleModalLinkClick(): void {
    this.openModal('待簽核清單', '', this.contentTemplate);
  }
}
