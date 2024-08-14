import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TabComponent } from '../tab/tab.component';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [SharedModule, TabComponent, MenuComponent, HeaderComponent],
})
export class LayoutComponent implements OnInit {
  isCollapsed!: boolean;

  ngOnInit() {
    // 在初始化時從LocalStorage中讀取狀態
    const isCollapsedStr = localStorage.getItem('isCollapsed');
    this.isCollapsed = isCollapsedStr ? JSON.parse(isCollapsedStr) : false;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    // 更新LocalStorage中的狀態
    localStorage.setItem('isCollapsed', JSON.stringify(this.isCollapsed));
  }
}
