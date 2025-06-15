import { Routes } from '@angular/router';
import { User } from './login/user/user';
import { Usuario } from './registro/usuario/usuario';
import { Inicio } from './inicio/inicio';


export const routes: Routes = [
  { path: '',
     redirectTo: '/Inicio',
      pathMatch: 'full' },
   { path: 'inicio',
     component: Inicio },
  { path: 'login',
     component: User },
  { path: 'registro',
     component: Usuario }
];

