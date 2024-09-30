import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [SharedModule],
})
export class MenuComponent implements OnInit {
  @Input() isCollapsed = false;
  menuData!: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = [
      {
        title: '首頁',
        icon: 'home',
        link: '/welcome',
      },
      {
        title: '個案管理',
        icon: 'solution',
        children: [
          {
            title: '01- 個案資料清單',
            open: false,
            link: '/hd100',
          },
          // { title: '02- 例行訪視表清單', open: false, link: '/hd140' },
          // { title: '03- 個案複評表清單', open: false, link: '/hd150' },
          // { title: '04- 生活品質問卷清單', open: false, link: '/hd160' },
          // { title: '05- 轉介單清單', open: false, link: '/hd170' },
          {
            title: '02- 個案結案名冊',
            open: false,
            link: '/hd180',
          },
        ],
      },
      {
        title: '志工管理',
        icon: 'team',
        children: [
          { title: '01- 志工資料清單', open: false, link: '/hd200' },
          { title: '02- 保險專區', open: false, link: '/hd270' },
          { title: '03- 服務時數管理', open: false, link: '/hd280' },
          { title: '04- 志工退隊名冊', open: false, link: '/hd260' },
        ],
      },
      {
        title: '報表專區',
        icon: 'reconciliation',
        children: [
          {
            title: '01- 表單匯入',
            children: [
              { title: '志工教育訓練', icon: 'file-add', link: '/hd300' },
              { title: '志工獎勵', icon: 'file-add', link: '/hd301' },
              { title: '志工時數', icon: 'file-add', link: '/hd302' },
              { title: '志工考核表', icon: 'file-add', link: '/hd303' },
              { title: '個案基本資料表', icon: 'file-add', link: '/hd304' },
              { title: '個案生活品質量表', icon: 'file-add', link: '/hd305' },
            ],
          },
          {
            title: '02- 表單匯出',
            children: [
              { title: '志工管理', icon: 'export', link: '/hd306' },
              { title: '個案管理', icon: 'export', link: '/hd307' },
            ],
          },
        ],
      },
      {
        title: '簽核專區',
        icon: 'edit',
        link: '/hd400',
      },
      {
        title: '統計專區',
        icon: 'area-chart',
        link: '/hd500',
      },
      {
        title: '系統管理權限',
        icon: 'setting',
        children: [
          { title: '01- 保險公司代碼維護', open: false, link: '/hd600' },
          { title: '02- 組織單位資料維護', open: false, link: '/hd610' },
          { title: '03- 角色權限資料維護', open: false, link: '/hd620' },
          { title: '04- 系統功能權限維護', open: false, link: '/hd630' },
          {
            title: '05- 帳號管理',
            children: [
              { title: '社工帳號管理', icon: 'robot', link: '/hd640' },
              // { title: '社工員', icon: 'user', link: '#' },
            ],
          },
          { title: '06- 系統參數維護', open: false, link: '/hd650' },
          { title: '07- 佈告欄維護', open: false, link: '/hd660' },
        ],
      },
    ];

    this.menuData = data;
    this.updateMenuState();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateMenuState();
      });
  }

  updateMenuState(): void {
    let isInMenu = false;
    this.menuData.forEach((menu) => {
      this.checkMenuItemActive(menu);
      if (menu.children) {
        menu.children.forEach((subMenu: any) => {
          this.checkMenuItemActive(subMenu);
          if (subMenu.children) {
            subMenu.children.forEach((subSubMenu: any) => {
              this.checkMenuItemActive(subSubMenu);
            });
          }
        });
      }
    });

    if (!isInMenu) {
      this.isCollapsed = false; // 當前路徑不在選單中時不收合選單
    }
  }

  private checkMenuItemActive(menuItem: any): void {
    menuItem.active = this.router.isActive(menuItem.link, true);
    if (menuItem.active && menuItem.link) {
      this.expandParent(menuItem);
    }
  }

  private expandParent(menuItem: any): void {
    this.menuData.forEach((menu) => {
      if (menu.children) {
        menu.children.forEach((subMenu: any) => {
          if (
            subMenu === menuItem ||
            subMenu.children?.some((subSubMenu: any) => subSubMenu === menuItem)
          ) {
            subMenu.open = true;
            menu.open = true;
          } else if (subMenu.children) {
            subMenu.children.forEach((subSubMenu: any) => {
              if (subSubMenu === menuItem) {
                subMenu.open = true;
                menu.open = true;
              }
            });
          }
        });
      }
    });
  }
}
