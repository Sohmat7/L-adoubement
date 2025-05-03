import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, model, signal } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions,  } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-choice',
  imports: [ MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatButtonModule, FormsModule ],
  templateUrl: './caster.component.html',
  styleUrl: './caster.component.css'
})
export class CasterComponent {


  nametest: string | undefined = ''

  dialog = inject(MatDialog);

  openDialog(id: string) {
    this.nametest = document.getElementById(id)?.innerHTML;
    this.dialog.open(ModalComponent, {
      data: {
        name: this.nametest,
      },
      height: '600px',
      width: '1200px',
      maxWidth: '1500px'
    });
  }
}
