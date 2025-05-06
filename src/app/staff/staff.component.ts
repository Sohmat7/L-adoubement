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
    "Thomas \"Soma\" AKA Rusty Gear <br><br> Main : La retraite (avant : R.O.B, Brawler, Lucas et d'autres pocket pick random) <br> <br> J'ai fait le site. <br><br> Y'a des bugs mais tranquille et il n'est pas adapté à tous les navigateurs. Promis je m'occupe d'une version mobile avant le début du tournoi. <br><br> j'ai une chaine Youtube (Somatv), si vous pouviez lancer les vidéos longues en arrière plan sur un navigateur pour gonfler le nombre d'heure ce serait un soutien de fou x)",
    "Faustin \"Rouxblart\" AKA Tintin au Farwest <br><br> Main : Inkling <br><br> Presque meilleur joueur Mario Kart de Lyon (entre top 2 et top 5 mais azy la compétition est dure). N'avait pas conscience que chasser des péd*philes sur Clash of Clans quand on a 14 ans c'est pas une très bonne idée mais c'est quand même vachement drôle. Alterne entre salons privés MWII et Amour Sucré, Lysandre dans ses veines. Inkling luia donné une carrière sur smash, ne sait pas boo-yah.",
    "L'homme sans qui rien ne serait possible, l'hôte de la soirée... Il a fait l'erreur d'un jour accepter des smashers sans-abri dans son bar, depuis il écoute les plaintes de Slacker et les pop-offs lugubres de Nexus tout en tendant un Jaegerbomb d'une main et en tirant une pinte de verte de l'autre.",
    "Bastian aka Basswood Kid <br><br> Main : Villageois. <br><br> Quand il n'est pas la guitare basse à la main ou devant un épisode de \"Ici Bla-Bla\" (si vous ne connaissez pas, allez voir) il organise des événements pour Deerstalker. Big Boss de l'association, si vous le regardez avec un grand sourire et que vous lui demandez une bière gentiment à l'Adoubement vous aurez de grandes chances de recevoir un demi. ",
    "Clément \"Clemclou\"  AKA Cactus Clem <br><br> Main : La Plante Piranha. <br><br> Membre original du plant gang. Si tu essayes de lui marcher sur les pieds il te crachera dessus avec ses fameux kill setups à 0% et son énorme boule. Véritable encyclopédie du smash compétitif, la base de données dans sa tête fonctionne mieux que start.gg.",
    "Matéo \"Qinmao\" AKA DJ Tequila Tap-Tap<br><br> Joue à smash tous les trois mois, mais c'est l'intention qui compte. Préfère dévouer son énergie dans les jeux de rythme, vous le croiserez à gamespirit. S'occupe des graphismes et trailers de MPT/Deer"
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


