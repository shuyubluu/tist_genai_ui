import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared.module';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import {
  ApprovalZoneApprovedByTeamLeadForms,
  ApprovalZoneSubmittedForms,
  CaseManagementMonthlyTarget,
  CaseManagementOverdueForms,
  CaseManagementResponsibleCase,
  VolunteerManagementMonthlyTarget,
  VolunteerManagementOverdueForms,
  VolunteerManagementVolunteerCount,
  ApprovalZoneRejectedForms,
  ApprovalZoneUnsignedForms,
} from '../service/welcome-interface';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [SharedModule, ButtonComponent],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('contentTemplate', { static: true })
  contentTemplate!: TemplateRef<any>;

  items_2: any[] = [];
  items_3: any[] = [];
  items_4: any[] = [];
  items_5: any[] = [];
  items_6: any[] = [];

  // 分頁器一頁多少筆數據
  pageSize: number = 5;

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

  // 簽核專區
  // 1.已送審表單
  // 控制已送審表單modal
  isApprovalZone_SubmittedFormsVisible = false;
  // 已送審表單分頁器當前頁數
  currentApprovalZone_SubmittedFormsPage: number = 1;
  // 已送審表單模擬資料
  approvalZone_SubmittedFormsData: ApprovalZoneSubmittedForms[] = [
    {
      formName: '個案初評表',
      deadline: '113/02/02',
    },
  ];
  // 分頁器切割後的已送審表單資料
  get newApprovalZone_SubmittedFormsData(): ApprovalZoneSubmittedForms[] {
    return this.approvalZone_SubmittedFormsData.slice(
      (this.currentApprovalZone_SubmittedFormsPage - 1) * this.pageSize,
      this.currentApprovalZone_SubmittedFormsPage * this.pageSize
    );
  }

  // 2.組長已簽核表單
  // 控制組長已簽核表單modal
  isApprovalZone_ApprovedByTeamLeadFormsVisible = false;
  // 組長已簽核表單分頁器當前頁數
  currentApprovalZone_ApprovedByTeamLeadFormsPage: number = 1;
  // 組長已簽核表單模擬資料
  approvalZone_ApprovedByTeamLeadFormsData: ApprovalZoneApprovedByTeamLeadForms[] =
    [
      {
        formName: '複評表',
        deadline: '113/05/02',
      },
    ];
  // 分頁器切割後的組長已簽核表單資料
  get newApprovalZone_ApprovedByTeamLeadFormsData(): ApprovalZoneApprovedByTeamLeadForms[] {
    return this.approvalZone_ApprovedByTeamLeadFormsData.slice(
      (this.currentApprovalZone_ApprovedByTeamLeadFormsPage - 1) *
        this.pageSize,
      this.currentApprovalZone_ApprovedByTeamLeadFormsPage * this.pageSize
    );
  }

  // 3.退件表單
  // 控制組長退件表單modal
  isApprovalZone_RejectedFormsVisible = false;
  // 組長退件表單分頁器當前頁數
  currentApprovalZone_RejectedFormsPage: number = 1;
  // 組長退件表單模擬資料
  approvalZone_RejectedFormsData: ApprovalZoneRejectedForms[] = [
    {
      formName: '個案訪視紀錄表',
      deadline: '113/03/02',
    },
  ];
  // 分頁器切割後的組長退件表單資料
  get newApprovalZone_RejectedFormsData(): ApprovalZoneRejectedForms[] {
    return this.approvalZone_RejectedFormsData.slice(
      (this.currentApprovalZone_RejectedFormsPage - 1) * this.pageSize,
      this.currentApprovalZone_RejectedFormsPage * this.pageSize
    );
  }

  // 4.未簽核表單
  // 控制組長退件表單modal
  isApprovalZone_UnsignedFormsVisible = false;
  // 組長退件表單分頁器當前頁數
  currentApprovalZone_UnsignedFormsPage: number = 1;
  // 組長退件表單模擬資料
  approvalZone_UnsignedFormsData: ApprovalZoneUnsignedForms[] = [
    {
      formName: '個案訪視紀錄表',
      deadline: '113/03/02',
    },
  ];
  // 分頁器切割後的組長退件表單資料
  get newApprovalZone_UnsignedFormsData(): ApprovalZoneUnsignedForms[] {
    return this.approvalZone_UnsignedFormsData.slice(
      (this.currentApprovalZone_UnsignedFormsPage - 1) * this.pageSize,
      this.currentApprovalZone_UnsignedFormsPage * this.pageSize
    );
  }

  constructor(public dialog: MatDialog, private router: Router) {
    // Initialize items_1 and items_2 arrays with mock data

    const originalData_2 = {
      date: '113/6/20',
      info: '【公告】這是測試公告。測試佈局和樣式效果。我們需要確保文字能正確換行，並且在不同裝置上都能正常顯示。這個公告的目的是驗證文字長度對頁面佈局的影響。',
      attach: '無',
      unit: '資訊室',
      create: '王小明',
    };

    for (let i = 0; i < 5; i++) {
      const newData = { ...originalData_2 };
      this.items_2.push(newData);
    }
  }

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
    // 簽核專區
    // 生成多筆已送審表單模擬資料
    for (let i = 0; i < 10; i++) {
      this.approvalZone_SubmittedFormsData.push(
        this.approvalZone_SubmittedFormsData[i]
      );
    }
    // 生成多筆組長已簽核表單模擬資料
    for (let i = 0; i < 15; i++) {
      this.approvalZone_ApprovedByTeamLeadFormsData.push(
        this.approvalZone_ApprovedByTeamLeadFormsData[i]
      );
    }
    // 生成多筆退件表單模擬資料
    for (let i = 0; i < 13; i++) {
      this.approvalZone_RejectedFormsData.push(
        this.approvalZone_RejectedFormsData[i]
      );
    }
    // 生成多筆未簽核表單模擬資料
    for (let i = 0; i < 18; i++) {
      this.approvalZone_UnsignedFormsData.push(
        this.approvalZone_UnsignedFormsData[i]
      );
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

  // 簽核專區
  // 1.已送審表單
  // 顯示已送審表單modal
  showApprovalZone_SubmittedFormsModal(): void {
    this.isApprovalZone_SubmittedFormsVisible = true;
  }
  // 當已送審表單改變頁數時觸發
  onApprovalZone_SubmittedFormsPageIndexChange(currentPage: number) {
    this.currentApprovalZone_SubmittedFormsPage = currentPage;
  }
  // 關閉已送審表單modal
  closeApprovalZone_SubmittedFormsModal(): void {
    this.isApprovalZone_SubmittedFormsVisible = false;
  }
  // 查看單項已送審表單
  viewApprovalZone_SubmittedFormsData() {
    // !TODO:跳轉表單邏輯
  }

  // 2.組長已簽核表單
  // 顯示組長已簽核表單modal
  showApprovalZone_ApprovedByTeamLeadFormsModal(): void {
    this.isApprovalZone_ApprovedByTeamLeadFormsVisible = true;
  }
  // 當組長已簽核表單改變頁數時觸發
  onApprovalZone_ApprovedByTeamLeadFormsPageIndexChange(currentPage: number) {
    this.currentApprovalZone_ApprovedByTeamLeadFormsPage = currentPage;
  }
  // 關閉組長已簽核表單modal
  closeApprovalZone_ApprovedByTeamLeadFormsModal(): void {
    this.isApprovalZone_ApprovedByTeamLeadFormsVisible = false;
  }
  // 查看單項組長已簽核表單
  viewApprovalZone_ApprovedByTeamLeadFormsData() {
    // !TODO:跳轉表單邏輯
  }

  // 3.退件表單
  // 顯示退件表單modal
  showApprovalZone_RejectedFormsModal(): void {
    this.isApprovalZone_RejectedFormsVisible = true;
  }
  // 當退件表單改變頁數時觸發
  onApprovalZone_RejectedFormsPageIndexChange(currentPage: number) {
    this.currentApprovalZone_RejectedFormsPage = currentPage;
  }
  // 關閉退件表單modal
  closeApprovalZone_RejectedFormsModal(): void {
    this.isApprovalZone_RejectedFormsVisible = false;
  }
  // 查看單項退件表單
  viewApprovalZone_RejectedFormsData() {
    // !TODO:跳轉表單邏輯
  }

  // 4.未簽核表單
    // 顯示未簽核表單modal
  showApprovalZone_UnsignedFormsModal(): void {
    this.isApprovalZone_UnsignedFormsVisible = true;
  }
  // 當未簽核表單改變頁數時觸發
  onApprovalZone_UnsignedFormsPageIndexChange(currentPage: number) {
    this.currentApprovalZone_UnsignedFormsPage = currentPage;
  }
  // 關閉未簽核表單modal
  closeApprovalZone_UnsignedFormsModal(): void {
    this.isApprovalZone_UnsignedFormsVisible = false;
  }
  // 查看單項未簽核表單
  viewApprovalZone_UnsignedFormsData() {
    // !TODO:跳轉表單邏輯
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
      // Handle any actions after dialog closes if needed
    });
  }
}
