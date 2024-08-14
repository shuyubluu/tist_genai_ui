import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription, interval, map, startWith, takeWhile } from 'rxjs';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent implements OnInit, OnDestroy {
  @ViewChild('contentTemplate', { static: true })
  contentTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;

  minutes: string = '30';
  seconds: string = '00';
  private countdownSubscription: Subscription | null = null;
  private countdownStart = 1800; // 倒數計時30分（1800秒）
  private countdownValue = this.countdownStart;

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.startLogoutCountdown();
  }

  ngOnDestroy(): void {
    this.clearLogoutCountdown();
  }

  startLogoutCountdown(): void {
    this.clearLogoutCountdown();
    this.authService.startLogoutCountdown(this.countdownValue * 1000);
    this.countdownSubscription = interval(1000)
      .pipe(
        startWith(0), // 立即觸發一次訂閱
        takeWhile(() => this.countdownValue > 0),
        map(() => --this.countdownValue),
        map((remainingSeconds: number) => {
          const minutes = Math.floor(remainingSeconds / 60);
          const seconds = remainingSeconds % 60;
          return { minutes, seconds };
        })
      )
      .subscribe(({ minutes, seconds }) => {
        this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
        this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();

        // 當剩餘時間為 15秒 時顯示提示訊息
        if (this.countdownValue === 15) {
          this.openModal(this.contentTemplate);
        }
        // 當剩餘時間為 0秒 關閉提示訊息
        if (this.countdownValue === 0) {
          this.closeModal();
          this.dialog.closeAll();
        }
      });
  }

  clearLogoutCountdown(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.countdownSubscription = null;
    }
  }

  resetLogoutCountdown(): void {
    this.countdownValue = this.countdownStart;
    this.minutes = '30';
    this.seconds = '00';
    this.startLogoutCountdown();
  }

  extendedUse(): void {
    this.resetLogoutCountdown();
    this.closeModal();
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  // 打開模態對話框顯示事件詳細信息
  openModal(contentTemplate: any): void {
    this.dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      height: '300px',
      data: {
        title: '提醒您',
        contentTemplate: contentTemplate,
      },
      disableClose: true,
    });
  }
}
