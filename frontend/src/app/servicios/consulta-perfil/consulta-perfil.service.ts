import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConsultaPerfilService {
  private url = "localhost:3000/api/usuarios";

  constructor(private http: HttpClient) {}

  getPerfilInformation() {
    return this.http.get(this.url);
  }
}
