import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StoreService } from "./../../servicios/store/store.service";
import { UpdateInfoService } from "./../../servicios/update-info.service";

@Component({
  selector: "app-actualizar-perfil",
  templateUrl: "./actualizar-perfil.component.html",
  styleUrls: ["./actualizar-perfil.component.css"]
})
export class ActualizarPerfilComponent implements OnInit {
  public name;
  public email;
  public age;
  public imagen;

  constructor(
    private builder: FormBuilder,
    private storeService: StoreService,
    private updateInfoService: UpdateInfoService
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

  actualizarInfo() {}

  ngOnInit() {
    const user = this.storeService.getUser();
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.imagen = localStorage.getItem("image");
  }
}
