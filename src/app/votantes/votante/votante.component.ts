import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VotantesService } from './votantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.scss']
})
export class VotanteComponent  {

  cedula: string = '';
  nombreUsuario: number = 0;
  apellidoUsuario: Date = new Date();
  semestre: string = '';
  correo: string = '';
  estadoVoto: boolean = false;
  tipoUsuario: string = '';
  claveUsuario: string = '';
  estadoUsuario: boolean = false;
  periodoUltimoVoto: string = '';

  form: FormGroup;//Reactive Form


  constructor(private formBuilder: FormBuilder, private votantesService: VotantesService ,
     private router: Router) {
    if (this.votantesService.seleccionarVotante) {
      const votanteSeleccionado = this.votantesService.seleccionarVotante;
      this.form = formBuilder.group({
        id: [votanteSeleccionado.id],
        cedula: [votanteSeleccionado.cedula, [Validators.required, Validators.min(10)]],
        nombreUsuario: [votanteSeleccionado.nombreUsuario, [Validators.required]],
        apellidoUsuario: [votanteSeleccionado.apellidoUsuario, [Validators.required, Validators.min(1)]],
        semestre: [votanteSeleccionado.semestre, [Validators.required]],
        correo: [votanteSeleccionado.correo , [Validators.required]],
        tipoUsuario: [votanteSeleccionado.tipoUsuario, [Validators.required, Validators.minLength(5)]],
        claveUsuario: [votanteSeleccionado.claveUsuario, [Validators.required, Validators.minLength(3)]],
        periodoUltimoVoto: [votanteSeleccionado.periodoUltimoVoto, ],
        estadoVoto: [votanteSeleccionado.estadoVoto, ],
        estadoUsuario: [votanteSeleccionado.estadoUsuario, ],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        cedula: ['', [Validators.required, Validators.minLength(10)]],
        nombreUsuario: ['', [Validators.required]],
        apellidoUsuario: ['', [Validators.required]],
        semestre: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        tipoUsuario: ['', [Validators.required, Validators.minLength(5)]],
        claveUsuario: ['', [Validators.required, Validators.min(3)]],
        periodoUltimoVoto: [new Date()],
        estadoVoto: [false, []],
        estadoUsuario: [false, []],
        
      });
    }
  }
  

  onSubmit() {
    if (this.form.valid) {
      this.añadirVotante();
    } else {
      alert('Formulario No Valido');
    }
  }

  añadirVotante(){
    this.votantesService.añadirVotante(this.form.value);
    console.log(this.votantesService.votantes);
  }

  actualizarVotante() {
    this.votantesService.actualizarVotante(this.idField.value, this.form.value);
    console.log(this.votantesService.votantes);
  }

  validateForm() {
    if (this.cedula === '' && this.cedula.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }


  
}