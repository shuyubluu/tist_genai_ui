export interface Region {
  code: string;
  regionName: string;
  checked: boolean;
}

export interface Team {
  code: string;
  teamName: string;
  indeterminate: boolean;
  checked: boolean;
  region: Region[];
}

export interface Unit {
  code: string;
  department: string;
  indeterminate: boolean;
  checked: boolean;
  team: Team[];
}

export interface UnitData {
  code: string;
  headquarters: string;
  indeterminate: boolean;
  checked: boolean;
  unit: Unit[];
}
