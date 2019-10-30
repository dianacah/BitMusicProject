import { ConsultaPerfilService } from "./../../servicios/consulta-perfil/consulta-perfil.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class PerfilComponent implements OnInit {
  userInformation: any = [];
  public mostrar = false;

  constructor(
    private builder: FormBuilder,
    private consultaPerfilService: ConsultaPerfilService
  ) {}

  actualizarDatosForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    age: [
      "",
      Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });
  ngOnInit() {
    this.consultaPerfilService.getPerfilInformation().subscribe(response => {
      console.log(response);
    });
  }
}
