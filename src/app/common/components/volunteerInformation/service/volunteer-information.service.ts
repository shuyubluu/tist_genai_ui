import { Injectable, OnInit } from '@angular/core';
import { VolunteerData } from './volunteer-information.interface';

@Injectable({
  providedIn: 'root',
})
export class VolunteerInformationService implements OnInit {
  // 是否已選取個案
  isChoiceVolunteer: boolean = false;
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

  constructor() {}

  ngOnInit(): void {}
}
