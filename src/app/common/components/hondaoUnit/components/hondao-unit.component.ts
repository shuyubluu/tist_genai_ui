import { Component, forwardRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonComponent } from '../../button/button.component';
import { Region, Team, Unit, UnitData } from '../service/hondao-unit.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-hondao-unit',
  standalone: true,
  imports: [SharedModule, ButtonComponent],
  templateUrl: './hondao-unit.component.html',
  styleUrl: './hondao-unit.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HondaoUnitComponent),
      multi: true,
    },
  ],
})
export class HondaoUnitComponent implements ControlValueAccessor {
  // 存放已選的單位
  selectUnitList: string[] = [];
  // 展開中的任職組別list
  expandTeamMenu: string[] = [];
  // 展開中的任職區域list
  expandRegionMenu: string[] = [];

  // 用於 ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  // 所有單位資料
  allUnitData: UnitData[] = [
    {
      code: 'A01',
      headquarters: '總會',
      indeterminate: false,
      checked: false,
      unit: [
        {
          code: 'A001',
          department: '事業發展處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'A0001',
              teamName: '事業發展中心- 高齡友善推廣組(總會事業)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'AA',
                  regionName: '彭祖體驗長者導師志工隊',
                  checked: false,
                },
              ],
            },
            {
              code: 'A0002',
              teamName: '不老夢想-不老夢想號組(總會事業夢想)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'AB',
                  regionName: '不老夢想125號志工隊',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'B001',
          department: '臺北服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'B0001',
              teamName: '松山社區服務中心- 社區服務組(台北社服松山)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'BA',
                  regionName: '北投(北投志工站)',
                  checked: false,
                },
                {
                  code: 'BB',
                  regionName: '南港(南港志工站)',
                  checked: false,
                },
                {
                  code: 'BC',
                  regionName: '松山(松山志工站)',
                  checked: false,
                },
                {
                  code: 'BD',
                  regionName: '中正(中正志工站)',
                  checked: false,
                },
                {
                  code: 'BE',
                  regionName: '內湖(內湖志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'B0002',
              teamName: '五結社區服務中心- 社區服務組(台北社服五結)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'BF',
                  regionName: '宜蘭(宜蘭志工站)',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'C001',
          department: '新北服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'C0001',
              teamName: '桃園社區服務中心- 個案服務組(新北社服桃園)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'CA',
                  regionName: '八德(八德志工站)',
                  checked: false,
                },
                {
                  code: 'CB',
                  regionName: '龍潭(龍潭志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'C0002',
              teamName: '新莊社區服務中心- 個案服務組(新北社服新莊)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'CC',
                  regionName: '平溪(平溪志工站)',
                  checked: false,
                },
                {
                  code: 'CD',
                  regionName: '樹林(樹林志工站)',
                  checked: false,
                },
                {
                  code: 'CE',
                  regionName: '三峽(三峽志工站)',
                  checked: false,
                },
                {
                  code: 'CF',
                  regionName: '雙板(雙板志工站)',
                  checked: false,
                },
                {
                  code: 'CG',
                  regionName: '新莊(新莊志工站)',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'D001',
          department: '臺中服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'D0001',
              teamName: '西區社區服務中心- 個案服務組(台中社服西區)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'DA',
                  regionName: '清水(清水志工站)',
                  checked: false,
                },
                {
                  code: 'DB',
                  regionName: '太平(太平志工站)',
                  checked: false,
                },
                {
                  code: 'DC',
                  regionName: '南屯(南屯志工站)',
                  checked: false,
                },
                {
                  code: 'DD',
                  regionName: '北屯(北屯志工站)',
                  checked: false,
                },
                {
                  code: 'DE',
                  regionName: '大雅(大雅志工站)',
                  checked: false,
                },
                {
                  code: 'DF',
                  regionName: '中西(中西志工站)',
                  checked: false,
                },
                {
                  code: 'DG',
                  regionName: '埔里(埔里志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'D0002',
              teamName: '台中中一區居家長照機構- 主任室(台中居一)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'DH',
                  regionName: '西屯(西屯志工隊)',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'E001',
          department: '彰化服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'E0001',
              teamName: '彰化社區服務中心- 社區服務北彰組(彰化社服彰化)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'EA',
                  regionName: '和美(和美志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'E0002',
              teamName: '溪湖社區服務中心- 社區服務溪湖組(彰化社服溪湖)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'EB',
                  regionName: '憶智樂活之家志工隊',
                  checked: false,
                },
              ],
            },
            {
              code: 'E0003',
              teamName: '溪湖社區服務中心- 社區服務南彰組(彰化社服溪湖)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'EC',
                  regionName: '田中(田中志工站)',
                  checked: false,
                },
                {
                  code: 'ED',
                  regionName: '員林(員林志工站)',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'F001',
          department: '嘉義服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'F0001',
              teamName: '大林社區服務中心- 社區服務大林組(嘉義社服大林)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'FA',
                  regionName: '大林(大林志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'F0002',
              teamName: '市區社區服務中心- 社區服務市區組(嘉義社服市區)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'FB',
                  regionName: '嘉西(嘉西志工站)',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'G001',
          department: '高雄服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'G0001',
              teamName: '不老食光- 不老食光鼓山店(高雄)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'GA',
                  regionName: '大寮(大寮志工站)',
                  checked: false,
                },
              ],
            },
            {
              code: 'G0002',
              teamName: '左營社區服務中心- 個案服務組(高雄社服左營)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'GB',
                  regionName: '三民區',
                  checked: false,
                },
              ],
            },
            {
              code: 'G0003',
              teamName: '前金社區服務中心- 社區服務組(高雄社服前金)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'GC',
                  regionName: '前金(志工站)',
                  checked: false,
                },
                {
                  code: 'GD',
                  regionName: '前金區',
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          code: 'H001',
          department: '屏東服務處',
          indeterminate: false,
          checked: false,
          team: [
            {
              code: 'H0001',
              teamName: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
              indeterminate: false,
              checked: false,
              region: [
                {
                  code: 'HA',
                  regionName: '萬丹(萬丹志工站)',
                  checked: false,
                },
                {
                  code: 'HB',
                  regionName: '潮州(潮州志工站)',
                  checked: false,
                },
                {
                  code: 'HC',
                  regionName: '林邊(林邊志工站)',
                  checked: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  // 展開任職組別List
  expandTeam(index: string) {
    this.expandTeamMenu.push(index);
  }

  // 收合任職組別List
  closeTeam(index: string) {
    this.expandTeamMenu = this.expandTeamMenu.filter((item) => item !== index);
  }

  // 展開任職區域List
  expandRegion(index: string) {
    this.expandRegionMenu.push(index);
  }

  // 收合任職區域List
  closeRegion(index: string) {
    this.expandRegionMenu = this.expandRegionMenu.filter(
      (item) => item !== index
    );
  }

  // 當選擇全會
  onHeadquartersChecked(headquarters: UnitData) {
    // 如果已選擇的單位資料包含全會，則移除全會
    // 否則填加全會
    if (this.selectUnitList.includes(headquarters.headquarters)) {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== headquarters.headquarters
      );
    } else {
      this.selectUnitList.push(headquarters.headquarters);
    }

    // 如果全會處於模糊狀態，則將全會設為全選
    // 設置全選後並移除多餘的任職單位、組別、區域資料
    if (headquarters.indeterminate) {
      headquarters.indeterminate = false;
      headquarters.checked = true;
      headquarters.unit.forEach((unit: Unit) => {
        this.selectUnitList = this.selectUnitList.filter(
          (item) => item !== unit.department
        );
        unit.team.forEach((team: Team) => {
          this.selectUnitList = this.selectUnitList.filter(
            (item) => item !== team.teamName
          );
          team.region.forEach((region: Region) => {
            this.selectUnitList = this.selectUnitList.filter(
              (item) => item !== region.regionName
            );
          });
        });
      });
    }

    // 使任職單位組別、區域勾選選項同步於任職單位勾選選項
    headquarters.unit.forEach((unit: Unit) => {
      unit.indeterminate = false;
      unit.checked = headquarters.checked;
      unit.team.forEach((team: Team) => {
        team.indeterminate = false;
        team.checked = unit.checked;
        team.region.forEach((region: Region) => {
          region.checked = unit.checked;
        });
      });
    });

    this.emitValue();
  }

  // 當選擇任職單位
  onDepartmentChecked(headquarters: UnitData, unit: Unit) {
    // 如果已選擇的單位資料包含該任職單位，則移除該任職單位
    // 否則填加該任職單位
    if (this.selectUnitList.includes(unit.department)) {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== unit.department
      );
    } else {
      this.selectUnitList.push(unit.department);
    }

    // 如果該任職單位處於模糊狀態，則將該任職單位設為全選
    // 設置全選後並移除多餘的任職組別、區域資料
    if (unit.indeterminate) {
      unit.indeterminate = false;
      unit.checked = true;
      unit.team.forEach((team: Team) => {
        this.selectUnitList = this.selectUnitList.filter(
          (item) => item !== team.teamName
        );
        team.region.forEach((region: Region) => {
          this.selectUnitList = this.selectUnitList.filter(
            (item) => item !== region.regionName
          );
        });
      });
    }

    // 如果全會全選未勾選但有任職單位被勾選，則將任職單位設為模糊狀態
    // 否則取消模糊狀態
    if (
      !headquarters.checked &&
      headquarters.unit.some((unit: Unit) => unit.checked)
    ) {
      headquarters.indeterminate = true;
      headquarters.checked = false;
    } else {
      headquarters.indeterminate = false;
    }

    // 使任職組別、區域勾選選項同步於任職單位勾選選項
    unit.team.forEach((team: Team) => {
      team.indeterminate = false;
      team.checked = unit.checked;
      team.region.forEach((region: Region) => {
        region.checked = unit.checked;
      });
    });

    // 如果所有任職單位都為全選，則將該全會設為全選
    if (headquarters.unit.every((unit: Unit) => unit.checked)) {
      this.removeUnitSetHeadquartersChecked(headquarters);
    }

    this.emitValue();
  }

  // 當選擇任職組別
  onTeamChecked(headquarters: UnitData, unit: Unit, team: Team) {
    // 如果已選擇的單位資料包含該任職組別，則移除該任職組別
    // 否則填加該任職組別
    if (this.selectUnitList.includes(team.teamName)) {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== team.teamName
      );
    } else {
      this.selectUnitList.push(team.teamName);
    }

    // 如果該任職組別處於模糊狀態，則將該任職組別設為全選
    // 設置全選後並移除多餘的任職區域資料
    if (team.indeterminate) {
      this.removeRegionSetTeamChecked(team);
    }

    // 使任職區域勾選選項同步於任職組別勾選選項
    team.region.forEach((region: Region) => {
      region.checked = team.checked;
    });

    // 如果全會全選未勾選但有任職組別被勾選，則將全會設為模糊狀態
    // 否則取消模糊狀態
    if (!headquarters.checked && unit.team.some((team: Team) => team.checked)) {
      headquarters.indeterminate = true;
      headquarters.checked = false;
    } else {
      headquarters.indeterminate = false;
    }

    // 如果任職單位全選未勾選但有任職組別被勾選，則將任職單位設為模糊狀態
    // 否則取消模糊狀態
    if (!unit.checked && unit.team.some((team: Team) => team.checked)) {
      unit.indeterminate = true;
      unit.checked = false;
    } else {
      unit.indeterminate = false;
    }

    // 如果所有任職組別都為全選，則將該任職單位設為全選
    if (unit.team.every((team: Team) => team.checked)) {
      this.removeTeamSetUnitChecked(unit);
    }

    // 如果所有任職單位都為全選，則將該全會設為全選
    if (headquarters.unit.every((unit: Unit) => unit.checked)) {
      this.removeUnitSetHeadquartersChecked(headquarters);
    }

    this.emitValue();
  }

  // 當選擇任職區域
  onRegionChecked(
    headquarters: UnitData,
    unit: Unit,
    team: Team,
    region: Region
  ) {
    // 如果已選擇的單位資料包含該任職區域，則移除該任職區域
    // 否則填加該任職區域
    if (this.selectUnitList.includes(region.regionName)) {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== region.regionName
      );
    } else {
      this.selectUnitList.push(region.regionName);
    }

    // 如果全會全選未勾選但有任職區域被勾選，則將全會設為模糊狀態
    // 否則取消模糊狀態
    if (
      !headquarters.checked &&
      team.region.some((region: Region) => region.checked)
    ) {
      headquarters.indeterminate = true;
      headquarters.checked = false;
    } else {
      headquarters.indeterminate = false;
    }

    // 如果任職單位全選未勾選但有任職區域被勾選，則將任職單位設為模糊狀態
    // 否則取消模糊狀態
    if (!unit.checked && team.region.some((region: Region) => region.checked)) {
      unit.indeterminate = true;
      unit.checked = false;
    } else {
      unit.indeterminate = false;
    }

    // 如果任職組別全選未勾選但有任職區域被勾選，則將任職組別設為模糊狀態
    // 否則取消模糊狀態
    if (!team.checked && team.region.some((region: Region) => region.checked)) {
      team.indeterminate = true;
      team.checked = false;
    } else {
      team.indeterminate = false;
    }

    // 如果所有任職區域都為全選，則將該任職組別設為全選
    if (team.region.every((region: Region) => region.checked)) {
      this.removeRegionSetTeamChecked(team);
    }

    // 如果所有任職組別都為全選，則將該任職單位設為全選
    if (unit.team.every((team: Team) => team.checked)) {
      this.removeTeamSetUnitChecked(unit);
    }

    // 如果所有任職單位都為全選，則將該全會設為全選
    if (headquarters.unit.every((unit: Unit) => unit.checked)) {
      this.removeUnitSetHeadquartersChecked(headquarters);
    }

    this.emitValue();
  }

  // 將全會設為全選
  // 並清除清單中多餘的任職單位
  removeUnitSetHeadquartersChecked(unitData: UnitData) {
    unitData.indeterminate = false;
    unitData.checked = true;
    unitData.unit.forEach((unit: Unit) => {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== unit.department
      );
    });
    if (!this.selectUnitList.includes(unitData.headquarters)) {
      this.selectUnitList.push(unitData.headquarters);
    }
  }

  // 將任職單位設為全選
  // 並清除清單中多餘的任職組別
  removeTeamSetUnitChecked(unit: Unit) {
    unit.indeterminate = false;
    unit.checked = true;
    unit.team.forEach((team: Team) => {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== team.teamName
      );
    });
    if (!this.selectUnitList.includes(unit.department)) {
      this.selectUnitList.push(unit.department);
    }
  }

  // 將任職組別設為全選
  // 並清除清單中多餘的任職區域
  removeRegionSetTeamChecked(team: Team) {
    team.indeterminate = false;
    team.checked = true;
    team.region.forEach((region: Region) => {
      this.selectUnitList = this.selectUnitList.filter(
        (item) => item !== region.regionName
      );
    });
    if (!this.selectUnitList.includes(team.teamName)) {
      this.selectUnitList.push(team.teamName);
    }
  }

  // ControlValueAccessor 實作
  writeValue(value: string[]): void {
    if (value) {
      this.selectUnitList = value;
      this.updateUnitViewPermissionsSelection();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 更新檢視單位權限的勾選狀態
  private updateUnitViewPermissionsSelection() {
    this.allUnitData.forEach((unitData: UnitData) => {
      const headquartersSelected = this.selectUnitList.includes(
        unitData.headquarters
      );

      unitData.unit.forEach((unit) => {
        const unitSelected = this.selectUnitList.includes(unit.department);
        // 如果任職單位被選中，則將任職單位設為勾選狀態
        if (unitSelected) {
          unit.checked = unitSelected;
        }

        // 如果全會沒被選中，但任職單位有被選到，則將全會設為模糊狀態
        if (
          !headquartersSelected &&
          unitData.unit.some((unit: Unit) => unit.checked)
        ) {
          unitData.indeterminate = true;
        }

        // 遍歷該任職單位的任職組別
        unit.team.forEach((team: Team) => {
          const teamSelected = this.selectUnitList.includes(team.teamName);
          // 如果任職組別被選中，則將任職組別設為勾選狀態
          if (team.teamName) {
            team.checked = teamSelected;
          }

          // 如果任職單位沒被選中，但該任職組別有被選到，則將單位設為模糊狀態
          if (!unitSelected && unit.team.some((team) => team.checked)) {
            unit.indeterminate = true;
          }

          // 如果全會沒被選中，但任職組別有被選到，則將全會設為模糊狀態
          if (!headquartersSelected && unit.team.some((team) => team.checked)) {
            unitData.indeterminate = true;
          }

          // 遍歷該任職組別的任職區域
          team.region.forEach((region: Region) => {
            // 如果任職組別沒被選中，但任職區域有被選到，則將任職組別設為模糊狀態
            if (!teamSelected && team.region.some((region) => region.checked)) {
              team.indeterminate = true;
            }

            // 如果任職單位沒被選中，但任職區域有被選到，則將任職單位設為模糊狀態
            if (!unitSelected && team.region.some((region) => region.checked)) {
              unit.indeterminate = true;
            }

            // 如果全會沒被選中，但任職區域有被選到，則將全會設為模糊狀態
            if (
              !headquartersSelected &&
              team.region.some((region) => region.checked)
            ) {
              unitData.indeterminate = true;
            }

            // 如果任職單位被選中，則強制選中所有組別
            if (unit.checked) {
              unit.indeterminate = false;
              unit.checked = true;
              team.checked = true;
              this.selectUnitList = this.selectUnitList.filter(
                (item) => item !== team.teamName
              );
            } else {
              team.checked = this.selectUnitList.includes(team.teamName);
            }

            // 如果任職組別被選中，則強制選中所有區域
            if (team.checked) {
              team.indeterminate = false;
              team.checked = true;
              region.checked = true;
              this.selectUnitList = this.selectUnitList.filter(
                (item) => item !== region.regionName
              );
            } else {
              region.checked = this.selectUnitList.includes(region.regionName);
            }

            // 如果全會被選中，則強制選中所有任職單位
            if (unitData.checked) {
              unitData.indeterminate = false;
              unitData.checked = true;
              unit.indeterminate = false;
              unit.checked = true;
              this.selectUnitList = this.selectUnitList.filter(
                (item) => item !== unit.department
              );
              team.indeterminate = false;
              team.checked = true;
              this.selectUnitList = this.selectUnitList.filter(
                (item) => item !== team.teamName
              );
              region.checked = true;
              this.selectUnitList = this.selectUnitList.filter(
                (item) => item !== region.regionName
              );
            } else {
              unitData.checked = this.selectUnitList.includes(
                unitData.headquarters
              );
            }
          });
        });
      });
    });
  }

  // 通知父組件表單值已改變
  private emitValue(): void {
    this.onChange(this.selectUnitList);
    this.onTouched();
  }
}
