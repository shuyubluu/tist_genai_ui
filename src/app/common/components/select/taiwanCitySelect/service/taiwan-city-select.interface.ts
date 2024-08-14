export interface Cities {
  countycode: string;
  countycode1: string;
  countyname: string;
}
export interface Districts {
  towncode: string;
  townname: string;
}
export interface Villages {
  villageId: string;
  villageName: string;
}

export interface TaiwanCitySelectValue {
  city: string;
  district: string;
  village: string;
}
