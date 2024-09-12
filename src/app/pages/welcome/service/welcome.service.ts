import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor() {}

  // 當前表單簽核的狀態
  currentFormState: string = 'pending';
  // 控制當前表單簽核的狀態
  handelFormState(formState: string): void {
    this.currentFormState = formState;
  }
}
