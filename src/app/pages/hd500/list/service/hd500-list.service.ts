import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Hd500ListService {
  constructor() {}
  // 當前要查看的統計內容代碼
  currentStatisticsCode: string = '';
  // 當前要查看的統計內容名稱
  currentStatisticsName: string = '';
}
