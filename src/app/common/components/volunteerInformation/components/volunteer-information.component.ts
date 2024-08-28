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

  // 前往hd120
  async goToHd120() {
    await this.router.navigate(['/hd120']);
    if (this.currentTab === '個案開案資料表') {
      return;
    }
    this.closeTab(this.currentTab);
  }

  // 前往hd130
  async goToHd130() {
    await this.router.navigate(['/hd130']);
    if (this.currentTab !== '個案初評表') {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd140
  async goToHd140() {
    await this.router.navigate(['/hd140']);
    if (
      this.currentTab !== '例行訪視表清單' &&
      this.currentTab !== '例行訪視表'
    ) {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd150
  async goToHd150() {
    await this.router.navigate(['/hd150']);
    if (
      this.currentTab !== '個案複評表清單' &&
      this.currentTab !== '個案複評表'
    ) {
      this.closeTab(this.currentTab);
    } else {
      return;
    }
  }

  // 前往hd160
  async goToHd160() {
    await this.router.navigate(['/hd160']);
    if (
      this.currentTab !== '生活品質問卷清單' &&
      this.currentTab !== '生活品質問卷'
    ) {
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
