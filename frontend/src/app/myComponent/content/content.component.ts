import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";
import { StoreSongsService } from "./../../servicios/store-songs/store-songs.service";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConsultaPerfilService } from "./../../servicios/consulta-perfil/consulta-perfil.service";
import { StoreService } from "./../../servicios/store/store.service";

@Component({
  selector: "content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  audio = document.querySelector("audio");
  buscador = new FormControl();
  listaCanciones: any = [];
  filteredOptions: Observable<string[]>;
  public usuario;
  entradaBuscador: FormGroup = this.builder.group({
    entradaBusqueda: [""]
  });
  listaCancionesFavoritas: any = [];

  constructor(
    private traerCancionesService: TraerCancionesService,
    private storeSongsService: StoreSongsService,
    private builder: FormBuilder,
    private consultaPerfilService: ConsultaPerfilService,
    private storeService: StoreService
  ) {}

  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe((response = []) => {
      this.listaCanciones = response;
      console.log(this.listaCanciones);
    });
  }

  cancionesFavoritas() {
    this.listaCancionesFavoritas = this.storeService.getUser().songs;
  }
  reproducir(rutaCancion) {
    const ruta = document.querySelector("source");
    const audio = document.querySelector("audio");
    ruta.setAttribute("src", rutaCancion.file);
    audio.load();
  }
  favoritos(cancion) {
    this.usuario = this.storeService.getUser();
    let cancionFav = {
      songs: {
        title: cancion.title,
        album: cancion.album,
        duration: cancion.duration,
        genre: cancion.genre,
        artist: cancion.artist,
        file: cancion.file,
        image: cancion.image
      }
    };
    this.consultaPerfilService.agregarFavorito(this.usuario.email, cancionFav);
    this.ngOnInit();
  }
  ngOnInit() {
    this.obtenerCanciones();
    this.cancionesFavoritas();
    this.filteredOptions = this.buscador.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.listaCanciones.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
