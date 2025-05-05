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
  templateUrl: './coach.component.html',
  styleUrl: './coach.component.css'
})
export class CoachComponent {


  data = [
    "J'ai fait le site. \n Y'a des bugs mais tranquille",
    'hfisdhofsdjoi',
    "coucou",
    "ok bro t es pas drazai",
    "coucou",
    "le boss",
    "Esprit fraternel, Râleur, Passionné, et fan de sa Blonde, il compte bien faire un dernier coup d’éclat avant son envol aux Etats-Unis",
    "Le hidden boss par excellence, Main Sheik mais couteau suisse maîtrisant de nombreux personnages, son hobby, c’est de perdre avec son 45e perso en winner pour éliminer tout ses amis en loser bracket"
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
