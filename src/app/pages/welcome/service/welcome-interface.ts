export interface CaseManagementResponsibleCase {
  caseName: string;
  caseStatus: string;
}

export interface CaseManagementMonthlyTarget {
  caseName: string;
  formType: string;
}

export interface CaseManagementOverdueForms {
  caseName: string;
  formType: string;
}

export interface VolunteerManagementVolunteerCount {
  volunteerName: string;
  volunteerStatus: string;
}

export interface VolunteerManagementMonthlyTarget {
  volunteerName: string;
  formType: string;
}

export interface VolunteerManagementOverdueForms {
  volunteerName: string;
  formType: string;
}

export interface ApprovalZoneSubmittedForms {
  formName: string;
  deadline: string;
}

export interface ApprovalZoneApprovedByTeamLeadForms {
  formName: string;
  deadline: string;
}

export interface ApprovalZoneRejectedForms {
  formName: string;
  deadline: string;
}

export interface ApprovalZoneUnsignedForms {
  formName: string;
  deadline: string;
}

export interface Announcement {
  date: string;
  subject: string;
  unit: string;
  create: string;
}
