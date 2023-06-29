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
  nombre: number = 0;
  apellido: Date = new Date();
  semestre: string = '';
  correo: string = '';
  estado: boolean = false;
  tipoUsuario: string = '';
  clave: string = '';
  estadoVoto: boolean = false;
  periodoVoto: string = '';

  form: FormGroup;//Reactive Form


  constructor(private formBuilder: FormBuilder, private votantesService: VotantesService ,
     private router: Router) {
    if (this.votantesService.seleccionarVotante) {
      const votanteSeleccionado = this.votantesService.seleccionarVotante;
      this.form = formBuilder.group({
        id: [votanteSeleccionado.id],
        cedula: [votanteSeleccionado.cedula, [Validators.required, Validators.min(10)]],
        nombre: [votanteSeleccionado.nombre, [Validators.required]],
        apellido: [votanteSeleccionado.apellido, [Validators.required, Validators.min(1)]],
        semestre: [votanteSeleccionado.semestre, [Validators.required]],
        correo: [votanteSeleccionado.correo , [Validators.required]],
        estado: [votanteSeleccionado.estado, ],
        tipoUsuario: [votanteSeleccionado.tipoUsuario, [Validators.required, Validators.minLength(5)]],
        clave: [votanteSeleccionado.clave, [Validators.required, Validators.minLength(3)]],
        estadoVoto: [votanteSeleccionado.estadoVoto, ],
        periodoVoto: [votanteSeleccionado.periodoVoto, ],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        cedula: ['', [Validators.required, Validators.minLength(10)]],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        semestre: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        estado: [false, []],
        tipoUsuario: ['', [Validators.required, Validators.minLength(5)]],
        clave: ['', [Validators.required, Validators.min(3)]],
        estadoVoto: [false, []],
        periodoVoto: [new Date()],
        
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