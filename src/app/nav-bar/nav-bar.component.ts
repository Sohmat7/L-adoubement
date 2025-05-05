import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuItem, MatMenuModule} from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MenuItem } from '../menu-item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, MatToolbar, MatDivider, CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

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
  
  constructor() {}

  ngOnInit(): void {}

}
