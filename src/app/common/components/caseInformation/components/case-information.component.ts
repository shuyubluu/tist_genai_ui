import { Hd180ListService } from './../../../../pages/hd180/list/service/hd180-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { CaseInformationService } from '../service/case-information.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from '../../../layouts/tab/tab.service';
import { Hd100ListService } from '../../../../pages/hd100/list/service/hd100-list.service';

@Component({
  selector: 'app-case-information',
  standalone: true,
  imports: [SharedModule, ButtonComponent, InputComponent],
  templateUrl: './case-information.component.html',
  styleUrl: './case-information.component.scss',
})
export class CaseInformationComponent implements OnInit {
  // 當前的頁面
  @Input() currentTab: string = '';
  // tab名稱
  tabName: string = '';
  // 當前模式
  currentMode: string = '';

  constructor(
    private route: ActivatedRoute,
    public caseInformationService: CaseInformationService, // caseInformationService
    public router: Router, // 路由
    private tabService: TabService, // 關閉tab的Service
    private hd180ListService: Hd180ListService, // hd180ListService
    public hd100ListService: Hd100ListService // hd100ListService
  ) {}

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    if (this.hd100ListService.isCreate) {
      this.currentMode = '/create';
    } else if (this.hd100ListService.isEdit) {
      this.currentMode = '/edit';
    } else {
      this.currentMode = '/view';
    }
  }

  // 前往hd110
  async goToHd110() {
    if (
      this.router.url.startsWith('/hd110/view') ||
      this.router.url.startsWith('/hd110/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd110' + this.currentMode]);
      this.closeTab(this.tabName);
    }
  }

  // 前往hd120
  async goToHd120() {
    if (
      this.router.url.startsWith('/hd120/view') ||
      this.router.url.startsWith('/hd120/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd120' + this.currentMode]);
      this.closeTab(this.tabName);
    }
  }

  // 前往hd130
  async goToHd130() {
    if (
      this.router.url.startsWith('/hd130/view') ||
      this.router.url.startsWith('/hd130/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd130' + this.currentMode]);
      this.closeTab(this.tabName);
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
    this.hd180ListService.isEdit = true;
    this.hd180ListService.isCanReview = true;
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
