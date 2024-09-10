import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class TaiwanCitySelectService {
  private apiUrl_city = 'https://api.nlsc.gov.tw/other/ListCounty';
  private apiUrl_district = 'https://api.nlsc.gov.tw/other/ListTown1/';
  private apiUrl_village = 'https://api.nlsc.gov.tw/other/ListVillage/';

  constructor(private http: HttpClient) {}

  // 用於存放當前所選的城市代碼
  countryCode: string = '';

  // 取得縣市資料
  getCityData(): Observable<any> {
    return new Observable((observer) => {
      this.http
        .get(this.apiUrl_city, { responseType: 'text' })
        .subscribe((xml) => {
          xml2js.parseString(xml, (err, result) => {
            if (err) {
              observer.error(err);
            } else {
              observer.next(result.countyItems.countyItem);
              observer.complete();
            }
          });
        });
    });
  }
  // 取得鄉鎮市區資料
  getDistrictData(countryCode: string): Observable<any> {
    this.countryCode = countryCode;
    return new Observable((observer) => {
      this.http
        .get(this.apiUrl_district + countryCode, { responseType: 'text' })
        .subscribe((result) => {
          observer.next(JSON.parse(result));
          observer.complete();
        });
    });
  }
  // 取得村里資料
  getVillageData(townCode: string): Observable<any> {
    return new Observable((observer) => {
      this.http
        .get(this.apiUrl_village + `${this.countryCode}/${townCode}`, {
          responseType: 'text',
        })
        .subscribe((xml) => {
          xml2js.parseString(xml, (err, result) => {
            if (err) {
              observer.error(err);
            } else {
              observer.next(result.villages.village);
              observer.complete();
            }
          });
        });
    });
  }
}
