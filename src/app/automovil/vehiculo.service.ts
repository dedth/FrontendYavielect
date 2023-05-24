import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  vehiculo: any[] = [];
  selectedAutomovil: any = null;

  constructor() {
    this.loadVehiculo();
  }

  private loadVehiculo() {
    this.vehiculo = [];
    this.vehiculo.push(
      {id: 1, modelo: 'Aveo', age: 2019, fechaCompra: '1990-01-01',color: '',
       kilometraje: 3000, placa: 'AWE9874', tipo: 'Nuevo', rin: 13, ciudad: 'Quito', state: true},
       {id: 2, modelo: 'Chevrolet', age: 2015, fechaCompra: '12023-01-01',color: '',
       kilometraje: 2000, placa: 'PWE9874', tipo: 'Nuevo', rin: 14, ciudad: 'Cuenca', state: true},
      
    );
  }

  addAutomovil(payload: any) {
    this.vehiculo.push(payload);
  }

  updateAutomovil(id: number, payload: any) {
    const index = this.vehiculo.findIndex(automovil => automovil.id === id);
    this.vehiculo[index] = payload;
  }

  deleteAutomovil(id: number) {
    const index = this.vehiculo.findIndex(automovil => automovil.id === id);
    if (index > -1) {
      this.vehiculo.splice(index, 1);
    }
  }
}
