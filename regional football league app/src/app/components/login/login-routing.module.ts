import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { PasswordResetComponent } from './password-reset.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reset-password', component: PasswordResetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
