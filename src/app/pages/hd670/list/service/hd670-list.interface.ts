export interface SearchResultData {
  eventName: string; // 事件名稱
  creationTime: string; // 建立時間
  listOfOption: string[]; // 可選擇的通知對象清單
  listOfSelectedValue: string[]; // 已選通知對象
}
