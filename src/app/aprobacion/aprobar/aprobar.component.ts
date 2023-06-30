import { AprobacionService } from './aprobacion.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aprobar',
  templateUrl: './aprobar.component.html',
  styleUrls: ['./aprobar.component.scss']
})
export class AprobarComponent {

  nombreLista: string = '';
  esloganLista: string = '';
  planTrabajoLista: string = '';
  colorLista: string = '';
  numeroLista: number = 0;
  logoLista: string = '';
  estadoLista: boolean = false;
  

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder, private aprobacionService: AprobacionService) {
    if (this.aprobacionService.seleccionarAprobar) {
      const aprobacionSeleccionado = this.aprobacionService.seleccionarAprobar;
      this.form = formBuilder.group({
        id: [aprobacionSeleccionado.id],
        nombreLista: [aprobacionSeleccionado.nombreLista, [Validators.required]],
        esloganLista: [aprobacionSeleccionado.esloganLista, [Validators.required]],
        planTrabajoLista: [aprobacionSeleccionado.planTrabajoLista, [Validators.required, Validators.min(1)]],
        colorLista: [aprobacionSeleccionado.colorLista, [Validators.required]],
        numeroLista: [aprobacionSeleccionado.numeroLista , [Validators.required]],
        logoLista: [aprobacionSeleccionado.logoLista, ],
        estadoLista: [aprobacionSeleccionado.estadoLista, [Validators.required, Validators.minLength(5)]]
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        nombreLista: ['', [Validators.required]],
        esloganLista: ['', [Validators.required]],
        planTrabajoLista: ['', [Validators.required]],
        colorLista: ['', [Validators.required]],
        numeroLista: ['', [Validators.required, Validators.minLength(5)]],
        logoLista: ['', [Validators.required]],
        estadoLista: [false, []],
        
      });
    }
  }
  

  onSubmit() {
    if (this.form.valid) {
      this.añadirAprobar();
    } else {
      alert('Formulario No Válido');
    }
  }

  añadirAprobar(){
    this.aprobacionService.añadirAprobar(this.form.value);
    console.log(this.aprobacionService.aprobacion);
  }

  actualizarAprobar() {
    this.aprobacionService.actualizarAprobar(this.idField.value, this.form.value);
    console.log(this.aprobacionService.aprobacion);
  }

  validateForm() {
    if (this.nombreLista === '' && this.nombreLista.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }


}