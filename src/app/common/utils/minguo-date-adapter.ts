import { MatDateFormats, NativeDateAdapter } from '@angular/material/core';

export class MinguoDateAdapter extends NativeDateAdapter {
  private readonly ROC_ERA_OFFSET = 1911;

  // 重寫父類的格式化日期方法，將西元年轉換為民國年格式顯示
  override format(date: Date, _displayFormat: string): string {
    const minguoYear = date.getFullYear() - this.ROC_ERA_OFFSET;
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `民國${minguoYear}年${month}月${day}日`;
  }

  // 重寫父類的 parse 方法，將民國年轉換為西元年格式以進行正確的日期解析
  override parse(value: any): Date | null {
    const rocRegex = /^民國(\d+)年(\d+)月(\d+)日$/;
    const rocMatches = value.match(rocRegex);

    if (rocMatches && rocMatches.length === 4) {
      const minguoYear = parseInt(rocMatches[1], 10);
      const year = minguoYear + this.ROC_ERA_OFFSET;
      const month = parseInt(rocMatches[2], 10) - 1; // 月份需要減一，因為 JavaScript 的月份從 0 開始
      const day = parseInt(rocMatches[3], 10);
      return new Date(year, month, day);
    }

    return super.parse(value);
  }
}

// 自訂的民國年日期格式
export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY/MM/DD', // 解析輸入日期的格式
  },
  display: {
    dateInput: '民國YYYY年MM月DD日', // 顯示輸入日期的格式
    monthYearLabel: 'YYYY MMM', // 月份和年份標籤的格式
    dateA11yLabel: 'LL', // 輔助功能日期標籤的格式
    monthYearA11yLabel: 'YYYY MMMM', // 輔助功能月份和年份標籤的格式
  },
};
