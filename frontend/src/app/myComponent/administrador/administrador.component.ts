import { PopupComponent } from "./../popup/popup.component";
import { Component, OnInit } from "@angular/core";
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: "app-administrador",
  templateUrl: "./administrador.component.html",
  styleUrls: ["./administrador.component.css"]
})
export class AdministradorComponent implements OnInit {
  constructor(
    private traerCancionesService: TraerCancionesService,
    private dialog: MatDialog
  ) {}

  listaCanciones: any = [];
  public popup;
  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe(response => {
      this.listaCanciones = response;
      console.log(this.listaCanciones);
    });
  }

  borrarCanciones(cancion) {
    console.log(cancion);
    this.traerCancionesService
      .borrarCanciones(cancion._id)
      .subscribe(response => {
        console.log(response);
      });
    this.ngOnInit();
  }

  openDialog(cancion) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
    dialogConfig.data = {
      title: cancion.title,
      album: cancion.album,
      genre: cancion.genre,
      artist: cancion.artist
    };

    this.popup = this.dialog.open(PopupComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
      this.actualizarCancion(cancion._id, respuesta);
    });
  }
  actualizarCancion(cancion, datosActualizados) {
    this.traerCancionesService
      .actualizarCanciondb(cancion, datosActualizados)
      .subscribe(response => {
        //console.log(response);
        this.ngOnInit();
      });
  }

  ngOnInit() {
    this.obtenerCanciones();
  }
}
