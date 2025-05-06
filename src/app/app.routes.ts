import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainTabComponent } from './main-tab/main-tab.component';
import { NgModule } from '@angular/core';
import { CrystalBallPageComponent } from './crystal-ball-page/crystal-ball-page.component';
import { PlayerChoiceComponent } from './player-choice/player-choice.component';
import { CasterComponent } from './caster/caster.component';
import { CoachComponent } from './coach/coach.component';
import { TeamComponent } from './team/team.component';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { BracketComponent } from './bracket/bracket.component';
import { ClassementComponent } from './classement/classement.component';


export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        outlet: 'popup'
    },
    {
        path: 'nav-bar',
        component: NavBarComponent,
        outlet: 'popup'
    },
    {
        path: 'crystal',
        component: CrystalBallPageComponent
    },
    {
        path: 'player-choice',
        component: PlayerChoiceComponent
    },
    {
        path: 'caster',
        component: CasterComponent
    },
    {
        path: 'coach',
        component: CoachComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'bracket',
        component: BracketComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'classement',
        component: ClassementComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
    { path: '**', component: HomeComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
            enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }