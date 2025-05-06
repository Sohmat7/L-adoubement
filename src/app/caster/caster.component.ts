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
  imports: [ MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatButtonModule, FormsModule, RouterLink ],
  templateUrl: './caster.component.html',
  styleUrl: './caster.component.css'
})
export class CasterComponent {


  data = [
    "Clément \"Clemclou\"  AKA Cactus Clem <br><br> Main : La Plante Piranha. <br><br> Membre original du plant gang. Si tu essayes de lui marcher sur les pieds il te crachera dessus avec ses fameux kill setups à 0% et son énorme boule. Véritable encyclopédie du smash compétitif, la base de données dans sa tête fonctionne mieux que start.gg.",
    "Sourif <br> <br> Main : Amphinobi <br> <br> Un gars plutôt discret avec les gens qu'il connaît pas trop mais qui est bon vivant avec ses amis, rapport au jeu très chill, pas spécialement try hard, adore rire et l'humour absurde",
    "Romain KeyFace aka Le dompteur de dragons <br> <br> Main : Bowser Jr / Meta Knight. <br> <br> Ancien archimage de l'académie du Puy en Velay, il est en quête de nouvelles arcanes dans le cast",
    "Enzo \"Slacker\" <br><br> Main : Wario. <br><br> Co-Fondateur de l’équipe et joueur de Wario ses Wafts de monthly et de Weekly n’ont visiblement pas la même frame data, il aime plein de choses mais pas Steve, ni Min-Min, Ni Kazuya, Ni Bayonetta, Ni villageois, Ni Felinferno, ni…"
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
