import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);

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
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

