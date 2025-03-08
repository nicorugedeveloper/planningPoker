import { Routes } from '@angular/router';
import { InicioComponent } from './features/inicio/inicio.component';

import { GameComponent } from './features/game/game.component';
import { PurebasComponent } from './purebas/purebas.component';

export const routes: Routes = [
  {
    path:'inicio', component:InicioComponent
  },
  {
    path:'game', component:GameComponent
  },
  {
    path:'pruebas', component:PurebasComponent
  }
];
