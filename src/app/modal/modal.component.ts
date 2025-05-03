import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogContent, MatDialogClose, MAT_DIALOG_DATA, MatDialogActions } from '@angular/material/dialog'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio'
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [MatDialogModule, MatDialogContent, MatDialogClose, MatDialogActions, MatButtonModule, FormsModule, MatDivider, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  data = inject(MAT_DIALOG_DATA);

  readonly labelPosition = model<'before' | 'after'>('after');


}
