import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CronogramasService } from './cronogramas.service';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent {

  form: FormGroup;//Reactive Form


  constructor(private formBuilder: FormBuilder, private cronogramasService: CronogramasService) {
    if (this.cronogramasService.seleccionarCronograma) {
      const cronogramaSeleccionado = this.cronogramasService.seleccionarCronograma;
      this.form = formBuilder.group({
        id: [0],
        periodoLectivo: [cronogramaSeleccionado.periodoLectivo],
        fechaCreacion: [cronogramaSeleccionado.fechaCreacion,],
        creador: [cronogramaSeleccionado.creador, [Validators.required]],
      
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        periodoLectivo: ['', [Validators.required, Validators.minLength(10)]],
        fechaCreacion: ['', [Validators.required]],
        creador: ['', [Validators.required]],
       
      });
    }
  }
  

  onSubmit() {
    if (this.form.valid) {
      this.añadirCronograma();
    } else {
      alert('Formulario No Valido');
    }
  }

  añadirCronograma(){
    this.cronogramasService.añadirCronograma(this.form.value);
    console.log(this.cronogramasService.cronogramas);
  }

  actualizarCronograma() {
    this.cronogramasService.actualizarCronograma(this.idField.value, this.form.value);
    console.log(this.cronogramasService.cronogramas);
  }

  get idField() {
    return this.form.controls['id'];
  }


  
}
