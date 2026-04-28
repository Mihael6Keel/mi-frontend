import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { Home } from './pages/home/home';
import { Landing } from './pages/landing/landing';
import { authGuard } from './core/guards/auth-guard';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'landing', component: Landing }, // HOMEPAGE PRIMERO
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  // RUTAS VACÍAS (placeholder)
  { path: 'solicitudes', component: Dashboard },
  { path: 'inventario', component: Dashboard },
  { path: 'ordenes', component: Dashboard },
  { path: 'recepcion', component: Dashboard },
];