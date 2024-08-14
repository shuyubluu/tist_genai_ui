import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterModule],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // 當路由變化結束時檢查路徑
        if (event.url === '/') {
          localStorage.removeItem('savedTabs');
        }
      }
    });
  }
}
