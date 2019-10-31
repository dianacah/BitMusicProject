import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormularioRegistroService } from "./../../../../servicios/formulario-registro/formulario-registro.service";
import { StoreService } from "./../../../../servicios/store/store.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private formularioRegistroService: FormularioRegistroService,
    private storeService: StoreService
    ) { }

  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    age: [
      "",
      Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });

  enviar(datosRegistro) {
    this.formularioRegistroService.postPerfilInformation(datosRegistro.value).subscribe(response => {
      // llamar el servicio de storeService para almacenar los datos y luego pintarlos en el perfil
        console.log(response);
      });
  }

  ngOnInit() {
  }

}
