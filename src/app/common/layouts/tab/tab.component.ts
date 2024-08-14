import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageStateService } from '../../../page-state.service';
import { TabService } from './tab.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-tab',
  standalone: true, // 單獨使用
  imports: [SharedModule], // 引入共享模組
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'], // 樣式表文件
})
export class TabComponent implements OnInit {
  tabs = [{ title: '首頁', route: '/welcome' }]; // 定義標籤
  selectedIndex = 0; // 目前選擇的索引

  constructor(
    private router: Router, // 路由器服務
    private activatedRoute: ActivatedRoute, // 啟動路由服務
    private pageStateService: PageStateService, // 頁面狀態服務
    private tabService: TabService, // 標籤服務
    private cdr: ChangeDetectorRef, // 變更檢測器參考
    private ngZone: NgZone // NgZone
  ) {}

  ngOnInit(): void {
    // 訂閱路由變化事件
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.handleRouteChange());

    // 訂閱關閉標籤事件
    this.tabService.closeTab$.subscribe((identifier) =>
      this.handleCloseTab(identifier)
    );

    // 恢復標籤狀態
    this.restoreTabState();
  }

  // 處理路由變更事件
  handleRouteChange(): void {
    let activatedRouteSnapshot = this.activatedRoute.snapshot;
    while (activatedRouteSnapshot.firstChild) {
      activatedRouteSnapshot = activatedRouteSnapshot.firstChild;
    }
    const tabName = activatedRouteSnapshot.data['tabName'];

    if (tabName) {
      const existingTabIndex = this.tabs.findIndex(
        (tab) => tab.title === tabName
      );
      if (existingTabIndex === -1) {
        this.tabs.push({ title: tabName, route: this.router.url });
        this.selectedIndex = this.tabs.length - 1;
      } else {
        this.selectedIndex = existingTabIndex;
      }
    }

    this.saveTabState(); // 儲存標籤
    this.cdr.detectChanges(); // 強制變更檢測
  }

  // 從路由中獲取標籤標題
  getTabTitleFromRoute(route: string): string {
    return route;
  }

  // 處理關閉標籤事件
  handleCloseTab(identifier: string): void {
    const index = this.tabs.findIndex((tab) => tab.title === identifier);

    if (index > -1) {
      this.closeTab({ index });
    }
  }

  // 關閉標籤
  closeTab(event: { index: number }): void {
    const index = event.index;

    if (index === 0) {
      return;
    }

    // 獲取要關閉的標籤頁的路由
    const closingTabRoute = this.tabs[index].route;

    // 清除對應路由的本地儲存數據
    this.pageStateService.clearPageStateByRoute(closingTabRoute);

    // 除了預設的標籤以外，可以關閉其他標籤
    this.tabs.splice(index, 1);

    // 如果關閉的是當前選擇的標籤，則導航到第一個標籤
    if (index === this.selectedIndex) {
      const newSelectedIndex = Math.min(
        this.selectedIndex,
        this.tabs.length - 1
      );
      this.selectedIndex = newSelectedIndex;

      // 使用 NgZone 確保導航在 Angular 的變更檢測周期內進行
      this.ngZone.run(() => {
        this.router
          .navigateByUrl(this.tabs[newSelectedIndex].route)
          .then(() => {
            this.cdr.detectChanges(); // 強制變更檢測
          });
      });
    } else {
      this.cdr.detectChanges(); // 強制變更檢測
    }

    this.saveTabState();
  }

  // 導航到指定路由
  navigateTo(route: string): void {
    const existingTabIndex = this.tabs.findIndex((tab) => tab.route === route);
    if (existingTabIndex === -1) {
      // 如果標籤不存在，則新增標籤
      const tabTitle = this.getTabTitleFromRoute(route);
      this.tabs.push({
        title: tabTitle,
        route: route,
      });
      // 同時更新 selectedIndex
      this.selectedIndex = this.tabs.length - 1;
    } else {
      this.selectedIndex = existingTabIndex;
    }
    // 導航到指定的路由
    this.router.navigateByUrl(route);
  }

  // 切換標籤事件
  onTabChange(index: number): void {
    this.selectedIndex = index;
    this.router.navigateByUrl(this.tabs[index].route).then(() => {
      // 根據 selectedIndex 更新菜單選擇
      this.updateMenuSelection();
      this.cdr.detectChanges(); // 強制變更檢測
    });
  }

  // 更新菜單選擇狀態
  private updateMenuSelection(): void {
    // 遍歷標籤以更新菜單選擇狀態
    for (let i = 0; i < this.tabs.length; i++) {
      const menuItem = document.getElementById(`menu-item-${i}`); // 假設菜單項有唯一的ID
      if (menuItem) {
        if (i === this.selectedIndex) {
          menuItem.classList.add('active'); // 將選中的菜單項添加活動類
        } else {
          menuItem.classList.remove('active'); // 從其他菜單項中移除活動類
        }
      }
    }
  }

  // 恢復標籤狀態
  private restoreTabState(): void {
    const savedTabs = localStorage.getItem('savedTabs');
    if (savedTabs) {
      this.tabs = JSON.parse(savedTabs);
      // 若瀏覽器刷新恢復當前有開啟的tab
      const currentRouteIndex = this.tabs.findIndex(
        (tab) => tab.route === this.router.url
      );
      if (currentRouteIndex !== -1) {
        this.selectedIndex = currentRouteIndex;
      } else {
        this.selectedIndex = 0;
      }
    }
  }

  // 儲存標籤狀態
  private saveTabState(): void {
    localStorage.setItem('savedTabs', JSON.stringify(this.tabs));
  }
}
