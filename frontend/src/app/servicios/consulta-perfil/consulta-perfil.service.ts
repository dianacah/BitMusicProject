import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConsultaPerfilService {
  private url = "http://localhost:3000/api/usuarios/nombre2";

  constructor(private http: HttpClient) {}

  getPerfilInformation() {
    return this.http.get(this.url);
  }
}
