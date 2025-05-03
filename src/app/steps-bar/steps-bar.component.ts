import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuItem, MatMenuModule} from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MenuItem } from '../menu-item';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router'
import { CrystalBallPageComponent } from '../crystal-ball-page/crystal-ball-page.component';

@Component({
  selector: 'app-steps-bar',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, MatToolbar, MatDivider, CommonModule, RouterLink, RouterOutlet, CrystalBallPageComponent],
  templateUrl: './steps-bar.component.html',
  styleUrl: './steps-bar.component.css'
})
export class StepsBarComponent implements OnInit {



  menuItems: MenuItem[] = [
    {
      label: "Sign Up",
      icon: "login",
    },
    {
      label: "About",
      icon: "help",
    },
    {
      label: "Pricing",
      icon: "attach_money",
    },
    {
      label: "Docs",
      icon: "notes",
    },
    {
      label: "Showcase",
      icon: "slideshow",
    },
    {
      label: "Blog",
      icon: "rss_feed",
    },
  ];

  ngOnInit(): void {}

}
