import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehiculoService } from './vehiculo.service';


@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.scss']
})
export class AutomovilComponent {

  modelo: string = '';
  year: number = 0;
  fechaCompra: Date = new Date();
  color: string = '';
  kilometraje: number = 0;
  placa: string = '';
  tipo: string = '';
  rin: number = 0;
  ciudad: string = '';
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder,
              private vehiculoService: VehiculoService) {
    if (this.vehiculoService.selectedAutomovil) {
      this.form = formBuilder.group({
        id: [this.vehiculoService.selectedAutomovil.id],
        modelo: [this.vehiculoService.selectedAutomovil.modelo, [Validators.required, Validators.minLength(3)]],
        year: [this.vehiculoService.selectedAutomovil.year, [Validators.min(1)]],
        fechaCompra: [this.vehiculoService.selectedAutomovil.fechaCompra],
        color: [this.vehiculoService.selectedAutomovil.color],
        kilometraje: [this.vehiculoService.selectedAutomovil.kilometraje],
        placa: [this.vehiculoService.selectedAutomovil.placa],
        tipo: [this.vehiculoService.selectedAutomovil.tipo],
        rin: [this.vehiculoService.selectedAutomovil.rin],
        ciudad: [this.vehiculoService.selectedAutomovil.ciudad],
        state: [this.vehiculoService.selectedAutomovil.state, []],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        modelo: ['', [Validators.required, Validators.minLength(3)]],
        year: [0, [Validators.min(1)]],
        fechaCompra: [new Date()],
        color: ['', [Validators.required, Validators.minLength(3)]],
        kilometraje: [0, [Validators.min(1)]],
        placa: ['', [Validators.required, Validators]],
        tipo: ['', [Validators.required, Validators]],
        rin: [0, [Validators.min(1)]],
        ciudad: ['', [Validators.required, Validators]],
        state: [false, []],
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addAutomovil();
    } else {
      alert('Formulario No Valido');
    }
  }

  addAutomovil() {
    this.vehiculoService.addAutomovil(this.form.value);
    console.log(this.vehiculoService.vehiculo);
  }

  updateAutomovil() {
    this.vehiculoService.updateAutomovil(this.idField.value, this.form.value);
    console.log(this.vehiculoService.vehiculo);
  }

  validateForm() {
    if (this.modelo === '' && this.modelo.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }

}
