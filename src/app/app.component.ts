import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainTabComponent } from './main-tab/main-tab.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StepsBarComponent } from './steps-bar/steps-bar.component';
import { MatToolbar } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { CrystalBallPageComponent } from "./crystal-ball-page/crystal-ball-page.component";

import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavBarComponent, StepsBarComponent, RouterLink, CrystalBallPageComponent, MatToolbar, MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pick-em-deer';
}
