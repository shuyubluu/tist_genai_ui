import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    imports: [
        SharedModule,
        MatDialogModule,
        ButtonComponent
    ]
})
export class ModalComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() button: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.content = data.content;
    this.button = data.button;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    // Trigger the onDeleteClick event handler from the parent component
    this.data.onDeleteClick();
  }
}
