import { Component, inject, OnInit, signal} from '@angular/core';
import { Auth } from '../../core/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private auth = inject(Auth);
  user = signal<any>(null);

  ngOnInit() {
    this.auth.me().subscribe({
      next: (res: any) => {
        console.log(this.user);
        this.user.set(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
