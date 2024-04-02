import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { RemoveGameComponent } from './remove-game/remove-game.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { RemoveTeamComponent } from './remove-team/remove-team.component';

import { GamePlayed } from './core/game.played';
import { TeamRanklist } from './core/team.ranklist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
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
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
