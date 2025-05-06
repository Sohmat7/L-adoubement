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
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {


  data = [
    "J'ai fait le site. \n Y'a des bugs mais tranquille",
    "Faustin \"Rouxblart\" <br><br> Main : Inkling <br><br> Presque meilleur joueur Mario Kart de Lyon (entre top 2 et top 5 mais azy la compétition est dure). N'avait pas conscience que chasser des péd*philes sur clash of clan quand on a 14ans c'est pas une très bonne idée mais c'est quand même vachement drôle. Alterne entre salons privés MWII et Amour Sucré, Lysandre dans mes veines. Inkling m'a donné une carrière sur smash, ne sait pas boo-yah.",
    "coucou",
    "le boss",
    "re coucou",
    "gyfdhu d zgyde gz gdiz giuydqz ghiudqs huodq shui"
  ]




  nametest: string | undefined = ''

  dialog = inject(MatDialog);

  openDialog(name: string, id: number) {

    this.dialog.open(ModalComponent, {
      data: {
        name: name,
        description: this.data[id]
      },
      height: '900px',
      width: '1500px',
      maxWidth: '1500px'
    });
  }
}


