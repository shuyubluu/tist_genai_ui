import { WelcomeService } from './../service/welcome.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared.module';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import {
  Announcement,
  CaseManagementMonthlyTarget,
  CaseManagementOverdueForms,
  CaseManagementResponsibleCase,
  VolunteerManagementMonthlyTarget,
  VolunteerManagementOverdueForms,
  VolunteerManagementVolunteerCount,
} from '../service/welcome-interface';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [SharedModule, ButtonComponent],
})
export class WelcomeComponent implements OnInit {
  // 分頁器一頁多少筆數據
  pageSize: number = 5;
  // 分頁器當前頁數
  currentPage: number = 1;
  // 分頁器切割後的資料
  get newAnnouncement(): Announcement[] {
    return this.announcement.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  // 最新公告模擬資料
  announcement: Announcement[] = [
    {
      date: '113/6/20',
      subject:
        '【公告】這是測試公告。測試佈局和樣式效果。我們需要確保文字能正確換行，並且在不同裝置上都能正常顯示。這個公告的目的是驗證文字長度對頁面佈局的影響。',
      unit: '資訊室',
      create: '王小明',
    },
  ];

  // 個案管理
  // 1.負責個案
  // 控制負責個案modal
  isCaseManagement_ResponsibleCaseVisible = false;
  // 負責個案分頁器當前頁數
  currentCaseManagement_ResponsibleCasePage: number = 1;
  // 負責個案模擬資料
  caseManagement_ResponsibleCaseData: CaseManagementResponsibleCase[] = [
    {
      caseName: '王大明',
      caseStatus: '服務中',
    },
    {
      caseName: '王大明',
      caseStatus: '暫停中',
    },
  ];
  // 分頁器切割後的負責個案資料
  get newCaseManagement_caseManagement_ResponsibleCaseData(): CaseManagementResponsibleCase[] {
    return this.caseManagement_ResponsibleCaseData.slice(
      (this.currentCaseManagement_ResponsibleCasePage - 1) * this.pageSize,
      this.currentCaseManagement_ResponsibleCasePage * this.pageSize
    );
  }

  // 2.本月應完成
  // 控制本月應完成modal
  isCaseManagement_MonthlyTargetVisible = false;
  // 本月應完成分頁器當前頁數
  currentCaseManagement_MonthlyTargetPage: number = 1;
  // 本月應完成模擬資料
  caseManagement_MonthlyTargetData: CaseManagementMonthlyTarget[] = [
    {
      caseName: '王大明',
      formType: '個案初評表',
    },
    {
      caseName: '陳小明',
      formType: '個案訪視紀錄表',
    },
    {
      caseName: '張中明',
      formType: '複評表',
    },
  ];
  // 分頁器切割後的本月應完成資料
  get newCaseManagement_MonthlyTargetData(): CaseManagementMonthlyTarget[] {
    return this.caseManagement_MonthlyTargetData.slice(
      (this.currentCaseManagement_MonthlyTargetPage - 1) * this.pageSize,
      this.currentCaseManagement_MonthlyTargetPage * this.pageSize
    );
  }

  // 3.逾期表單
  // 控制逾期表單modal
  isCaseManagement_OverdueFormsVisible = false;
  // 逾期表單分頁器當前頁數
  currentCaseManagement_OverdueFormsPage: number = 1;
  // 逾期表單模擬資料
  caseManagement_OverdueFormsData: CaseManagementOverdueForms[] = [
    {
      caseName: '王大明',
      formType: '個案初評表',
    },
    {
      caseName: '陳小明',
      formType: '個案訪視紀錄表',
    },
    {
      caseName: '張中明',
      formType: '生活品質問卷',
    },
    {
      caseName: '張小美',
      formType: '複評表',
    },
  ];
  // 分頁器切割後的逾期表單資料
  get newCaseManagement_OverdueFormsData(): CaseManagementOverdueForms[] {
    return this.caseManagement_OverdueFormsData.slice(
      (this.currentCaseManagement_OverdueFormsPage - 1) * this.pageSize,
      this.currentCaseManagement_OverdueFormsPage * this.pageSize
    );
  }

  // 志工管理
  // 1.負責個案
  // 控制負責個案modal
  isVolunteerManagement_VolunteerCountVisible = false;
  // 負責個案分頁器當前頁數
  currentVolunteerManagement_VolunteerCountPage: number = 1;
  // 負責個案模擬資料
  volunteerManagement_VolunteerCountData: VolunteerManagementVolunteerCount[] =
    [
      {
        volunteerName: '王大明',
        volunteerStatus: '服務中',
      },
      {
        volunteerName: '王大明',
        volunteerStatus: '暫停中',
      },
    ];
  // 分頁器切割後的負責個案資料
  get newVolunteerManagement_VolunteerCountData(): VolunteerManagementVolunteerCount[] {
    return this.volunteerManagement_VolunteerCountData.slice(
      (this.currentVolunteerManagement_VolunteerCountPage - 1) * this.pageSize,
      this.currentVolunteerManagement_VolunteerCountPage * this.pageSize
    );
  }

  // 2.本月應完成
  // 控制本月應完成modal
  isVolunteerManagement_MonthlyTargetVisible = false;
  // 本月應完成分頁器當前頁數
  currentVolunteerManagement_MonthlyTargetPage: number = 1;
  // 本月應完成模擬資料
  volunteerManagement_MonthlyTargetData: VolunteerManagementMonthlyTarget[] = [
    {
      volunteerName: '王大明',
      formType: '為期改善',
    },
  ];
  // 分頁器切割後的本月應完成資料
  get newVolunteerManagement_MonthlyTargetData(): VolunteerManagementMonthlyTarget[] {
    return this.volunteerManagement_MonthlyTargetData.slice(
      (this.currentVolunteerManagement_MonthlyTargetPage - 1) * this.pageSize,
      this.currentVolunteerManagement_MonthlyTargetPage * this.pageSize
    );
  }

  // 3.逾期表單
  // 控制逾期表單modal
  isVolunteerManagement_OverdueFormsVisible = false;
  // 逾期表單分頁器當前頁數
  currentVolunteerManagement_OverdueFormsPage: number = 1;
  // 逾期表單模擬資料
  volunteerManagement_OverdueFormsData: VolunteerManagementOverdueForms[] = [
    {
      volunteerName: '王大明',
      formType: '服務品質評估表',
    },
    {
      volunteerName: '陳小明',
      formType: '為期改善',
    },
  ];
  // 分頁器切割後的逾期表單資料
  get newVolunteerManagement_OverdueFormsData(): VolunteerManagementOverdueForms[] {
    return this.volunteerManagement_OverdueFormsData.slice(
      (this.currentVolunteerManagement_OverdueFormsPage - 1) * this.pageSize,
      this.currentVolunteerManagement_OverdueFormsPage * this.pageSize
    );
  }

  constructor(
    public dialog: MatDialog,
    private router: Router, // 路由
    private welcomeService: WelcomeService // welcomeService
  ) {}

  ngOnInit() {
    // 個案管理
    // 生成多筆負責個案模擬資料
    for (let i = 0; i < 6; i++) {
      this.caseManagement_ResponsibleCaseData.push(
        this.caseManagement_ResponsibleCaseData[i]
      );
    }
    // 生成多筆本月應完成模擬資料
    for (let i = 0; i < 6; i++) {
      this.caseManagement_MonthlyTargetData.push(
        this.caseManagement_MonthlyTargetData[i]
      );
    }
    // 生成多筆逾期表單模擬資料
    for (let i = 0; i < 6; i++) {
      this.caseManagement_OverdueFormsData.push(
        this.caseManagement_OverdueFormsData[i]
      );
    }

    // 志工管理
    // 生成多筆志工人數模擬資料
    for (let i = 0; i < 6; i++) {
      this.volunteerManagement_VolunteerCountData.push(
        this.volunteerManagement_VolunteerCountData[i]
      );
    }
    // 生成多筆本月應完成模擬資料
    for (let i = 0; i < 6; i++) {
      this.volunteerManagement_MonthlyTargetData.push(
        this.volunteerManagement_MonthlyTargetData[i]
      );
    }
    // 生成多筆逾期表單模擬資料
    for (let i = 0; i < 6; i++) {
      this.volunteerManagement_OverdueFormsData.push(
        this.volunteerManagement_OverdueFormsData[i]
      );
    }

    // 生成多筆最新公告模擬資料
    for (let i = 0; i < 12; i++) {
      this.announcement.push(this.announcement[i]);
    }
  }

  // 個案管理
  // 1.負責個案
  // 顯示負責個案modal
  showCaseManagement_ResponsibleCaseModal(): void {
    this.isCaseManagement_ResponsibleCaseVisible = true;
  }
  // 當負責個案改變頁數時觸發
  onCaseManagement_ResponsibleCasePageIndexChange(currentPage: number) {
    this.currentCaseManagement_ResponsibleCasePage = currentPage;
  }
  // 關閉負責個案modal
  closeCaseManagement_ResponsibleCaseModal(): void {
    this.isCaseManagement_ResponsibleCaseVisible = false;
  }

  // 查看單項負責個案
  viewCaseManagement_ResponsibleCaseData() {
    this.router.navigate(['/hd100']);
  }

  // 2.本月應完成
  // 顯示本月應完成modal
  showCaseManagement_MonthlyTargetModal(): void {
    this.isCaseManagement_MonthlyTargetVisible = true;
  }
  // 當本月應完成改變頁數時觸發
  onCaseManagement_MonthlyTargetPageIndexChange(currentPage: number) {
    this.currentCaseManagement_MonthlyTargetPage = currentPage;
  }
  // 關閉本月應完成modal
  closeCaseManagement_MonthlyTargetModal(): void {
    this.isCaseManagement_MonthlyTargetVisible = false;
  }

  // 查看單項本月應完成
  viewCaseManagement_MonthlyTargetData(type: string) {
    if (type === '個案初評表') this.router.navigate(['/hd130']);
    if (type === '個案訪視紀錄表') this.router.navigate(['/hd140']);
    if (type === '複評表') this.router.navigate(['/hd150']);
  }

  // 3.逾期表單
  // 顯示逾期表單modal
  showCaseManagement_OverdueFormsModal(): void {
    this.isCaseManagement_OverdueFormsVisible = true;
  }
  // 當逾期表單改變頁數時觸發
  onCaseManagement_OverdueFormsPageIndexChange(currentPage: number) {
    this.currentCaseManagement_OverdueFormsPage = currentPage;
  }
  // 關閉逾期表單modal
  closeCaseManagement_OverdueFormsModal(): void {
    this.isCaseManagement_OverdueFormsVisible = false;
  }

  // 查看單項逾期表單
  viewCaseManagement_OverdueFormsData(type: string) {
    if (type === '個案初評表') this.router.navigate(['/hd130']);
    if (type === '個案訪視紀錄表') this.router.navigate(['/hd140']);
    if (type === '生活品質問卷') this.router.navigate(['/hd160']);
    if (type === '複評表') this.router.navigate(['/hd150']);
  }

  // 志工管理
  // 1.志工人數
  // 顯示志工人數modal
  showVolunteerManagement_VolunteerCountModal(): void {
    this.isVolunteerManagement_VolunteerCountVisible = true;
  }
  // 當志工人數改變頁數時觸發
  onVolunteerManagement_VolunteerCountPageIndexChange(currentPage: number) {
    this.currentVolunteerManagement_VolunteerCountPage = currentPage;
  }
  // 關閉志工人數modal
  closeVolunteerManagement_VolunteerCountModal(): void {
    this.isVolunteerManagement_VolunteerCountVisible = false;
  }
  // 查看單項志工人數
  viewVolunteerManagement_VolunteerCountData() {
    this.router.navigate(['/hd200']);
  }

  // 2.本月應完成
  // 顯示本月應完成modal
  showVolunteerManagement_MonthlyTargetModal(): void {
    this.isVolunteerManagement_MonthlyTargetVisible = true;
  }
  // 當本月應完成改變頁數時觸發
  onVolunteerManagement_MonthlyTargetPageIndexChange(currentPage: number) {
    this.currentVolunteerManagement_MonthlyTargetPage = currentPage;
  }
  // 關閉本月應完成modal
  closeVolunteerManagement_MonthlyTargetModal(): void {
    this.isVolunteerManagement_MonthlyTargetVisible = false;
  }
  // 查看單項本月應完成
  viewVolunteerManagement_MonthlyTargetData() {
    this.router.navigate(['/hd250']);
  }

  // 3.逾期表單
  // 顯示逾期表單modal
  showVolunteerManagement_OverdueFormsModal(): void {
    this.isVolunteerManagement_OverdueFormsVisible = true;
  }
  // 當逾期表單改變頁數時觸發
  onVolunteerManagement_OverdueFormsPageIndexChange(currentPage: number) {
    this.currentVolunteerManagement_OverdueFormsPage = currentPage;
  }
  // 關閉逾期表單modal
  closeVolunteerManagement_OverdueFormsModal(): void {
    this.isVolunteerManagement_OverdueFormsVisible = false;
  }
  // 查看單項逾期表單
  viewVolunteerManagement_OverdueFormsModal(type: string) {
    if (type === '服務品質評估表') this.router.navigate(['/hd250']);
    if (type === '為期改善') this.router.navigate(['/hd250']);
  }

  // 查看待簽表單
  viewPendingForms() {
    this.router.navigate(['/hd400']);
    this.welcomeService.handelFormState('pending');
  }

  // 查看退件表單
  viewRejectedForms() {
    this.router.navigate(['/hd400']);
    this.welcomeService.handelFormState('rejected');
  }

  // 查看已送審表單
  viewSubmittedForms() {
    this.router.navigate(['/hd400']);
    this.welcomeService.handelFormState('submitted');
  }

  // 查看已簽核表單
  viewApprovedForms() {
    this.router.navigate(['/hd400']);
    this.welcomeService.handelFormState('approved');
  }

  saveData(key: string, value: any): void {
    console.log(`Saving data for key: ${key}, value: ${value}`);
  }

  openModal(title: string, info: string, contentTemplate: any): void {
    // Method to open modal dialog
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px', // Adjust the width as needed
      height: '600px',
      data: {
        title: `${title}`, // Example title
        content: `${info}`,
        contentTemplate: contentTemplate,
        button: '關閉視窗', // Example button text
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  // 當改變頁數時觸發
  onPageIndexChange(currentPage: number) {
    this.currentPage = currentPage;
  }
}
