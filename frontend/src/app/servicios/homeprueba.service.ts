import { Require } from './../module/require.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepruebaService {
  postUser() {
    return [{
      name:"",
      age:"",
      email:"",
      password:"",
      image:"",
      role:"",
    }]
  /* constructor() { } */
  }
  private URL='http://localhost:3000/api/usuarios/'
  constructor(private http:HttpClient){

  }
  /* Traer */
  getInformation():Observable<Require[]>{
    return this.http.get<Require[]>(this.URL)
  }
  /* Crear */
  crearInformation(post){
    return this.http.post(this.URL,JSON.stringify(post))
  }
  /* Actualizar */
  actualizarInformation(put){
    return this.http.patch(`${this.URL}/${put.name}`,JSON.stringify
  ({isActive:true}))
}
eliminarInformation(){
  return this.http.delete<Require[]>(this.URL)
}
}
