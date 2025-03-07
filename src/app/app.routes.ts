import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { GameComponent } from './features/game/game.component';

export const routes: Routes = [
  {
    path:'inicio', component:InicioComponent
  },
  {
    path:'game', component:GameComponent
  },
  {
    path:'welcome', component:WelcomeComponent
  }
];
