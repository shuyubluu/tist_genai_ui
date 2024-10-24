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
  // 當前hd100模式
  currentHd100Mode: string = '';

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
      this.currentHd100Mode = '/create';
    } else if (this.hd100ListService.isEdit) {
      this.currentHd100Mode = '/edit';
    } else {
      this.currentHd100Mode = '/view';
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
      await this.router.navigate(['/hd110' + this.currentHd100Mode]);
      this.closeTab();
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
      await this.router.navigate(['/hd120' + this.currentHd100Mode]);
      this.closeTab();
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
      await this.router.navigate(['/hd130' + this.currentHd100Mode]);
      this.closeTab();
    }
  }

  // 前往hd140
  async goToHd140() {
    if (
      this.router.url.startsWith('/hd140') ||
      this.router.url.startsWith('/hd140/create') ||
      this.router.url.startsWith('/hd140/view') ||
      this.router.url.startsWith('/hd140/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd140']);
      this.closeTab();
    }
  }

  // 前往hd150
  async goToHd150() {
    if (
      this.router.url.startsWith('/hd150') ||
      this.router.url.startsWith('/hd150/create') ||
      this.router.url.startsWith('/hd150/view') ||
      this.router.url.startsWith('/hd150/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd150']);
      this.closeTab();
    }
  }

  // 前往hd160
  async goToHd160() {
    if (
      this.router.url.startsWith('/hd160') ||
      this.router.url.startsWith('/hd160/create') ||
      this.router.url.startsWith('/hd160/view') ||
      this.router.url.startsWith('/hd160/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd160']);
      this.closeTab();
    }
  }

  // 前往hd100Form
  async goToHd100Form() {
    this.hd180ListService.isCanReview = true;
    if (
      this.router.url.startsWith('/hd100/view') ||
      this.router.url.startsWith('/hd100/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd100' + this.currentHd100Mode]);
      this.closeTab();
    }
  }

  // 前往hd170
  async goToHd170() {
    if (
      this.router.url.startsWith('/hd170') ||
      this.router.url.startsWith('/hd170/create') ||
      this.router.url.startsWith('/hd170/view') ||
      this.router.url.startsWith('/hd170/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd170']);
      this.closeTab();
    }
  }

  // 關閉tab
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }
}
