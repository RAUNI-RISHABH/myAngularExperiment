import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'home',
    component: HomeComponent
},
  {
    path: 'tailwind-Lex',
    loadComponent: () =>
      import('./components/tailwind-lex/tailwind-lex.component')
          .then(m => m.TailwindLexComponent)
  }

];
