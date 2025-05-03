import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainTabComponent } from './main-tab/main-tab.component';
import { MatCardSubtitle, MatCardModule } from '@angular/material/card';
import { CrystalBallPageComponent } from './crystal-ball-page/crystal-ball-page.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardSubtitle,
    MatCardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MainTabComponent,
    CrystalBallPageComponent
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/