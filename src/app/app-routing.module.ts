import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {PersonListComponent} from "./person-list/person-list.component";
import { AutomovilListComponent } from './automovil-list/automovil-list.component';
import { AutomovilComponent } from './automovil/automovil.component';




const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'person-list',
    component: PersonListComponent
  },
  {
    path: 'automovil-list',
    component: AutomovilListComponent
  },

  {
    path: 'automovil',
    component: AutomovilComponent
  },


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
