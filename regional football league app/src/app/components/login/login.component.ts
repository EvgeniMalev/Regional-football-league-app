import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router // Inject Router
  ) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Navigate to the dashboard or some other page
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }
}
