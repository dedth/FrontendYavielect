import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AprobacionService {
  aprobacion: any[] = [];
  seleccionarAprobar: any = null;
  httpClient: any;

  constructor() { 
    this.cargarAprobacion();
  }

  private cargarAprobacion() {
    this.aprobacion = [];
    this.aprobacion.push(
      { id: 1, nombreLista: 'Lista a', eslogan: 'union', planTrabajo: 'Flores', color: 'CUARTO', numero: 1, logo: 'url', estadoLista: 'True'},
      { id: 2, nombreLista: 'Lista b', eslogan: 'Todos somo uno', planTrabajo: 'Ramos', color: 'CUARTO', numero: 5, logo: 'url', estadoLista: 'False' }
    );
  }
  
  añadirAprobar(payload: any){
   this.aprobacion.push(payload); 
  }

  actualizarAprobar(id:number, payload:any){
    const index = this.aprobacion.findIndex(aprobar => aprobar.id === id );
    this.aprobacion[index]=payload;
  }
  
  borrarAprobar(id:number){
    const index = this.aprobacion.findIndex(aprobar => aprobar.id === id );
    if(index > -1) {
      this.aprobacion.splice(index, 1);
    }
  }

  getAllCountries() {
    return this.httpClient.get('http://localhost:3000/api/v1/lista/catalogue');
  }
}