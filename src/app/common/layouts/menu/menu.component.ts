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
        icon: '',
        children: [
          { title: '01- 個案資料清單', open: false, link: '/hd100' },
          { title: '02- 例行訪視記錄表', open: false, link: '/hd140' },
        ],
      },
      {
        title: '志工管理',
        icon: '',
        link: '#',
      },
      {
        title: '報表專區',
        icon: '',
        link: '#',
      },
      {
        title: '統計專區',
        icon: '',
        link: '#',
      },
      {
        title: '簽核專區',
        icon: 'edit',
        children: [
          { title: '01- 待簽表單', open: false, link: '#' },
          { title: '02- 待簽表單(代理)', open: false, link: '#' },
          { title: '03- 被退回的申請', open: false, link: '#' },
          { title: '04- 已送審表單', open: false, link: '#' },
          { title: '05- 已簽核表單', open: false, link: '#' },
          { title: '06- 查詢表單', open: false, link: '#' },
        ],
      },
      {
        title: '系統',
        icon: 'setting',
        children: [
          { title: '01- 功能維護', open: false, link: '#' },
          { title: '02- 權限管理', open: false, link: '#' },
          { title: '03- 角色管理', open: false, link: '#' },
          { title: '04- 帳號管理', open: false, link: '#' },
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
