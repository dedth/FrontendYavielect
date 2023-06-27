import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MegaMenuModule } from 'primeng/megamenu';
import {RouterModule } from '@angular/router';
import { CascadeSelectModule } from 'primeng/cascadeselect';

import {MenuComponent } from './menu/menu.component';
import {VotanteComponent } from './votantes/votante/votante.component';
import {VotanteListaComponent } from './votantes/votante-lista/votante-lista.component';
import { CronogramaComponent } from './cronogramas/cronograma/cronograma.component';
import { CronogramaListaComponent } from './cronogramas/cronograma-lista/cronograma-lista.component';
import { AprobarComponent } from './aprobacion/aprobar/aprobar.component';
import { AprobarListaComponent } from './aprobacion/aprobar-lista/aprobar-lista.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VotanteComponent,
    VotanteListaComponent,
    CronogramaComponent,
    CronogramaListaComponent,
    AprobarComponent,
    AprobarListaComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule, 

    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    TableModule,
    CascadeSelectModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
