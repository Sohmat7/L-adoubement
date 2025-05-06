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
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-player-choice',
  imports: [ MatCard, MatCardHeader, MatCardTitle, MatCardActions, MatButtonModule, FormsModule, RouterLink ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {


  data = [
    "MPT : Les Terres Paysannes à l'Ouest lointain",
    "DC : Un Royaumes de Sages et d'Anciens",
    "HT : Un Clan de Brigands soi-disant retraités",
    "BLS : L'Empire Fleuri",
  ]


  nametest: string | undefined = ''

  dialog = inject(MatDialog);

  openDialog(name: string, id: number) {

    this.dialog.open(ModalComponent, {
      data: {
        name: name,
      },
      height: '900px',
      width: '1500px',
      maxWidth: '1500px'
    });
  }
}
