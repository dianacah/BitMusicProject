import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-registro-usuarios",
  templateUrl: "./registro-usuarios.component.html",
  styleUrls: ["./registro-usuarios.component.css"]
})
export class RegistroUsuariosComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    age: ["", [Validators.required, Validators.minLength(1)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  enviar(registerInfo) {
    console.log(registerInfo);
  }

  ngOnInit() {}
}
