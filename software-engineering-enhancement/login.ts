import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.credentials).subscribe({
      next: (data) => {
        this.authService.saveToken(data.token);
        alert('Login successful');
        this.router.navigate(['/trips']);
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Login failed');
      }
    });
  }
}
