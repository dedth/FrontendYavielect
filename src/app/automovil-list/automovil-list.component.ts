import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from '../automovil/vehiculo.service';

@Component({
  selector: 'app-automovil-list',
  templateUrl: './automovil-list.component.html',
  styleUrls: ['./automovil-list.component.scss']
})
export class AutomovilListComponent {
  
  vehiculo: any[] = [];
  selectedAutomovil: any;

  constructor(private vehiculoService: VehiculoService, private router: Router) {
    this.vehiculo = this.vehiculoService.vehiculo;
  }

  createAutomovil() {
    this.vehiculoService.selectedAutomovil = null;
    this.router.navigate(['automovil']);
  }

  editAutomovil(automovil: any) {
    this.vehiculoService.selectedAutomovil = automovil;
    this.router.navigate(['automovil']);
  }

  deleteAutomovil(id: number) {
    this.vehiculoService.selectedAutomovil(id);
    console.log(this.vehiculoService.vehiculo);
  }
}


