import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { TraerCancionesService } from "./../../servicios/traer-canciones/traer-canciones.service";
import { StoreSongsService } from "./../../servicios/store-songs/store-songs.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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

  entradaBuscador: FormGroup = this.builder.group({
    entradaBusqueda: [""]
  });

  constructor(
    private traerCancionesService: TraerCancionesService,
    private storeSongsService: StoreSongsService,
    private builder: FormBuilder,
  ) { }

  obtenerCanciones() {
    this.traerCancionesService.getCanciones().subscribe((response = []) => {
      this.listaCanciones = response;
    });
  }
  reproducir(rutaCancion) {
    const ruta = document.querySelector("source");
    const audio = document.querySelector("audio");
    ruta.setAttribute("src", rutaCancion.file);
    audio.load();

  }
  ngOnInit() {
    this.obtenerCanciones();

    this.filteredOptions = this.buscador.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listaCanciones.filter(option => option.toLowerCase().includes(filterValue));
  }

}
