import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {
  private url = "http://localhost:3000/api/usuarios/";

constructor(private http: HttpClient) { }

updateInformation(registro){
  const urlRegistro = `${this.url}${registro.email}`;
  return this.http.put(urlRegistro, registro);
}

}
