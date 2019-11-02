import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormularioRegistroService } from "./../../../../servicios/formulario-registro/formulario-registro.service";
import { StoreService } from "./../../../../servicios/store/store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  registerInformation: any = {};

  constructor(
    private builder: FormBuilder,
    private formularioRegistroService: FormularioRegistroService,
    private storeService: StoreService,
    private router: Router
  ) {}

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
    this.formularioRegistroService
      .postPerfilInformation(datosRegistro.value)
      .subscribe((response = {}) => {
        // llamar el servicio de storeService para almacenar los datos y luego pintarlos en el perfil
        this.registerInformation = response;
        const {
          name,
          age,
          email,
          password,
          role,
          image
        } = this.registerInformation;
        let imagenLocal = localStorage.setItem(
          "image",
          this.registerInformation.image
        );
        const validarServicio = this.storeService.setUser(
          name,
          age,
          email,
          password,
          role,
          image
        );
        this.router.navigate(["/inicio/perfil/informacion"]);
      });
  }

  ngOnInit() {}
}
