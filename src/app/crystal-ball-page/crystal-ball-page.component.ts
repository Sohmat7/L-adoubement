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
  selector: 'app-crystal-ball-page',
  standalone: true,
  imports: [ MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatButtonModule, FormsModule ],
  templateUrl: './crystal-ball-page.component.html',
  styleUrl: './crystal-ball-page.component.css'
})
export class CrystalBallPageComponent {


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
