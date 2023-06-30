import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VotantesService {
  
  votantes: any[] = [];
  seleccionarVotante: any = null;
  httpClient: any;

  constructor() { 
    this.cargarVotantes();
  }

  private cargarVotantes() {
    this.votantes = [];
    this.votantes.push(
      { id: 1, cedula: '1789456198', nombreUsuario: 'Pedro', apellidoUsuario: 'Flores', semestre: 'CUARTO', correo: 'f.pedro@yavirac.edu.ec', tipoUsuario: 'Estudiante', claveUsuario: '75gg', periodoUltimoVoto: '2019' , estadoVoto: 'Votado', estadoUsuario: 'ACTIVO',    },
      { id: 2, cedula: '1745821457', nombreUsuario: 'Carlos', apellidoUsuario: 'Ramos', semestre: 'CUARTO', correo: 'r.carlos@yavirac.edu.ec', tipoUsuario: 'Estudiante', claveUsuario: '85hh', periodoUltimoVoto: '2023', estadoVoto: 'No votado',  estadoUsuario: 'ACTIVO',     }
    );
  }
  
  añadirVotante(payload: any){
   this.votantes.push(payload); 
  }

  actualizarVotante(id:number, payload:any){
    const index = this.votantes.findIndex(votante => votante.id === id );
    this.votantes[index]=payload;
  }
  
  borrarVotante(id:number){
    const index = this.votantes.findIndex(votante => votante.id === id );
    if(index > -1) {
      this.votantes.splice(index, 1);
    }
  }

/*   getAllVotantes() {
    return this.httpClient.get('http://localhost:3000/api/v1/votantes');
  } */
}