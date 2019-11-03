import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TraerCancionesService {
  private url = "http://localhost:3000/api/canciones/";
  constructor(private http: HttpClient) {}

  getCanciones() {
    return this.http.get(this.url);
  }
  borrarCanciones(idCAncion) {
    return this.http.delete(this.url + idCAncion);
  }
  actualizarCanciondb(cancion, datos) {
    console.log("cancion", cancion, datos);
    console.log("url", this.url + cancion);
    return this.http.put(this.url + cancion, datos);
  }
  addSong(cancion) {
    return this.http.post(this.url, cancion);
  }
}
