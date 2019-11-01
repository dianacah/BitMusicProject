import { Component, OnInit } from '@angular/core';
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(
    private traerCancionesService: TraerCancionesService,
  ) { 
    
  }
  
  listaCanciones: any = [];
  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe(response => {
      
      this.listaCanciones = response;
      // console.log(this.listaCanciones);
    });
  }

  ngOnInit() {
    this.obtenerCanciones();
  }

}
