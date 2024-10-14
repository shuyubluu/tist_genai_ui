import { AuthService } from './../../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime, fromEvent, interval } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent implements OnInit, OnDestroy {
  minutes: number = 30;
  seconds: number = 0;
  clickSubscription!: Subscription;
  timerSubscription!: Subscription;
  countdownTime: number = 1800; // 30 分鐘的秒數

  constructor(private authService: AuthService, private http: HttpClient) {}

  // private token = '';
  // private api = '';

  // getData() {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`,
  //   });

  //   return this.http.get(this.api, { headers });
  // }

  ngOnInit(): void {
    // 初始化倒數計時器
    this.startCountdown();

    // 監聽點擊事件並設置倒數計時邏輯
    this.detectClickAndRefresh();
  }

  ngOnDestroy(): void {
    // 確保組件銷毀時停止訂閱
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  // 啟動倒數計時器
  startCountdown(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.countdownTime > 0) {
        this.countdownTime--; // 每秒減少一秒
        this.minutes = Math.floor(this.countdownTime / 60);
        this.seconds = this.countdownTime % 60;
      } else {
        this.logout();
      }
    });
  }

  // 重置倒數計時器
  resetCountdown(): void {
    this.countdownTime = 1800; // 30 分鐘
    this.minutes = 30;
    this.seconds = 0;
  }

  // 偵測點擊並設置倒數計時
  detectClickAndRefresh(): void {
    this.clickSubscription = fromEvent(document, 'click')
      .pipe(
        debounceTime(1000) // 設置1秒的去抖動時間，等到1秒無連續點擊後再執行刷新
      )
      .subscribe(() => {
        this.resetCountdown();
      });
  }

  // 登出
  logout(): void {
    this.authService.logout(); // 登出操作
  }
}
