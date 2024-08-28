import { Injectable } from '@angular/core';
import { VolunteerData } from './volunteer-information.interface';

@Injectable({
  providedIn: 'root',
})
export class VolunteerInformationService {
  private localStorageKey = 'isChoiceVolunteer';
  private _isChoiceVolunteer: boolean = false;

  // 志工資料
  volunteerData: VolunteerData[] = [
    {
      name: '吳小美',
      age: '20',
      volunteerId: '11300200001',
      recordBookId: '123',
      serviceUnit: '001志工站',
      honorCardExpiry: '120/01/01',
      insuranceStatus: '保險中',
    },
  ];

  constructor() {
    // 如果 LocalStorage 中有值，則初始化
    const storedValue = localStorage.getItem(this.localStorageKey);
    this.isChoiceVolunteer = storedValue === 'true';
  }

  get isChoiceVolunteer(): boolean {
    return this._isChoiceVolunteer;
  }

  set isChoiceVolunteer(value: boolean) {
    this._isChoiceVolunteer = value;
    localStorage.setItem(this.localStorageKey, String(value));
  }
}
