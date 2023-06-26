import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { VotanteListaComponent } from './votantes/votante-lista/votante-lista.component';
import { VotanteComponent } from './votantes/votante/votante.component';

const routes: Routes = [

 /*  {
    path: '',
    component: VotanteComponent
  }, */
 
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'votante',
    component: VotanteComponent
  },
  {
    path: 'votante-lista',
    component: VotanteListaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
