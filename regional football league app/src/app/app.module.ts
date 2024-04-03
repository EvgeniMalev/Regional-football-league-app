import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularTeamModule } from 'path/to/angular-team.module'; 
import { environment } from 'path/to/environment'; 

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { RemoveGameComponent } from './remove-game/remove-game.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { RemoveTeamComponent } from './remove-team/remove-team.component';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service'; // Import AuthService
import { DataService } from './core/data.service'; // Import DataService

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    TeamComponent,
    TeamDetailsComponent,
    AddTeamComponent,
    EditTeamComponent,
    RemoveTeamComponent,
    AddGameComponent,
    EditGameComponent,
    RemoveGameComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularTeamModule.initializeApp(environment.team) 
  ],

  providers: [
    AuthService,
    DataService 
  ], 

  bootstrap: [AppComponent]
})
export class AppModule { }
