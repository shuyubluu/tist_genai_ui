import { VolunteerInformationService } from './../service/volunteer-information.service';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { Router } from '@angular/router';
import { TabService } from '../../../layouts/tab/tab.service';

@Component({
  selector: 'app-volunteer-information',
  standalone: true,
  imports: [SharedModule, ButtonComponent, InputComponent],
  templateUrl: './volunteer-information.component.html',
  styleUrl: './volunteer-information.component.scss',
})
export class VolunteerInformationComponent implements OnInit {
  // 當前的頁面
  @Input() currentTab: string = '';

  constructor(
    public router: Router, // 路由
    public volunteerInformationService: VolunteerInformationService, // VolunteerInformationService
    private tabService: TabService // 關閉tab的Service
  ) {}

  ngOnInit(): void {}

  // 前往hd200Form
  async goToHd200Form() {
    await this.router.navigate(['/hd200/form']);
    if (this.currentTab !== '志工基本資料') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd210
  async goToHd210() {
    await this.router.navigate(['/hd210']);
    if (this.currentTab === '教育訓練' || this.currentTab === '教育訓練單') {
      return;
    }
    this.closeTab(this.currentTab);
  }

  // 前往hd220
  async goToHd220() {
    await this.router.navigate(['/hd220']);
    if (this.currentTab === '獎勵表揚' || this.currentTab === '獎勵表揚單') {
      return;
    } else {
      this.closeTab(this.currentTab);
    }
  }

  // 前往hd230
  async goToHd230() {
    await this.router.navigate(['/hd230']);
    if (this.currentTab !== '服務時數') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd240
  async goToHd240() {
    await this.router.navigate(['/hd240']);
    if (this.currentTab !== '保險') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd250
  async goToHd250() {
    await this.router.navigate(['/hd250']);
    if (this.currentTab !== '評核表') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd100Form
  async goToHd100Form() {
    await this.router.navigate(['/hd100/form']);
    if (this.currentTab !== '個案結案表') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd170
  async goToHd170() {
    await this.router.navigate(['/hd170']);
    if (this.currentTab !== '轉介單清單' && this.currentTab !== '轉介單') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 關閉tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }
}
