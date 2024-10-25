export interface SearchResultData {
  serviceStatus: string;
  caseName: string;
  gender: string;
  dateOfBirth: string;
  responsiblePerson: string;
  caseOpeningDate: string;
  caseClassification: string;
  isChoice: boolean;
}

export interface CheckboxGroup {
  label: string;
  value: string;
  checked: boolean;
  disabled: boolean;
}
