import { AreaList } from './../service/taiwan-city-select-radio.interface';
import { Component, forwardRef } from '@angular/core';
import { TaiwanCityList } from '../service/taiwan-city-select-radio.interface';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../button/button.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-taiwan-city-select-radio',
  standalone: true,
  imports: [CommonModule, SharedModule, ButtonComponent],
  templateUrl: './taiwan-city-select-radio.component.html',
  styleUrl: './taiwan-city-select-radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaiwanCitySelectRadioComponent),
      multi: true,
    },
  ],
})
export class TaiwanCitySelectRadioComponent implements ControlValueAccessor {
  // 展開中的list
  expandMenu: number[] = [];
  // 存放已選的區域資料
  selectList: string[] = [];

  onChange: any = () => {};
  onTouched: any = () => {};

  // 實現 ControlValueAccessor 接口的方法
  writeValue(value: string[]): void {
    if (value) {
      this.selectList = value;
      this.updateCityAndAreaSelection();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 台灣鄉鎮市區地址清單
  taiwanCityList: TaiwanCityList[] = [
    {
      CityName: '臺北市',
      CityEngName: 'Taipei City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '100',
          AreaName: '中正區',
          AreaEngName: 'Zhongzheng Dist.',
          checked: false,
        },
        {
          ZipCode: '103',
          AreaName: '大同區',
          AreaEngName: 'Datong Dist.',
          checked: false,
        },
        {
          ZipCode: '104',
          AreaName: '中山區',
          AreaEngName: 'Zhongshan Dist.',
          checked: false,
        },
        {
          ZipCode: '105',
          AreaName: '松山區',
          AreaEngName: 'Songshan Dist.',
          checked: false,
        },
        {
          ZipCode: '106',
          AreaName: '大安區',
          AreaEngName: 'Da’an Dist.',
          checked: false,
        },
        {
          ZipCode: '108',
          AreaName: '萬華區',
          AreaEngName: 'Wanhua Dist.',
          checked: false,
        },
        {
          ZipCode: '110',
          AreaName: '信義區',
          AreaEngName: 'Xinyi Dist.',
          checked: false,
        },
        {
          ZipCode: '111',
          AreaName: '士林區',
          AreaEngName: 'Shilin Dist.',
          checked: false,
        },
        {
          ZipCode: '112',
          AreaName: '北投區',
          AreaEngName: 'Beitou Dist.',
          checked: false,
        },
        {
          ZipCode: '114',
          AreaName: '內湖區',
          AreaEngName: 'Neihu Dist.',
          checked: false,
        },
        {
          ZipCode: '115',
          AreaName: '南港區',
          AreaEngName: 'Nangang Dist.',
          checked: false,
        },
        {
          ZipCode: '116',
          AreaName: '文山區',
          AreaEngName: 'Wenshan Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '基隆市',
      CityEngName: 'Keelung City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '200',
          AreaName: '仁愛區',
          AreaEngName: 'Ren’ai Dist.',
          checked: false,
        },
        {
          ZipCode: '201',
          AreaName: '信義區',
          AreaEngName: 'Xinyi Dist.',
          checked: false,
        },
        {
          ZipCode: '202',
          AreaName: '中正區',
          AreaEngName: 'Zhongzheng Dist.',
          checked: false,
        },
        {
          ZipCode: '203',
          AreaName: '中山區',
          AreaEngName: 'Zhongshan Dist.',
          checked: false,
        },
        {
          ZipCode: '204',
          AreaName: '安樂區',
          AreaEngName: 'Anle Dist.',
          checked: false,
        },
        {
          ZipCode: '205',
          AreaName: '暖暖區',
          AreaEngName: 'Nuannuan Dist.',
          checked: false,
        },
        {
          ZipCode: '206',
          AreaName: '七堵區',
          AreaEngName: 'Qidu Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '新北市',
      CityEngName: 'New Taipei City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '207',
          AreaName: '萬里區',
          AreaEngName: 'Wanli Dist.',
          checked: false,
        },
        {
          ZipCode: '208',
          AreaName: '金山區',
          AreaEngName: 'Jinshan Dist.',
          checked: false,
        },
        {
          ZipCode: '220',
          AreaName: '板橋區',
          AreaEngName: 'Banqiao Dist.',
          checked: false,
        },
        {
          ZipCode: '221',
          AreaName: '汐止區',
          AreaEngName: 'Xizhi Dist.',
          checked: false,
        },
        {
          ZipCode: '222',
          AreaName: '深坑區',
          AreaEngName: 'Shenkeng Dist.',
          checked: false,
        },
        {
          ZipCode: '223',
          AreaName: '石碇區',
          AreaEngName: 'Shiding Dist.',
          checked: false,
        },
        {
          ZipCode: '224',
          AreaName: '瑞芳區',
          AreaEngName: 'Ruifang Dist.',
          checked: false,
        },
        {
          ZipCode: '226',
          AreaName: '平溪區',
          AreaEngName: 'Pingxi Dist.',
          checked: false,
        },
        {
          ZipCode: '227',
          AreaName: '雙溪區',
          AreaEngName: 'Shuangxi Dist.',
          checked: false,
        },
        {
          ZipCode: '228',
          AreaName: '貢寮區',
          AreaEngName: 'Gongliao Dist.',
          checked: false,
        },
        {
          ZipCode: '231',
          AreaName: '新店區',
          AreaEngName: 'Xindian Dist.',
          checked: false,
        },
        {
          ZipCode: '232',
          AreaName: '坪林區',
          AreaEngName: 'Pinglin Dist.',
          checked: false,
        },
        {
          ZipCode: '233',
          AreaName: '烏來區',
          AreaEngName: 'Wulai Dist.',
          checked: false,
        },
        {
          ZipCode: '234',
          AreaName: '永和區',
          AreaEngName: 'Yonghe Dist.',
          checked: false,
        },
        {
          ZipCode: '235',
          AreaName: '中和區',
          AreaEngName: 'Zhonghe Dist.',
          checked: false,
        },
        {
          ZipCode: '236',
          AreaName: '土城區',
          AreaEngName: 'Tucheng Dist.',
          checked: false,
        },
        {
          ZipCode: '237',
          AreaName: '三峽區',
          AreaEngName: 'Sanxia Dist.',
          checked: false,
        },
        {
          ZipCode: '238',
          AreaName: '樹林區',
          AreaEngName: 'Shulin Dist.',
          checked: false,
        },
        {
          ZipCode: '239',
          AreaName: '鶯歌區',
          AreaEngName: 'Yingge Dist.',
          checked: false,
        },
        {
          ZipCode: '241',
          AreaName: '三重區',
          AreaEngName: 'Sanchong Dist.',
          checked: false,
        },
        {
          ZipCode: '242',
          AreaName: '新莊區',
          AreaEngName: 'Xinzhuang Dist.',
          checked: false,
        },
        {
          ZipCode: '243',
          AreaName: '泰山區',
          AreaEngName: 'Taishan Dist.',
          checked: false,
        },
        {
          ZipCode: '244',
          AreaName: '林口區',
          AreaEngName: 'Linkou Dist.',
          checked: false,
        },
        {
          ZipCode: '247',
          AreaName: '蘆洲區',
          AreaEngName: 'Luzhou Dist.',
          checked: false,
        },
        {
          ZipCode: '248',
          AreaName: '五股區',
          AreaEngName: 'Wugu Dist.',
          checked: false,
        },
        {
          ZipCode: '249',
          AreaName: '八里區',
          AreaEngName: 'Bali Dist.',
          checked: false,
        },
        {
          ZipCode: '251',
          AreaName: '淡水區',
          AreaEngName: 'Tamsui Dist.',
          checked: false,
        },
        {
          ZipCode: '252',
          AreaName: '三芝區',
          AreaEngName: 'Sanzhi Dist.',
          checked: false,
        },
        {
          ZipCode: '253',
          AreaName: '石門區',
          AreaEngName: 'Shimen Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '連江縣',
      CityEngName: 'Lienchiang County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '209',
          AreaName: '南竿鄉',
          AreaEngName: 'Nangan Township',
          checked: false,
        },
        {
          ZipCode: '210',
          AreaName: '北竿鄉',
          AreaEngName: 'Beigan Township',
          checked: false,
        },
        {
          ZipCode: '211',
          AreaName: '莒光鄉',
          AreaEngName: 'Juguang Township',
          checked: false,
        },
        {
          ZipCode: '212',
          AreaName: '東引鄉',
          AreaEngName: 'Dongyin Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '宜蘭縣',
      CityEngName: 'Yilan County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '260',
          AreaName: '宜蘭市',
          AreaEngName: 'Yilan City',
          checked: false,
        },
        {
          ZipCode: '263',
          AreaName: '壯圍鄉',
          AreaEngName: 'Zhuangwei Township',
          checked: false,
        },
        {
          ZipCode: '261',
          AreaName: '頭城鎮',
          AreaEngName: 'Toucheng Township',
          checked: false,
        },
        {
          ZipCode: '262',
          AreaName: '礁溪鄉',
          AreaEngName: 'Jiaoxi Township',
          checked: false,
        },
        {
          ZipCode: '264',
          AreaName: '員山鄉',
          AreaEngName: 'Yuanshan Township',
          checked: false,
        },
        {
          ZipCode: '265',
          AreaName: '羅東鎮',
          AreaEngName: 'Luodong Township',
          checked: false,
        },
        {
          ZipCode: '266',
          AreaName: '三星鄉',
          AreaEngName: 'Sanxing Township',
          checked: false,
        },
        {
          ZipCode: '267',
          AreaName: '大同鄉',
          AreaEngName: 'Datong Township',
          checked: false,
        },
        {
          ZipCode: '268',
          AreaName: '五結鄉',
          AreaEngName: 'Wujie Township',
          checked: false,
        },
        {
          ZipCode: '269',
          AreaName: '冬山鄉',
          AreaEngName: 'Dongshan Township',
          checked: false,
        },
        {
          ZipCode: '270',
          AreaName: '蘇澳鎮',
          AreaEngName: 'Su’ao Township',
          checked: false,
        },
        {
          ZipCode: '272',
          AreaName: '南澳鄉',
          AreaEngName: 'Nan’ao Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '新竹市',
      CityEngName: 'Hsinchu City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '300',
          AreaName: '東區',
          AreaEngName: 'East Dist.',
          checked: false,
        },
        {
          ZipCode: '300',
          AreaName: '北區',
          AreaEngName: 'North Dist.',
          checked: false,
        },
        {
          ZipCode: '300',
          AreaName: '香山區',
          AreaEngName: 'Xiangshan Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '新竹縣',
      CityEngName: 'Hsinchu County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '308',
          AreaName: '寶山鄉',
          AreaEngName: 'Baoshan Township',
          checked: false,
        },
        {
          ZipCode: '302',
          AreaName: '竹北市',
          AreaEngName: 'Zhubei City',
          checked: false,
        },
        {
          ZipCode: '303',
          AreaName: '湖口鄉',
          AreaEngName: 'Hukou Township',
          checked: false,
        },
        {
          ZipCode: '304',
          AreaName: '新豐鄉',
          AreaEngName: 'Xinfeng Township',
          checked: false,
        },
        {
          ZipCode: '305',
          AreaName: '新埔鎮',
          AreaEngName: 'Xinpu Township',
          checked: false,
        },
        {
          ZipCode: '306',
          AreaName: '關西鎮',
          AreaEngName: 'Guanxi Township',
          checked: false,
        },
        {
          ZipCode: '307',
          AreaName: '芎林鄉',
          AreaEngName: 'Qionglin Township',
          checked: false,
        },
        {
          ZipCode: '310',
          AreaName: '竹東鎮',
          AreaEngName: 'Zhudong Township',
          checked: false,
        },
        {
          ZipCode: '311',
          AreaName: '五峰鄉',
          AreaEngName: 'Wufeng Township',
          checked: false,
        },
        {
          ZipCode: '312',
          AreaName: '橫山鄉',
          AreaEngName: 'Hengshan Township',
          checked: false,
        },
        {
          ZipCode: '313',
          AreaName: '尖石鄉',
          AreaEngName: 'Jianshi Township',
          checked: false,
        },
        {
          ZipCode: '314',
          AreaName: '北埔鄉',
          AreaEngName: 'Beipu Township',
          checked: false,
        },
        {
          ZipCode: '315',
          AreaName: '峨眉鄉',
          AreaEngName: 'Emei Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '桃園市',
      CityEngName: 'Taoyuan City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '320',
          AreaName: '中壢區',
          AreaEngName: 'Zhongli Dist.',
          checked: false,
        },
        {
          ZipCode: '324',
          AreaName: '平鎮區',
          AreaEngName: 'Pingzhen Dist.',
          checked: false,
        },
        {
          ZipCode: '325',
          AreaName: '龍潭區',
          AreaEngName: 'Longtan Dist.',
          checked: false,
        },
        {
          ZipCode: '326',
          AreaName: '楊梅區',
          AreaEngName: 'Yangmei Dist.',
          checked: false,
        },
        {
          ZipCode: '327',
          AreaName: '新屋區',
          AreaEngName: 'Xinwu Dist.',
          checked: false,
        },
        {
          ZipCode: '328',
          AreaName: '觀音區',
          AreaEngName: 'Guanyin Dist.',
          checked: false,
        },
        {
          ZipCode: '330',
          AreaName: '桃園區',
          AreaEngName: 'Taoyuan Dist.',
          checked: false,
        },
        {
          ZipCode: '333',
          AreaName: '龜山區',
          AreaEngName: 'Guishan Dist.',
          checked: false,
        },
        {
          ZipCode: '334',
          AreaName: '八德區',
          AreaEngName: 'Bade Dist.',
          checked: false,
        },
        {
          ZipCode: '335',
          AreaName: '大溪區',
          AreaEngName: 'Daxi Dist.',
          checked: false,
        },
        {
          ZipCode: '336',
          AreaName: '復興區',
          AreaEngName: 'Fuxing Dist.',
          checked: false,
        },
        {
          ZipCode: '337',
          AreaName: '大園區',
          AreaEngName: 'Dayuan Dist.',
          checked: false,
        },
        {
          ZipCode: '338',
          AreaName: '蘆竹區',
          AreaEngName: 'Luzhu Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '苗栗縣',
      CityEngName: 'Miaoli County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '350',
          AreaName: '竹南鎮',
          AreaEngName: 'Zhunan Township',
          checked: false,
        },
        {
          ZipCode: '351',
          AreaName: '頭份市',
          AreaEngName: 'Toufen City',
          checked: false,
        },
        {
          ZipCode: '352',
          AreaName: '三灣鄉',
          AreaEngName: 'Sanwan Township',
          checked: false,
        },
        {
          ZipCode: '353',
          AreaName: '南庄鄉',
          AreaEngName: 'Nanzhuang Township',
          checked: false,
        },
        {
          ZipCode: '354',
          AreaName: '獅潭鄉',
          AreaEngName: 'Shitan Township',
          checked: false,
        },
        {
          ZipCode: '356',
          AreaName: '後龍鎮',
          AreaEngName: 'Houlong Township',
          checked: false,
        },
        {
          ZipCode: '357',
          AreaName: '通霄鎮',
          AreaEngName: 'Tongxiao Township',
          checked: false,
        },
        {
          ZipCode: '358',
          AreaName: '苑裡鎮',
          AreaEngName: 'Yuanli Township',
          checked: false,
        },
        {
          ZipCode: '360',
          AreaName: '苗栗市',
          AreaEngName: 'Miaoli City',
          checked: false,
        },
        {
          ZipCode: '361',
          AreaName: '造橋鄉',
          AreaEngName: 'Zaoqiao Township',
          checked: false,
        },
        {
          ZipCode: '362',
          AreaName: '頭屋鄉',
          AreaEngName: 'Touwu Township',
          checked: false,
        },
        {
          ZipCode: '363',
          AreaName: '公館鄉',
          AreaEngName: 'Gongguan Township',
          checked: false,
        },
        {
          ZipCode: '364',
          AreaName: '大湖鄉',
          AreaEngName: 'Dahu Township',
          checked: false,
        },
        {
          ZipCode: '365',
          AreaName: '泰安鄉',
          AreaEngName: 'Tai’an Township',
          checked: false,
        },
        {
          ZipCode: '366',
          AreaName: '銅鑼鄉',
          AreaEngName: 'Tongluo Township',
          checked: false,
        },
        {
          ZipCode: '367',
          AreaName: '三義鄉',
          AreaEngName: 'Sanyi Township',
          checked: false,
        },
        {
          ZipCode: '368',
          AreaName: '西湖鄉',
          AreaEngName: 'Xihu Township',
          checked: false,
        },
        {
          ZipCode: '369',
          AreaName: '卓蘭鎮',
          AreaEngName: 'Zhuolan Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '臺中市',
      CityEngName: 'Taichung City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '400',
          AreaName: '中區',
          AreaEngName: 'Central Dist.',
          checked: false,
        },
        {
          ZipCode: '401',
          AreaName: '東區',
          AreaEngName: 'East Dist.',
          checked: false,
        },
        {
          ZipCode: '402',
          AreaName: '南區',
          AreaEngName: 'South Dist.',
          checked: false,
        },
        {
          ZipCode: '403',
          AreaName: '西區',
          AreaEngName: 'West Dist.',
          checked: false,
        },
        {
          ZipCode: '404',
          AreaName: '北區',
          AreaEngName: 'North Dist.',
          checked: false,
        },
        {
          ZipCode: '406',
          AreaName: '北屯區',
          AreaEngName: 'Beitun Dist.',
          checked: false,
        },
        {
          ZipCode: '407',
          AreaName: '西屯區',
          AreaEngName: 'Xitun Dist.',
          checked: false,
        },
        {
          ZipCode: '408',
          AreaName: '南屯區',
          AreaEngName: 'Nantun Dist.',
          checked: false,
        },
        {
          ZipCode: '411',
          AreaName: '太平區',
          AreaEngName: 'Taiping Dist.',
          checked: false,
        },
        {
          ZipCode: '412',
          AreaName: '大里區',
          AreaEngName: 'Dali Dist.',
          checked: false,
        },
        {
          ZipCode: '413',
          AreaName: '霧峰區',
          AreaEngName: 'Wufeng Dist.',
          checked: false,
        },
        {
          ZipCode: '414',
          AreaName: '烏日區',
          AreaEngName: 'Wuri Dist.',
          checked: false,
        },
        {
          ZipCode: '420',
          AreaName: '豐原區',
          AreaEngName: 'Fengyuan Dist.',
          checked: false,
        },
        {
          ZipCode: '421',
          AreaName: '后里區',
          AreaEngName: 'Houli Dist.',
          checked: false,
        },
        {
          ZipCode: '422',
          AreaName: '石岡區',
          AreaEngName: 'Shigang Dist.',
          checked: false,
        },
        {
          ZipCode: '423',
          AreaName: '東勢區',
          AreaEngName: 'Dongshi Dist.',
          checked: false,
        },
        {
          ZipCode: '424',
          AreaName: '和平區',
          AreaEngName: 'Heping Dist.',
          checked: false,
        },
        {
          ZipCode: '426',
          AreaName: '新社區',
          AreaEngName: 'Xinshe Dist.',
          checked: false,
        },
        {
          ZipCode: '427',
          AreaName: '潭子區',
          AreaEngName: 'Tanzi Dist.',
          checked: false,
        },
        {
          ZipCode: '428',
          AreaName: '大雅區',
          AreaEngName: 'Daya Dist.',
          checked: false,
        },
        {
          ZipCode: '429',
          AreaName: '神岡區',
          AreaEngName: 'Shengang Dist.',
          checked: false,
        },
        {
          ZipCode: '432',
          AreaName: '大肚區',
          AreaEngName: 'Dadu Dist.',
          checked: false,
        },
        {
          ZipCode: '433',
          AreaName: '沙鹿區',
          AreaEngName: 'Shalu Dist.',
          checked: false,
        },
        {
          ZipCode: '434',
          AreaName: '龍井區',
          AreaEngName: 'Longjing Dist.',
          checked: false,
        },
        {
          ZipCode: '435',
          AreaName: '梧棲區',
          AreaEngName: 'Wuqi Dist.',
          checked: false,
        },
        {
          ZipCode: '436',
          AreaName: '清水區',
          AreaEngName: 'Qingshui Dist.',
          checked: false,
        },
        {
          ZipCode: '437',
          AreaName: '大甲區',
          AreaEngName: 'Dajia Dist.',
          checked: false,
        },
        {
          ZipCode: '438',
          AreaName: '外埔區',
          AreaEngName: 'Waipu Dist.',
          checked: false,
        },
        {
          ZipCode: '439',
          AreaName: '大安區',
          AreaEngName: 'Da’an Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '彰化縣',
      CityEngName: 'Changhua County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '500',
          AreaName: '彰化市',
          AreaEngName: 'Changhua City',
          checked: false,
        },
        {
          ZipCode: '502',
          AreaName: '芬園鄉',
          AreaEngName: 'Fenyuan Township',
          checked: false,
        },
        {
          ZipCode: '503',
          AreaName: '花壇鄉',
          AreaEngName: 'Huatan Township',
          checked: false,
        },
        {
          ZipCode: '504',
          AreaName: '秀水鄉',
          AreaEngName: 'Xiushui Township',
          checked: false,
        },
        {
          ZipCode: '505',
          AreaName: '鹿港鎮',
          AreaEngName: 'Lukang Township',
          checked: false,
        },
        {
          ZipCode: '506',
          AreaName: '福興鄉',
          AreaEngName: 'Fuxing Township',
          checked: false,
        },
        {
          ZipCode: '507',
          AreaName: '線西鄉',
          AreaEngName: 'Xianxi Township',
          checked: false,
        },
        {
          ZipCode: '508',
          AreaName: '和美鎮',
          AreaEngName: 'Hemei Township',
          checked: false,
        },
        {
          ZipCode: '509',
          AreaName: '伸港鄉',
          AreaEngName: 'Shengang Township',
          checked: false,
        },
        {
          ZipCode: '510',
          AreaName: '員林市',
          AreaEngName: 'Yuanlin City',
          checked: false,
        },
        {
          ZipCode: '511',
          AreaName: '社頭鄉',
          AreaEngName: 'Shetou Township',
          checked: false,
        },
        {
          ZipCode: '512',
          AreaName: '永靖鄉',
          AreaEngName: 'Yongjing Township',
          checked: false,
        },
        {
          ZipCode: '513',
          AreaName: '埔心鄉',
          AreaEngName: 'Puxin Township',
          checked: false,
        },
        {
          ZipCode: '514',
          AreaName: '溪湖鎮',
          AreaEngName: 'Xihu Township',
          checked: false,
        },
        {
          ZipCode: '515',
          AreaName: '大村鄉',
          AreaEngName: 'Dacun Township',
          checked: false,
        },
        {
          ZipCode: '516',
          AreaName: '埔鹽鄉',
          AreaEngName: 'Puyan Township',
          checked: false,
        },
        {
          ZipCode: '520',
          AreaName: '田中鎮',
          AreaEngName: 'Tianzhong Township',
          checked: false,
        },
        {
          ZipCode: '521',
          AreaName: '北斗鎮',
          AreaEngName: 'Beidou Township',
          checked: false,
        },
        {
          ZipCode: '522',
          AreaName: '田尾鄉',
          AreaEngName: 'Tianwei Township',
          checked: false,
        },
        {
          ZipCode: '523',
          AreaName: '埤頭鄉',
          AreaEngName: 'Pitou Township',
          checked: false,
        },
        {
          ZipCode: '524',
          AreaName: '溪州鄉',
          AreaEngName: 'Xizhou Township',
          checked: false,
        },
        {
          ZipCode: '525',
          AreaName: '竹塘鄉',
          AreaEngName: 'Zhutang Township',
          checked: false,
        },
        {
          ZipCode: '526',
          AreaName: '二林鎮',
          AreaEngName: 'Erlin Township',
          checked: false,
        },
        {
          ZipCode: '527',
          AreaName: '大城鄉',
          AreaEngName: 'Dacheng Township',
          checked: false,
        },
        {
          ZipCode: '528',
          AreaName: '芳苑鄉',
          AreaEngName: 'Fangyuan Township',
          checked: false,
        },
        {
          ZipCode: '530',
          AreaName: '二水鄉',
          AreaEngName: 'Ershui Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '南投縣',
      CityEngName: 'Nantou County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '540',
          AreaName: '南投市',
          AreaEngName: 'Nantou City',
          checked: false,
        },
        {
          ZipCode: '541',
          AreaName: '中寮鄉',
          AreaEngName: 'Zhongliao Township',
          checked: false,
        },
        {
          ZipCode: '542',
          AreaName: '草屯鎮',
          AreaEngName: 'Caotun Township',
          checked: false,
        },
        {
          ZipCode: '544',
          AreaName: '國姓鄉',
          AreaEngName: 'Guoxing Township',
          checked: false,
        },
        {
          ZipCode: '545',
          AreaName: '埔里鎮',
          AreaEngName: 'Puli Township',
          checked: false,
        },
        {
          ZipCode: '546',
          AreaName: '仁愛鄉',
          AreaEngName: 'Ren’ai Township',
          checked: false,
        },
        {
          ZipCode: '551',
          AreaName: '名間鄉',
          AreaEngName: 'Mingjian Township',
          checked: false,
        },
        {
          ZipCode: '552',
          AreaName: '集集鎮',
          AreaEngName: 'Jiji Township',
          checked: false,
        },
        {
          ZipCode: '553',
          AreaName: '水里鄉',
          AreaEngName: 'Shuili Township',
          checked: false,
        },
        {
          ZipCode: '555',
          AreaName: '魚池鄉',
          AreaEngName: 'Yuchi Township',
          checked: false,
        },
        {
          ZipCode: '556',
          AreaName: '信義鄉',
          AreaEngName: 'Xinyi Township',
          checked: false,
        },
        {
          ZipCode: '557',
          AreaName: '竹山鎮',
          AreaEngName: 'Zhushan Township',
          checked: false,
        },
        {
          ZipCode: '558',
          AreaName: '鹿谷鄉',
          AreaEngName: 'Lugu Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '嘉義市',
      CityEngName: 'Chiayi City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '600',
          AreaName: '西區',
          AreaEngName: 'West Dist.',
          checked: false,
        },
        {
          ZipCode: '600',
          AreaName: '東區',
          AreaEngName: 'East Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '嘉義縣',
      CityEngName: 'Chiayi County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '602',
          AreaName: '番路鄉',
          AreaEngName: 'Fanlu Township',
          checked: false,
        },
        {
          ZipCode: '603',
          AreaName: '梅山鄉',
          AreaEngName: 'Meishan Township',
          checked: false,
        },
        {
          ZipCode: '604',
          AreaName: '竹崎鄉',
          AreaEngName: 'Zhuqi Township',
          checked: false,
        },
        {
          ZipCode: '605',
          AreaName: '阿里山鄉',
          AreaEngName: 'Alishan Township',
          checked: false,
        },
        {
          ZipCode: '606',
          AreaName: '中埔鄉',
          AreaEngName: 'Zhongpu Township',
          checked: false,
        },
        {
          ZipCode: '607',
          AreaName: '大埔鄉',
          AreaEngName: 'Dapu Township',
          checked: false,
        },
        {
          ZipCode: '608',
          AreaName: '水上鄉',
          AreaEngName: 'Shuishang Township',
          checked: false,
        },
        {
          ZipCode: '611',
          AreaName: '鹿草鄉',
          AreaEngName: 'Lucao Township',
          checked: false,
        },
        {
          ZipCode: '612',
          AreaName: '太保市',
          AreaEngName: 'Taibao City',
          checked: false,
        },
        {
          ZipCode: '613',
          AreaName: '朴子市',
          AreaEngName: 'Puzi City',
          checked: false,
        },
        {
          ZipCode: '614',
          AreaName: '東石鄉',
          AreaEngName: 'Dongshi Township',
          checked: false,
        },
        {
          ZipCode: '615',
          AreaName: '六腳鄉',
          AreaEngName: 'Liujiao Township',
          checked: false,
        },
        {
          ZipCode: '616',
          AreaName: '新港鄉',
          AreaEngName: 'Xingang Township',
          checked: false,
        },
        {
          ZipCode: '621',
          AreaName: '民雄鄉',
          AreaEngName: 'Minxiong Township',
          checked: false,
        },
        {
          ZipCode: '622',
          AreaName: '大林鎮',
          AreaEngName: 'Dalin Township',
          checked: false,
        },
        {
          ZipCode: '623',
          AreaName: '溪口鄉',
          AreaEngName: 'Xikou Township',
          checked: false,
        },
        {
          ZipCode: '624',
          AreaName: '義竹鄉',
          AreaEngName: 'Yizhu Township',
          checked: false,
        },
        {
          ZipCode: '625',
          AreaName: '布袋鎮',
          AreaEngName: 'Budai Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '雲林縣',
      CityEngName: 'Yunlin County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '630',
          AreaName: '斗南鎮',
          AreaEngName: 'Dounan Township',
          checked: false,
        },
        {
          ZipCode: '631',
          AreaName: '大埤鄉',
          AreaEngName: 'Dapi Township',
          checked: false,
        },
        {
          ZipCode: '632',
          AreaName: '虎尾鎮',
          AreaEngName: 'Huwei Township',
          checked: false,
        },
        {
          ZipCode: '633',
          AreaName: '土庫鎮',
          AreaEngName: 'Tuku Township',
          checked: false,
        },
        {
          ZipCode: '634',
          AreaName: '褒忠鄉',
          AreaEngName: 'Baozhong Township',
          checked: false,
        },
        {
          ZipCode: '635',
          AreaName: '東勢鄉',
          AreaEngName: 'Dongshi Township',
          checked: false,
        },
        {
          ZipCode: '636',
          AreaName: '臺西鄉',
          AreaEngName: 'Taixi Township',
          checked: false,
        },
        {
          ZipCode: '637',
          AreaName: '崙背鄉',
          AreaEngName: 'Lunbei Township',
          checked: false,
        },
        {
          ZipCode: '638',
          AreaName: '麥寮鄉',
          AreaEngName: 'Mailiao Township',
          checked: false,
        },
        {
          ZipCode: '640',
          AreaName: '斗六市',
          AreaEngName: 'Douliu City',
          checked: false,
        },
        {
          ZipCode: '643',
          AreaName: '林內鄉',
          AreaEngName: 'Linnei Township',
          checked: false,
        },
        {
          ZipCode: '646',
          AreaName: '古坑鄉',
          AreaEngName: 'Gukeng Township',
          checked: false,
        },
        {
          ZipCode: '647',
          AreaName: '莿桐鄉',
          AreaEngName: 'Citong Township',
          checked: false,
        },
        {
          ZipCode: '648',
          AreaName: '西螺鎮',
          AreaEngName: 'Xiluo Township',
          checked: false,
        },
        {
          ZipCode: '649',
          AreaName: '二崙鄉',
          AreaEngName: 'Erlun Township',
          checked: false,
        },
        {
          ZipCode: '651',
          AreaName: '北港鎮',
          AreaEngName: 'Beigang Township',
          checked: false,
        },
        {
          ZipCode: '652',
          AreaName: '水林鄉',
          AreaEngName: 'Shuilin Township',
          checked: false,
        },
        {
          ZipCode: '653',
          AreaName: '口湖鄉',
          AreaEngName: 'Kouhu Township',
          checked: false,
        },
        {
          ZipCode: '654',
          AreaName: '四湖鄉',
          AreaEngName: 'Sihu Township',
          checked: false,
        },
        {
          ZipCode: '655',
          AreaName: '元長鄉',
          AreaEngName: 'Yuanchang Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '臺南市',
      CityEngName: 'Tainan City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '700',
          AreaName: '中西區',
          AreaEngName: 'West Central Dist.',
          checked: false,
        },
        {
          ZipCode: '701',
          AreaName: '東區',
          AreaEngName: 'East Dist.',
          checked: false,
        },
        {
          ZipCode: '702',
          AreaName: '南區',
          AreaEngName: 'South Dist.',
          checked: false,
        },
        {
          ZipCode: '704',
          AreaName: '北區',
          AreaEngName: 'North Dist.',
          checked: false,
        },
        {
          ZipCode: '708',
          AreaName: '安平區',
          AreaEngName: 'Anping Dist.',
          checked: false,
        },
        {
          ZipCode: '709',
          AreaName: '安南區',
          AreaEngName: 'Annan Dist.',
          checked: false,
        },
        {
          ZipCode: '710',
          AreaName: '永康區',
          AreaEngName: 'Yongkang Dist.',
          checked: false,
        },
        {
          ZipCode: '711',
          AreaName: '歸仁區',
          AreaEngName: 'Guiren Dist.',
          checked: false,
        },
        {
          ZipCode: '712',
          AreaName: '新化區',
          AreaEngName: 'Xinhua Dist.',
          checked: false,
        },
        {
          ZipCode: '713',
          AreaName: '左鎮區',
          AreaEngName: 'Zuozhen Dist.',
          checked: false,
        },
        {
          ZipCode: '714',
          AreaName: '玉井區',
          AreaEngName: 'Yujing Dist.',
          checked: false,
        },
        {
          ZipCode: '715',
          AreaName: '楠西區',
          AreaEngName: 'Nanxi Dist.',
          checked: false,
        },
        {
          ZipCode: '716',
          AreaName: '南化區',
          AreaEngName: 'Nanhua Dist.',
          checked: false,
        },
        {
          ZipCode: '717',
          AreaName: '仁德區',
          AreaEngName: 'Rende Dist.',
          checked: false,
        },
        {
          ZipCode: '718',
          AreaName: '關廟區',
          AreaEngName: 'Guanmiao Dist.',
          checked: false,
        },
        {
          ZipCode: '719',
          AreaName: '龍崎區',
          AreaEngName: 'Longqi Dist.',
          checked: false,
        },
        {
          ZipCode: '720',
          AreaName: '官田區',
          AreaEngName: 'Guantian Dist.',
          checked: false,
        },
        {
          ZipCode: '721',
          AreaName: '麻豆區',
          AreaEngName: 'Madou Dist.',
          checked: false,
        },
        {
          ZipCode: '722',
          AreaName: '佳里區',
          AreaEngName: 'Jiali Dist.',
          checked: false,
        },
        {
          ZipCode: '723',
          AreaName: '西港區',
          AreaEngName: 'Xigang Dist.',
          checked: false,
        },
        {
          ZipCode: '724',
          AreaName: '七股區',
          AreaEngName: 'Qigu Dist.',
          checked: false,
        },
        {
          ZipCode: '725',
          AreaName: '將軍區',
          AreaEngName: 'Jiangjun Dist.',
          checked: false,
        },
        {
          ZipCode: '726',
          AreaName: '學甲區',
          AreaEngName: 'Xuejia Dist.',
          checked: false,
        },
        {
          ZipCode: '727',
          AreaName: '北門區',
          AreaEngName: 'Beimen Dist.',
          checked: false,
        },
        {
          ZipCode: '730',
          AreaName: '新營區',
          AreaEngName: 'Xinying Dist.',
          checked: false,
        },
        {
          ZipCode: '731',
          AreaName: '後壁區',
          AreaEngName: 'Houbi Dist.',
          checked: false,
        },
        {
          ZipCode: '732',
          AreaName: '白河區',
          AreaEngName: 'Baihe Dist.',
          checked: false,
        },
        {
          ZipCode: '733',
          AreaName: '東山區',
          AreaEngName: 'Dongshan Dist.',
          checked: false,
        },
        {
          ZipCode: '734',
          AreaName: '六甲區',
          AreaEngName: 'Liujia Dist.',
          checked: false,
        },
        {
          ZipCode: '735',
          AreaName: '下營區',
          AreaEngName: 'Xiaying Dist.',
          checked: false,
        },
        {
          ZipCode: '736',
          AreaName: '柳營區',
          AreaEngName: 'Liuying Dist.',
          checked: false,
        },
        {
          ZipCode: '737',
          AreaName: '鹽水區',
          AreaEngName: 'Yanshui Dist.',
          checked: false,
        },
        {
          ZipCode: '741',
          AreaName: '善化區',
          AreaEngName: 'Shanhua Dist.',
          checked: false,
        },
        {
          ZipCode: '744',
          AreaName: '新市區',
          AreaEngName: 'Xinshi Dist.',
          checked: false,
        },
        {
          ZipCode: '742',
          AreaName: '大內區',
          AreaEngName: 'Danei Dist.',
          checked: false,
        },
        {
          ZipCode: '743',
          AreaName: '山上區',
          AreaEngName: 'Shanshang Dist.',
          checked: false,
        },
        {
          ZipCode: '745',
          AreaName: '安定區',
          AreaEngName: 'Anding Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '高雄市',
      CityEngName: 'Kaohsiung City',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '800',
          AreaName: '新興區',
          AreaEngName: 'Xinxing Dist.',
          checked: false,
        },
        {
          ZipCode: '801',
          AreaName: '前金區',
          AreaEngName: 'Qianjin Dist.',
          checked: false,
        },
        {
          ZipCode: '802',
          AreaName: '苓雅區',
          AreaEngName: 'Lingya Dist.',
          checked: false,
        },
        {
          ZipCode: '803',
          AreaName: '鹽埕區',
          AreaEngName: 'Yancheng Dist.',
          checked: false,
        },
        {
          ZipCode: '804',
          AreaName: '鼓山區',
          AreaEngName: 'Gushan Dist.',
          checked: false,
        },
        {
          ZipCode: '805',
          AreaName: '旗津區',
          AreaEngName: 'Qijin Dist.',
          checked: false,
        },
        {
          ZipCode: '806',
          AreaName: '前鎮區',
          AreaEngName: 'Qianzhen Dist.',
          checked: false,
        },
        {
          ZipCode: '807',
          AreaName: '三民區',
          AreaEngName: 'Sanmin Dist.',
          checked: false,
        },
        {
          ZipCode: '811',
          AreaName: '楠梓區',
          AreaEngName: 'Nanzi Dist.',
          checked: false,
        },
        {
          ZipCode: '812',
          AreaName: '小港區',
          AreaEngName: 'Xiaogang Dist.',
          checked: false,
        },
        {
          ZipCode: '813',
          AreaName: '左營區',
          AreaEngName: 'Zuoying Dist.',
          checked: false,
        },
        {
          ZipCode: '814',
          AreaName: '仁武區',
          AreaEngName: 'Renwu Dist.',
          checked: false,
        },
        {
          ZipCode: '815',
          AreaName: '大社區',
          AreaEngName: 'Dashe Dist.',
          checked: false,
        },
        {
          ZipCode: '820',
          AreaName: '岡山區',
          AreaEngName: 'Gangshan Dist.',
          checked: false,
        },
        {
          ZipCode: '821',
          AreaName: '路竹區',
          AreaEngName: 'Luzhu Dist.',
          checked: false,
        },
        {
          ZipCode: '822',
          AreaName: '阿蓮區',
          AreaEngName: 'Alian Dist.',
          checked: false,
        },
        {
          ZipCode: '823',
          AreaName: '田寮區',
          AreaEngName: 'Tianliao Dist.',
          checked: false,
        },
        {
          ZipCode: '824',
          AreaName: '燕巢區',
          AreaEngName: 'Yanchao Dist.',
          checked: false,
        },
        {
          ZipCode: '825',
          AreaName: '橋頭區',
          AreaEngName: 'Qiaotou Dist.',
          checked: false,
        },
        {
          ZipCode: '826',
          AreaName: '梓官區',
          AreaEngName: 'Ziguan Dist.',
          checked: false,
        },
        {
          ZipCode: '827',
          AreaName: '彌陀區',
          AreaEngName: 'Mituo Dist.',
          checked: false,
        },
        {
          ZipCode: '828',
          AreaName: '永安區',
          AreaEngName: 'Yong’an Dist.',
          checked: false,
        },
        {
          ZipCode: '829',
          AreaName: '湖內區',
          AreaEngName: 'Hunei Dist.',
          checked: false,
        },
        {
          ZipCode: '830',
          AreaName: '鳳山區',
          AreaEngName: 'Fengshan Dist.',
          checked: false,
        },
        {
          ZipCode: '831',
          AreaName: '大寮區',
          AreaEngName: 'Daliao Dist.',
          checked: false,
        },
        {
          ZipCode: '832',
          AreaName: '林園區',
          AreaEngName: 'Linyuan Dist.',
          checked: false,
        },
        {
          ZipCode: '833',
          AreaName: '鳥松區',
          AreaEngName: 'Niaosong Dist.',
          checked: false,
        },
        {
          ZipCode: '840',
          AreaName: '大樹區',
          AreaEngName: 'Dashu Dist.',
          checked: false,
        },
        {
          ZipCode: '842',
          AreaName: '旗山區',
          AreaEngName: 'Qishan Dist.',
          checked: false,
        },
        {
          ZipCode: '843',
          AreaName: '美濃區',
          AreaEngName: 'Meinong Dist.',
          checked: false,
        },
        {
          ZipCode: '844',
          AreaName: '六龜區',
          AreaEngName: 'Liugui Dist.',
          checked: false,
        },
        {
          ZipCode: '845',
          AreaName: '內門區',
          AreaEngName: 'Neimen Dist.',
          checked: false,
        },
        {
          ZipCode: '846',
          AreaName: '杉林區',
          AreaEngName: 'Shanlin Dist.',
          checked: false,
        },
        {
          ZipCode: '847',
          AreaName: '甲仙區',
          AreaEngName: 'Jiaxian Dist.',
          checked: false,
        },
        {
          ZipCode: '848',
          AreaName: '桃源區',
          AreaEngName: 'Taoyuan Dist.',
          checked: false,
        },
        {
          ZipCode: '849',
          AreaName: '那瑪夏區',
          AreaEngName: 'Namaxia Dist.',
          checked: false,
        },
        {
          ZipCode: '851',
          AreaName: '茂林區',
          AreaEngName: 'Maolin Dist.',
          checked: false,
        },
        {
          ZipCode: '852',
          AreaName: '茄萣區',
          AreaEngName: 'Qieding Dist.',
          checked: false,
        },
      ],
    },
    {
      CityName: '澎湖縣',
      CityEngName: 'Penghu County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '880',
          AreaName: '馬公市',
          AreaEngName: 'Magong City',
          checked: false,
        },
        {
          ZipCode: '881',
          AreaName: '西嶼鄉',
          AreaEngName: 'Xiyu Township',
          checked: false,
        },
        {
          ZipCode: '882',
          AreaName: '望安鄉',
          AreaEngName: 'Wang’an Township',
          checked: false,
        },
        {
          ZipCode: '883',
          AreaName: '七美鄉',
          AreaEngName: 'Qimei Township',
          checked: false,
        },
        {
          ZipCode: '884',
          AreaName: '白沙鄉',
          AreaEngName: 'Baisha Township',
          checked: false,
        },
        {
          ZipCode: '885',
          AreaName: '湖西鄉',
          AreaEngName: 'Huxi Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '金門縣',
      CityEngName: 'Kinmen County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '890',
          AreaName: '金沙鎮',
          AreaEngName: 'Jinsha Township',
          checked: false,
        },
        {
          ZipCode: '891',
          AreaName: '金湖鎮',
          AreaEngName: 'Jinhu Township',
          checked: false,
        },
        {
          ZipCode: '892',
          AreaName: '金寧鄉',
          AreaEngName: 'Jinning Township',
          checked: false,
        },
        {
          ZipCode: '893',
          AreaName: '金城鎮',
          AreaEngName: 'Jincheng Township',
          checked: false,
        },
        {
          ZipCode: '894',
          AreaName: '烈嶼鄉',
          AreaEngName: 'Lieyu Township',
          checked: false,
        },
        {
          ZipCode: '896',
          AreaName: '烏坵鄉',
          AreaEngName: 'Wuqiu Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '屏東縣',
      CityEngName: 'Pingtung County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '900',
          AreaName: '屏東市',
          AreaEngName: 'Pingtung City',
          checked: false,
        },
        {
          ZipCode: '901',
          AreaName: '三地門鄉',
          AreaEngName: 'Sandimen Township',
          checked: false,
        },
        {
          ZipCode: '902',
          AreaName: '霧臺鄉',
          AreaEngName: 'Wutai Township',
          checked: false,
        },
        {
          ZipCode: '903',
          AreaName: '瑪家鄉',
          AreaEngName: 'Majia Township',
          checked: false,
        },
        {
          ZipCode: '904',
          AreaName: '九如鄉',
          AreaEngName: 'Jiuru Township',
          checked: false,
        },
        {
          ZipCode: '905',
          AreaName: '里港鄉',
          AreaEngName: 'Ligang Township',
          checked: false,
        },
        {
          ZipCode: '906',
          AreaName: '高樹鄉',
          AreaEngName: 'Gaoshu Township',
          checked: false,
        },
        {
          ZipCode: '907',
          AreaName: '鹽埔鄉',
          AreaEngName: 'Yanpu Township',
          checked: false,
        },
        {
          ZipCode: '908',
          AreaName: '長治鄉',
          AreaEngName: 'Changzhi Township',
          checked: false,
        },
        {
          ZipCode: '909',
          AreaName: '麟洛鄉',
          AreaEngName: 'Linluo Township',
          checked: false,
        },
        {
          ZipCode: '911',
          AreaName: '竹田鄉',
          AreaEngName: 'Zhutian Township',
          checked: false,
        },
        {
          ZipCode: '912',
          AreaName: '內埔鄉',
          AreaEngName: 'Neipu Township',
          checked: false,
        },
        {
          ZipCode: '913',
          AreaName: '萬丹鄉',
          AreaEngName: 'Wandan Township',
          checked: false,
        },
        {
          ZipCode: '920',
          AreaName: '潮州鎮',
          AreaEngName: 'Chaozhou Township',
          checked: false,
        },
        {
          ZipCode: '921',
          AreaName: '泰武鄉',
          AreaEngName: 'Taiwu Township',
          checked: false,
        },
        {
          ZipCode: '922',
          AreaName: '來義鄉',
          AreaEngName: 'Laiyi Township',
          checked: false,
        },
        {
          ZipCode: '923',
          AreaName: '萬巒鄉',
          AreaEngName: 'Wanluan Township',
          checked: false,
        },
        {
          ZipCode: '924',
          AreaName: '崁頂鄉',
          AreaEngName: 'Kanding Township',
          checked: false,
        },
        {
          ZipCode: '925',
          AreaName: '新埤鄉',
          AreaEngName: 'Xinpi Township',
          checked: false,
        },
        {
          ZipCode: '926',
          AreaName: '南州鄉',
          AreaEngName: 'Nanzhou Township',
          checked: false,
        },
        {
          ZipCode: '927',
          AreaName: '林邊鄉',
          AreaEngName: 'Linbian Township',
          checked: false,
        },
        {
          ZipCode: '928',
          AreaName: '東港鎮',
          AreaEngName: 'Donggang Township',
          checked: false,
        },
        {
          ZipCode: '929',
          AreaName: '琉球鄉',
          AreaEngName: 'Liuqiu Township',
          checked: false,
        },
        {
          ZipCode: '931',
          AreaName: '佳冬鄉',
          AreaEngName: 'Jiadong Township',
          checked: false,
        },
        {
          ZipCode: '932',
          AreaName: '新園鄉',
          AreaEngName: 'Xinyuan Township',
          checked: false,
        },
        {
          ZipCode: '940',
          AreaName: '枋寮鄉',
          AreaEngName: 'Fangliao Township',
          checked: false,
        },
        {
          ZipCode: '941',
          AreaName: '枋山鄉',
          AreaEngName: 'Fangshan Township',
          checked: false,
        },
        {
          ZipCode: '942',
          AreaName: '春日鄉',
          AreaEngName: 'Chunri Township',
          checked: false,
        },
        {
          ZipCode: '943',
          AreaName: '獅子鄉',
          AreaEngName: 'Shizi Township',
          checked: false,
        },
        {
          ZipCode: '944',
          AreaName: '車城鄉',
          AreaEngName: 'Checheng Township',
          checked: false,
        },
        {
          ZipCode: '945',
          AreaName: '牡丹鄉',
          AreaEngName: 'Mudan Township',
          checked: false,
        },
        {
          ZipCode: '946',
          AreaName: '恆春鎮',
          AreaEngName: 'Hengchun Township',
          checked: false,
        },
        {
          ZipCode: '947',
          AreaName: '滿州鄉',
          AreaEngName: 'Manzhou Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '臺東縣',
      CityEngName: 'Taitung County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '950',
          AreaName: '臺東市',
          AreaEngName: 'Taitung City',
          checked: false,
        },
        {
          ZipCode: '951',
          AreaName: '綠島鄉',
          AreaEngName: 'Ludao Township',
          checked: false,
        },
        {
          ZipCode: '952',
          AreaName: '蘭嶼鄉',
          AreaEngName: 'Lanyu Township',
          checked: false,
        },
        {
          ZipCode: '953',
          AreaName: '延平鄉',
          AreaEngName: 'Yanping Township',
          checked: false,
        },
        {
          ZipCode: '954',
          AreaName: '卑南鄉',
          AreaEngName: 'Beinan Township',
          checked: false,
        },
        {
          ZipCode: '955',
          AreaName: '鹿野鄉',
          AreaEngName: 'Luye Township',
          checked: false,
        },
        {
          ZipCode: '956',
          AreaName: '關山鎮',
          AreaEngName: 'Guanshan Township',
          checked: false,
        },
        {
          ZipCode: '957',
          AreaName: '海端鄉',
          AreaEngName: 'Haiduan Township',
          checked: false,
        },
        {
          ZipCode: '958',
          AreaName: '池上鄉',
          AreaEngName: 'Chishang Township',
          checked: false,
        },
        {
          ZipCode: '959',
          AreaName: '東河鄉',
          AreaEngName: 'Donghe Township',
          checked: false,
        },
        {
          ZipCode: '961',
          AreaName: '成功鎮',
          AreaEngName: 'Chenggong Township',
          checked: false,
        },
        {
          ZipCode: '962',
          AreaName: '長濱鄉',
          AreaEngName: 'Changbin Township',
          checked: false,
        },
        {
          ZipCode: '963',
          AreaName: '太麻里鄉',
          AreaEngName: 'Taimali Township',
          checked: false,
        },
        {
          ZipCode: '964',
          AreaName: '金峰鄉',
          AreaEngName: 'Jinfeng Township',
          checked: false,
        },
        {
          ZipCode: '965',
          AreaName: '大武鄉',
          AreaEngName: 'Dawu Township',
          checked: false,
        },
        {
          ZipCode: '966',
          AreaName: '達仁鄉',
          AreaEngName: 'Daren Township',
          checked: false,
        },
      ],
    },
    {
      CityName: '花蓮縣',
      CityEngName: 'Hualien County',
      checked: false,
      indeterminate: false,
      AreaList: [
        {
          ZipCode: '970',
          AreaName: '花蓮市',
          AreaEngName: 'Hualien City',
          checked: false,
        },
        {
          ZipCode: '971',
          AreaName: '新城鄉',
          AreaEngName: 'Xincheng Township',
          checked: false,
        },
        {
          ZipCode: '972',
          AreaName: '秀林鄉',
          AreaEngName: 'Xiulin Township',
          checked: false,
        },
        {
          ZipCode: '973',
          AreaName: '吉安鄉',
          AreaEngName: 'Ji’an Township',
          checked: false,
        },
        {
          ZipCode: '974',
          AreaName: '壽豐鄉',
          AreaEngName: 'Shoufeng Township',
          checked: false,
        },
        {
          ZipCode: '975',
          AreaName: '鳳林鎮',
          AreaEngName: 'Fenglin Township',
          checked: false,
        },
        {
          ZipCode: '976',
          AreaName: '光復鄉',
          AreaEngName: 'Guangfu Township',
          checked: false,
        },
        {
          ZipCode: '977',
          AreaName: '豐濱鄉',
          AreaEngName: 'Fengbin Township',
          checked: false,
        },
        {
          ZipCode: '978',
          AreaName: '瑞穗鄉',
          AreaEngName: 'Ruisui Township',
          checked: false,
        },
        {
          ZipCode: '979',
          AreaName: '萬榮鄉',
          AreaEngName: 'Wanrong Township',
          checked: false,
        },
        {
          ZipCode: '981',
          AreaName: '玉里鎮',
          AreaEngName: 'Yuli Township',
          checked: false,
        },
        {
          ZipCode: '982',
          AreaName: '卓溪鄉',
          AreaEngName: 'Zhuoxi Township',
          checked: false,
        },
        {
          ZipCode: '983',
          AreaName: '富里鄉',
          AreaEngName: 'Fuli Township',
          checked: false,
        },
      ],
    },
  ];

  constructor() {}

  // 展開List
  expand(index: number) {
    this.expandMenu.push(index);
  }

  // 收合List
  close(index: number) {
    this.expandMenu = this.expandMenu.filter((item) => item !== index);
  }

  // 當選擇城市時觸發
  onCityChecked(cityList: TaiwanCityList) {
    if (this.selectList.includes(cityList.CityName)) {
      // 如果已選擇的區域資料包含該城市，則移除該城市
      // 否則填加該城市
      this.selectList = this.selectList.filter(
        (item) => item !== cityList.CityName
      );
    } else {
      this.selectList.push(cityList.CityName);
    }
    // 如果該城市處於模糊狀態，則將該城市設為全選
    // 設置全選後並移除多餘的區域資料
    cityList.AreaList.forEach((area: AreaList) => {
      if (cityList.indeterminate) {
        this.removeDistrictsByCity(cityList.CityName);
        cityList.indeterminate = false;
        cityList.checked = true;
      }
      // 使區域勾選選項同步於城市勾選選項
      area.checked = cityList.checked;
    });
    this.emitValue();
  }

  // 當選擇區域時觸發
  onAreaChecked(cityList: TaiwanCityList, area: AreaList) {
    // 如果已選擇的區域資料包含該區域，則移除該區域
    // 否則填加該區域
    if (this.selectList.includes(cityList.CityName + area.AreaName)) {
      this.selectList = this.selectList.filter(
        (item) => item !== cityList.CityName + area.AreaName
      );
    } else {
      this.selectList.push(cityList.CityName + area.AreaName);
    }
    // 如果該區域並非全選，則將原本全選的城市取消全選
    cityList.checked = cityList.AreaList.every(
      (area: AreaList) => area.checked
    );
    // 如果城市全選未勾選但有區域被勾選，則將城市設為模糊狀態
    // 否則取消模糊狀態
    if (
      !cityList.checked &&
      cityList.AreaList.some((area: AreaList) => area.checked)
    ) {
      cityList.indeterminate = true;
      cityList.checked = false;
    } else {
      cityList.indeterminate = false;
    }

    this.emitValue();
  }

  // 當城市全選區域後移除區域
  removeDistrictsByCity(city: string) {
    this.selectList = this.selectList.filter((item) => !item.includes(city));
    // 在最後加回城市名稱
    this.selectList.push(city);
  }

  // 清除所有所選的選項
  clearAll() {
    this.selectList = [];
    this.taiwanCityList.forEach((cityList: TaiwanCityList) => {
      cityList.checked = false;
      cityList.indeterminate = false;
      cityList.AreaList.forEach((area: AreaList) => {
        area.checked = false;
      });
    });
    this.emitValue();
  }

  // 更新城市和區域的勾選狀態
  private updateCityAndAreaSelection() {
    this.taiwanCityList.forEach((cityList) => {
      // 檢查該城市是否已被選中
      const citySelected = this.selectList.includes(cityList.CityName);
      cityList.checked = citySelected;
      cityList.indeterminate = false;

      // 如果城市被選中，強制選中所有區域
      cityList.AreaList.forEach((area) => {
        // 如果城市沒被選中，但區域有被選到，則將城市設為模糊狀態
        if (!citySelected && cityList.AreaList.some((area) => area.checked)) {
          cityList.indeterminate = true; // 強制將縣市選擇狀態設為模糊
        }

        // 如果城市被選中，則強制選中所有子區域
        if (citySelected) {
          area.checked = true; // 強制選中所有子區域
        } else {
          area.checked = this.selectList.includes(
            cityList.CityName + area.AreaName
          );
        }
      });
    });
  }

  // 通知父組件表單值已改變
  private emitValue(): void {
    this.onChange(this.selectList);
    this.onTouched();
  }
}
