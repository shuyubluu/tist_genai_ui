export interface Region {
  code: string;
  regionName: string;
  checked: boolean;
}

export interface Team {
  code: string;
  teamName: string;
  checked: boolean;
  region: Region[];
}

export interface Unit {
  code: string;
  department: string;
  checked: boolean;
  team: Team[];
}

export interface UnitData {
  code: string;
  headquarters: string;
  checked: boolean;
  unit: Unit[];
}
