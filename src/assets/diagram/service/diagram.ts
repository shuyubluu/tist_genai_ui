import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  constructor() {}

  openDiagramPage() {
    window.location.href = 'assets/diagram/family.html';
  }
}
