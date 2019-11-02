import { FormBuilder } from "@angular/forms";
import { PopupComponent } from "./../popup/popup.component";
import { Component, OnInit } from "@angular/core";
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PopupNuevaCancionComponent } from "./../popup-nueva-cancion/popup-nueva-cancion.component";

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
  public popupNC;
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

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
    /* dialogConfig.data = {
      title: cancion.title,
      album: cancion.album,
      genre: cancion.genre,
      artist: cancion.artist
    }; */
    return dialogConfig;

    /* this.popup = this.dialog.open(PopupComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
      this.actualizarCancion(cancion._id, respuesta);
    }); */
  }
  actuzarSong(cancion) {
    let dialogConfig = this.openDialog();
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

  addSong(cancion) {
    let dialogConfig = this.openDialog();
    this.popup = this.dialog.open(PopupNuevaCancionComponent, dialogConfig);
    this.popup.afterClosed().subscribe(response => {
      let respuesta = response.value;
      let pathCancion = "../../../assets/audio/canciones/";
      let pathImagen = "../../../assets/img/img-canciones/";
      let nombreCancion = respuesta.file.substr(12, respuesta.file.length);
      let nombreImagen = respuesta.image.substr(12, respuesta.image.length);
      respuesta.file = pathCancion + nombreCancion;
      respuesta.image = pathImagen + nombreImagen;
      console.log("respuesta", respuesta);
      this.agregarCancion(respuesta);
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
  agregarCancion(cancion) {
    this.traerCancionesService.addSong(cancion).subscribe(response => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.obtenerCanciones();
  }
}
