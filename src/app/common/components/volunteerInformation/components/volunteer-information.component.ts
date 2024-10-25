import { VolunteerInformationService } from './../service/volunteer-information.service';
import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from '../../../layouts/tab/tab.service';
import { Hd200ListService } from '../../../../pages/hd200/list/service/hd200-list.service';

@Component({
  selector: 'app-volunteer-information',
  standalone: true,
  imports: [SharedModule, ButtonComponent, InputComponent],
  templateUrl: './volunteer-information.component.html',
  styleUrl: './volunteer-information.component.scss',
})
export class VolunteerInformationComponent implements OnInit {
  // tab名稱
  tabName: string = '';
  // 當前hd200模式
  currentHd200Mode: string = '';

  constructor(
    private route: ActivatedRoute,

    public router: Router, // 路由
    public volunteerInformationService: VolunteerInformationService, // VolunteerInformationService
    private tabService: TabService, // 關閉tab的Service
    private hd200ListService: Hd200ListService // hd200ListService
  ) {}

  ngOnInit(): void {
    // 取得當前路由的tabName
    this.tabName = this.route.snapshot.data['tabName'];

    if (this.hd200ListService.isCreate) {
      this.currentHd200Mode = '/create';
    } else if (this.hd200ListService.isEdit) {
      this.currentHd200Mode = '/edit';
    } else {
      this.currentHd200Mode = '/view';
    }
  }

  // 前往hd200Form
  async goToHd200Form() {
    if (
      this.router.url.startsWith('/hd200/create') ||
      this.router.url.startsWith('/hd200/view') ||
      this.router.url.startsWith('/hd200/edit')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd200' + this.currentHd200Mode]);
      this.closeTab();
    }
  }

  // 前往hd210
  async goToHd210() {
    if (
      this.router.url.startsWith('/hd210') ||
      this.router.url.startsWith('/hd210/create') ||
      this.router.url.startsWith('/hd210/view')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd210']);
      this.closeTab();
    }
  }

  // 前往hd220
  async goToHd220() {
    if (
      this.router.url.startsWith('/hd220') ||
      this.router.url.startsWith('/hd220/create') ||
      this.router.url.startsWith('/hd220/view')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd220']);
      this.closeTab();
    }
  }

  // 前往hd230
  async goToHd230() {
    if (
      this.router.url.startsWith('/hd230') ||
      this.router.url.startsWith('/hd230/edit') ||
      this.router.url.startsWith('/hd230/view')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd230']);
      this.closeTab();
    }
  }

  // 前往hd240
  async goToHd240() {
    if (this.router.url.startsWith('/hd240')) {
      return;
    } else {
      await this.router.navigate(['/hd240']);
      this.closeTab();
    }
  }

  // 前往hd250
  async goToHd250() {
    if (
      this.router.url.startsWith('/hd250') ||
      this.router.url.startsWith('/hd250/edit') ||
      this.router.url.startsWith('/hd250/view') ||
      this.router.url.startsWith('/hd250/create')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd250']);
      this.closeTab();
    }
  }

  // 前往hd200List
  async goToHd200List2() {
    if (this.router.url.startsWith('/hd200/list2')) {
      return;
    } else {
      await this.router.navigate(['/hd200/list2']);
      this.closeTab();
    }
  }

  // 前往hd260Form
  async goToHd260Form() {
    if (
      this.router.url.startsWith('/hd260/edit') ||
      this.router.url.startsWith('/hd260/view')
    ) {
      return;
    } else {
      await this.router.navigate(['/hd260' + this.currentHd200Mode]);
      this.closeTab();
    }
  }

  // 關閉tab
  closeTab() {
    this.tabService.closeTab(this.tabName);
  }
}
