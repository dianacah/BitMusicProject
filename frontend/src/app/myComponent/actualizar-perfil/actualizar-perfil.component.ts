import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-actualizar-perfil",
  templateUrl: "./actualizar-perfil.component.html",
  styleUrls: ["./actualizar-perfil.component.css"]
})
export class ActualizarPerfilComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  actualizarDatosForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    age: [
      "",
      Validators.compose([Validators.required, Validators.minLength(1)])
    ],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  });

  ngOnInit() {}
}
