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
  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe(response => {
      this.listaCanciones = response;
      // console.log(this.listaCanciones);
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
    dialogConfig.data = {
      title: cancion.title,
      album: cancion.album,
      genre: cancion.genre,
      artist: cancion.artist
    };
    console.log("datos", dialogConfig.data);
    this.dialog.open(PopupComponent, dialogConfig);
  }

  ngOnInit() {
    this.obtenerCanciones();
  }
}
