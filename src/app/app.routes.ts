import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'home', component: Home},
];
