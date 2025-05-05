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
    "Jaaj <br> <br> Main : Kazuya. <br> <br> Team : MPT <br> <br> Il a des étoiles dans les yeux depuis la première sd de Daiyamondo et veut devenir comme son idole. Que ce soit avec l’alcool ou ses side B il finira par tomber mais fera tout son possible pour t’emmener avec lui",
    "Tilté <br><br>Main : Falco <br><br> Team : MPT. <br><br> Ça fait un mois qu'il vit pour le jeu, qu'il ne parle plus à sa copine pour ne penser qu'à Smash Bros, qu'il est parti se réfugier au sommet de la cordillère des Andes pour travailler ses combos Falco en toute tranquillité, tout ça pour ne pas 0-2 tel un Stéphanois à la Mitronnade.",
    "Main :  . <br><br> coucou",
    "Main : . <br><br>",
    "Peu2Vertu aka La Gatling des Bouche du Rhône <br> <br> Main : Yoshi / Lucina / Falcon. <br><br> Ex cambrioleur qui a obtenu une réduction de peine après avoir gagné toutes les weeklies de la prison de Marseille",
    "Lucas Ocarno aka La canine de Crachiers <br> <br> Main : Snake / Sephiroth. <br><br> Addict à la ketamine qui se réfugie dans Smash Bros pour combler son addiction ",
    "Main :  . <br><br> La sainte pureté à l’état pur, travailleur, il n’hésitera pas à mettre en application tout ce qu’il sait avec son Harmonie et un bon arsenal de douilles pour chercher la victoire",
    "Main :  . <br><br> Un gros fan de Wario et de techs beaucoup trop poussées pour une saucismash, si jamais il joue Falco et qu’il se retrouve avec un gyro dans les mains, gare à vous !"
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
