export interface TotalCaseCount {
  unitName: string;
  numberOfPeople: string;
  percentage: string;
}

export interface TotalCaseGender {
  unitName: string;
  numberOfPeople_men: string;
  percentage_men: string;
  numberOfPeople_women: string;
  percentage_women: string;
}

export interface TotalCaseAge {
  ageRange: string;
  numberOfPeople: string;
  percentage: string;
}

export interface TotalCaseIdentityType {
  identityType: string;
  numberOfPeople: string;
  percentage: string;
}

export interface TotalCaseSocialWelfareSubsidy {
  subsidyName: string;
  numberOfPeople: string;
}

export interface TotalCaseSpecialIssues {
  issueName: string;
  numberOfPeople: string;
}

export interface TotalCaseRisk {
  unitName: string;
  numberOfPeople_high: string;
  percentage_high: string;
  numberOfPeople_medium: string;
  percentage_medium: string;
  numberOfPeople_low: string;
  percentage_low: string;
}

export interface TotalCaseRiskAndSpecialIssues {
  issueName: string;
  numberOfPeople_high: string;
  numberOfPeople_medium: string;
  numberOfPeople_low: string;
}

export interface TotalCaseRiskAndIdentityType {
  identityType: string;
  numberOfPeople_high: string;
  numberOfPeople_medium: string;
  numberOfPeople_low: string;
}

export interface TotalCaseSocialWelfareSubsidyAndSpecialIssues {
  subsidyName: string;
  numberOfPeople_livingAlone: string;
  numberOfPeople_elderlyCouple: string;
  numberOfPeople_doubleElderlyCouples: string;
  numberOfPeople_dementiaStatus: string;
}

export interface CaseOpeningClosingDataTotalCasesAndPeople {
  month: string;
  activeCases: string;
  closedCases: string;
}

export interface CaseOpeningClosingDataTotalCaseCountVisits {
  month: string;
  activeCases: string;
  closedCases: string;
}

export interface CaseOpeningClosingDataCaseSource {
  caseSource: string;
  numberOfPeople: string;
}

export interface CaseOpeningClosingDataCaseClosureReason {
  caseClosureReason: string;
  numberOfPeople: string;
}

export interface ServiceAndDemandStatsTop10DemandedNeeds {
  demandedNeeds: string;
  visitCount: string;
}

export interface ServiceAndDemandStatsTop10ServiceContents {
  serviceContents: string;
  visitCount: string;
}
export interface ServiceAndDemandStatsVolunteerServiceCount {
  volunteerService: string;
  visitCount: string;
}
