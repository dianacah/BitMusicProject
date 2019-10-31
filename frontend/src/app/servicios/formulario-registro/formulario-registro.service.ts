import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FormularioRegistroService {
  private url = "http://localhost:3000/api/usuarios/";
  constructor(private http: HttpClient) {}

  postPerfilInformation(registro) {
    return this.http.post(this.url, registro);
  }
}
