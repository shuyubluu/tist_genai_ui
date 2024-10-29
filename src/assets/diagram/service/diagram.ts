import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  constructor() {}

  openDiagramPage() {
    window.open('assets/diagram/family.html', '_blank');
  }
}
