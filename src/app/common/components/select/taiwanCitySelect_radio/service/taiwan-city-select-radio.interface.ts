export interface AreaList {
  ZipCode: string;
  AreaName: string;
  AreaEngName: string;
  checked: boolean;
}

export interface TaiwanCityList {
  CityName: string;
  CityEngName: string;
  checked: boolean;
  indeterminate: boolean;
  AreaList: AreaList[];
}
