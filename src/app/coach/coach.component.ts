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
    "Dario \"Azerty\" AKA le désert de l'est <br> <br> Main : Kazuya. <br> <br> Team : MPT <br> <br> Le père aigri jamais content de ce que font ses enfants. Il te rappellera toujours par ses connaissances et combos que t’as des devoirs à faire et tu sentiras le revers du daron s’il te voit dormir quand tu ne devrais pas.",
    "Fei-long \"Mr.Daiyamondo\" Le dragon volant AKA Les doigts de soie. <br> <br> Main : Joker. <br> <br> Team : MPT <br> <br> C’est l’eboy sucré retraité de la commu. Depuis qu’il a trouvé un travail il a lâché arsène le grand frère pour se concentrer sur ses véritables passions : freeplay et freefall dans la blast zone.",
    "CKC <br> <br> Main : Captain Falcon. <br> <br>  Team : DC <br> <br> Très bon vivant, sociable, ptit buveur qui aime la vie, toujours souriant et très gentil, va de paire avec MaxyOurs tout pareil et kiff ses ptits tournois dans une ambiance chill et sans prise de tête !",
    "Sapinos <br><br> Main : Wolf <br><br> Team : DC <br> <br> Un ptit try hardeur de la pleine lune qui aime se pinter avec les potes à côté. Aime pas se prendre la tête mais peut vite se plaindre quand il se sent dans l'inconfort",
    "Alexandre \"Smog'Oth'\" aka L'encyclopédie <br> <br> Main : Rob. <br> <br> Team : HT <br> <br> Orphelin adopté par un ancien joueur de jeu de combat qui souhaitait transmettre son héritage.",
    "Antony \"bearr\" aka Le cimetière de Simandres <br> <br> Main : Game & Watch / Mewtwo. <br> <br> Team : HT <br> <br> Ancien top 1 FR de SF3 amnésique suite à l'accident, il cherche son identité à travers Smash Bros.",
    "Adrien \"Drazaï\" <br> <br> Main : Zero Suit Samus. <br> <br> Team : BLS <br> <br> Esprit fraternel, Râleur, Passionné, et fan de sa Blonde, il compte bien faire un dernier coup d’éclat avant son envol aux Etats-Unis",
    "Palo \"Irtozero\" <br> <br> Main : le roster entier. <br> <br> Team : BLS <br> <br> Le hidden boss par excellence, Main Sheik mais couteau suisse maîtrisant de nombreux personnages, son hobby, c’est de perdre avec son 45e perso en winner pour éliminer tout ses amis en loser bracket"
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
