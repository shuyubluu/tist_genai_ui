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
      checked: false,
      unit: [
        {
          code: 'A001',
          department: '事業發展處',
          checked: false,
          team: [
            {
              code: 'A0001',
              teamName: '事業發展中心- 高齡友善推廣組(總會事業)',
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
          checked: false,
          team: [
            {
              code: 'B0001',
              teamName: '松山社區服務中心- 社區服務組(台北社服松山)',
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
          checked: false,
          team: [
            {
              code: 'C0001',
              teamName: '桃園社區服務中心- 個案服務組(新北社服桃園)',
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
          checked: false,
          team: [
            {
              code: 'D0001',
              teamName: '西區社區服務中心- 個案服務組(台中社服西區)',
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
          checked: false,
          team: [
            {
              code: 'E0001',
              teamName: '彰化社區服務中心- 社區服務北彰組(彰化社服彰化)',
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
          checked: false,
          team: [
            {
              code: 'F0001',
              teamName: '大林社區服務中心- 社區服務大林組(嘉義社服大林)',
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
          checked: false,
          team: [
            {
              code: 'G0001',
              teamName: '不老食光- 不老食光鼓山店(高雄)',
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
          checked: false,
          team: [
            {
              code: 'H0001',
              teamName: '潮州社區服務中心- 個案服務組(屏東社服潮州)',
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
  expandTeam(unitCode: string) {
    this.expandTeamMenu.push(unitCode);
  }

  // 收合任職組別List
  closeTeam(unit: Unit) {
    const unitCode = unit.code;
    this.expandTeamMenu = this.expandTeamMenu.filter(
      (code: string) => code !== unitCode
    );
    unit.team.forEach((team: Team) => {
      this.closeRegion(team.code);
    });
  }

  // 展開任職區域List
  expandRegion(teamCode: string) {
    this.expandRegionMenu.push(teamCode);
  }

  // 收合任職區域List
  closeRegion(teamCode: string) {
    this.expandRegionMenu = this.expandRegionMenu.filter(
      (code) => code !== teamCode
    );
  }

  // 當選擇全會
  onHeadquartersChecked(headquarters: UnitData) {
    // 如果已選擇的單位資料包含全會，則移除全會
    // 否則填加全會
    if (this.selectUnitList.includes(headquarters.headquarters)) {
      this.selectUnitList = this.selectUnitList.filter(
        (select) => select !== headquarters.headquarters
      );
    } else {
      this.selectUnitList.push(headquarters.headquarters);
    }

    this.emitValue();
  }

  // 當選擇任職單位
  onDepartmentChecked(unit: Unit) {
    // 如果已選擇的單位資料包含該任職單位，則移除該任職單位
    // 否則填加該任職單位
    if (this.selectUnitList.includes(unit.department)) {
      this.selectUnitList = this.selectUnitList.filter(
        (select) => select !== unit.department
      );
    } else {
      this.selectUnitList.push(unit.department);
    }

    this.emitValue();
  }

  // 當選擇任職組別
  onTeamChecked(team: Team) {
    // 如果已選擇的單位資料包含該任職組別，則移除該任職組別
    // 否則填加該任職組別
    if (this.selectUnitList.includes(team.teamName)) {
      this.selectUnitList = this.selectUnitList.filter(
        (select) => select !== team.teamName
      );
    } else {
      this.selectUnitList.push(team.teamName);
    }

    this.emitValue();
  }

  // 當選擇任職區域
  onRegionChecked(region: Region) {
    // 如果已選擇的單位資料包含該任職區域，則移除該任職區域
    // 否則填加該任職區域
    if (this.selectUnitList.includes(region.regionName)) {
      this.selectUnitList = this.selectUnitList.filter(
        (select) => select !== region.regionName
      );
    } else {
      this.selectUnitList.push(region.regionName);
    }

    this.emitValue();
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
      // 如果任職單位被選中，則將任職單位設為勾選狀態
      if (headquartersSelected) {
        unitData.checked = headquartersSelected;
      }

      unitData.unit.forEach((unit) => {
        const unitSelected = this.selectUnitList.includes(unit.department);
        // 如果任職單位被選中，則將任職單位設為勾選狀態
        if (unitSelected) {
          unit.checked = unitSelected;
        }

        // 遍歷該任職單位的任職組別
        unit.team.forEach((team: Team) => {
          const teamSelected = this.selectUnitList.includes(team.teamName);
          // 如果任職組別被選中，則將任職組別設為勾選狀態
          if (teamSelected) {
            team.checked = teamSelected;
          }

          // 遍歷該任職組別的任職區域
          team.region.forEach((region: Region) => {
            const regionSelected = this.selectUnitList.includes(
              region.regionName
            );
            // 如果任區域別被選中，則將任職區域設為勾選狀態
            if (regionSelected) {
              region.checked = regionSelected;
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
