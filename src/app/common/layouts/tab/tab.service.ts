import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private closeTabSubject = new Subject<string>();

  closeTab$ = this.closeTabSubject.asObservable();

  closeTab(identifier: string) {
    this.closeTabSubject.next(identifier);
    this.scrollToTop();
  }

  /* scrollBar回到頂部的函式 */
  scrollToTop() {
    const element = document.querySelector('.inner-content');
    if (element) {
      element.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
