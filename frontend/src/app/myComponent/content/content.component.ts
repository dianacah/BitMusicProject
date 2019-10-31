import { element } from "protractor";
import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  Directive,
  ElementRef
} from "@angular/core";
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";
import { ViewEncapsulation } from "@angular/core";
import { StoreSongsService } from "./../../servicios/store-songs/store-songs.service";

@Component({
  selector: "content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  audio = document.querySelector("audio");
  constructor(
    private traerCancionesService: TraerCancionesService,
    private storeSongsService: StoreSongsService
  ) {}
  listaCanciones: any = [];

  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe(response => {
      this.listaCanciones = response;
      console.log(this.listaCanciones);
    });
  }
  reproducir(rutaCancion) {
    const ruta = document.querySelector("source");
    const audio = document.querySelector("audio");
    console.log(rutaCancion.file);
    ruta.setAttribute("src", rutaCancion.file);
    audio.load();
    /* let servicio = this.storeSongsService.setSong(rutaCancion.file);
    console.log(servicio); */
    /* let rutaCancionReproducir = new EventEmitter<string>(); */
  }
  ngOnInit() {
    this.obtenerCanciones();

    /*  main.addEventListener("click", e => {
      ruta.setAttribute("src", rutas[parseInt(e.target.id)]);
      reproductor.setAttribute("autoplay", "true");
      reproductor.load();
      songName.innerHTML = rutas[parseInt(e.target.id)].substr(
        22,
        rutas[parseInt(e.target.id)].length
      );
    }) */
  }
}
