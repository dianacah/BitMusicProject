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
    console.log(this.url + idCAncion);
    return this.http.delete(this.url + idCAncion);
  }
}
