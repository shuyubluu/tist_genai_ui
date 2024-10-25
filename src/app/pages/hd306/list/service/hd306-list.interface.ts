export interface SearchResultData {
  serviceUnit: string; // 服務單位
  volunteerID: string; // 志工編號
  name: string; // 姓名
  gender: string; // 性別
  idNumber: string; // 身份證字號
  joinDate: string; // 入隊日期
  isChoice: boolean; // 是否選擇
}

export interface CheckboxGroup {
  label: string;
  value: string;
  checked: boolean;
  disabled: boolean;
}
