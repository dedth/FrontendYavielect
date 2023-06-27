import { AprobacionService } from './aprobacion.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aprobar',
  templateUrl: './aprobar.component.html',
  styleUrls: ['./aprobar.component.scss']
})
export class AprobarComponent {

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder, private aprobacionService: AprobacionService) {
    if (this.aprobacionService.seleccionarAprobar) {
      const aprobacionSeleccionado = this.aprobacionService.seleccionarAprobar;
      this.form = formBuilder.group({
        id: [aprobacionSeleccionado.id],
        nombreLista: [aprobacionSeleccionado.nombreLista, [Validators.required]],
        eslogan: [aprobacionSeleccionado.eslogan, [Validators.required]],
        planTrabajo: [aprobacionSeleccionado.planTrabajo, [Validators.required, Validators.min(1)]],
        color: [aprobacionSeleccionado.color, [Validators.required]],
        numero: [aprobacionSeleccionado.numero , [Validators.required]],
        logo: [aprobacionSeleccionado.logo, ],
        estadoLista: [aprobacionSeleccionado.estadoLista, [Validators.required, Validators.minLength(5)]]
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        nombreLista: ['', [Validators.required]],
        eslogan: ['', [Validators.required]],
        planTrabajo: ['', [Validators.required]],
        color: ['', [Validators.required]],
        numero: ['', [Validators.required, Validators.minLength(5)]],
        logo: ['', [Validators.required]],
        estadoLista: [false, []],
        
      });
    }
  }
  

  onSubmit() {
    if (this.form.valid) {
      this.añadirAprobar();
    } else {
      alert('Formulario No Valido');
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

  get idField() {
    return this.form.controls['id'];
  }


}
