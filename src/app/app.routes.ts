import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { Home } from './pages/home/home';
import { Landing } from './pages/landing/landing';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: 'landing', component: Landing }, // 🔥 TU HOMEPAGE PRIMERO
  { path: 'login', component: Login },
  { path: 'home', component: Home }
];