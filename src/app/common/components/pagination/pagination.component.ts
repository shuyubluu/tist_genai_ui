import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  totalItems = 800; // 總數據條數
  pageSize = 10; // 每頁顯示條數
  currentPage = 1; // 當前頁碼

  // 計算總頁數
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  // 處理頁碼變更事件
  handlePageChange(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  // 處理點擊回上頁按鈕事件
  goToPrevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // 處理點擊下一頁按鈕事件
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
