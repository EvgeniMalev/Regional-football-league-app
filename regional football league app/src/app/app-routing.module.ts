import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGameComponent } from './dashboard/add-game/add-game.component';
import { AddTeamsComponent } from './dashboard/add-teams/add-teams.component';
import { ScoreDetailsComponent } from './dashboard/score-details/score-details.component';
import { TeamRanklistComponent } from './dashboard/team-ranklist/team-ranklist.component';
import { PlayerRanklistComponent } from './dashboard/player-ranklist/player-ranklist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'add-game', component: AddGameComponent },
      { path: 'add-teams', component: AddTeamsComponent },
      { path: 'score-details', component: ScoreDetailsComponent },
      { path: 'team-ranklist', component: TeamRanklistComponent },
      { path: 'player-ranklist', component: PlayerRanklistComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
