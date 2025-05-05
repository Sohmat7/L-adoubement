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
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-player-choice',
  imports: [ MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatButtonModule, FormsModule, RouterLink ],
  templateUrl: './player-choice.component.html',
  styleUrl: './player-choice.component.css'
})
export class PlayerChoiceComponent {


  data = [
    "J'ai fait le site. \n Y'a des bugs mais tranquille",
    'hfisdhofsdjoi',
    "coucou",
    "le boss",
    "re coucou",
    "gyfdhu d zgyde gz gdiz giuydqz ghiudqs huodq shui",
    "La sainte pureté à l’état pur, travailleur, il n’hésitera pas à mettre en application tout ce qu’il sait avec son Harmonie et un bon arsenal de douilles pour chercher la victoire",
    "Un gros fan de Wario et de techs beaucoup trop poussées pour une saucismash, si jamais il joue Falco et qu’il se retrouve avec un gyro dans les mains, gare à vous !"
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
