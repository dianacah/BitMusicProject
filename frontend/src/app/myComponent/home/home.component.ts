import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViewEncapsulation } from "@angular/core";
import { FormularioRegistroService } from "./../../servicios/formulario-registro/formulario-registro.service";
import { ConsultaPerfilService } from "./../../servicios/consulta-perfil/consulta-perfil.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],

  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  userLoginInformation: any = [];

  constructor(
    private builder: FormBuilder,
    private formularioRegistroService: FormularioRegistroService,
    private consultaPerfilService: ConsultaPerfilService
  ) {}

  ingresoForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    age: [
      "",
      Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    emailLog: ["", Validators.compose([Validators.required, Validators.email])],
    passwordLog: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });

  enviar(datosRegistro) {
    this.formularioRegistroService
      .postPerfilInformation(datosRegistro.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  obtener(datosIngreso) {
    this.consultaPerfilService
      .getPerfilInformation(datosIngreso.value.emailLog)
      .subscribe(response => {
        this.userLoginInformation = response;
        console.log(this.userLoginInformation);
      });
  }
  ngOnInit() {}
}
