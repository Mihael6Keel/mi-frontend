import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';

  login() {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

