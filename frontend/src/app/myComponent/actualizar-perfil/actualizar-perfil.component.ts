import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StoreService } from "./../../servicios/store/store.service";
import { UpdateInfoService } from "./../../servicios/update-info.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-actualizar-perfil",
  templateUrl: "./actualizar-perfil.component.html",
  styleUrls: ["./actualizar-perfil.component.css"]
})
export class ActualizarPerfilComponent implements OnInit {
  public name;
  public email;
  public age;
  public password;
  public imagen;
  public actualizarDatosForm: FormGroup;
  public updateData;

  constructor(
    private builder: FormBuilder,
    private storeService: StoreService,
    private updateInfoService: UpdateInfoService,
    private router: Router
  ) {}

  enviar(registro) {
    console.log(registro);
    this.updateInfoService.updateInformation(registro).subscribe(response => {
      console.log(response);
      this.updateData = response;
      const {
        name,
        age,
        email,
        password,
        role,
        image,
        songs
      } = this.updateData;
      this.storeService.setUser(name, age, email, password, role, image, songs);
      this.router.navigate(["/inicio/perfil/informacion"]);
    });
  }

  getUser() {
    const user = this.storeService.getUser();
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.password = user.password;
    this.imagen = localStorage.getItem("image");
  }

  ngOnInit() {
    this.getUser();
    this.actualizarDatosForm = this.builder.group({
      name: [this.name, Validators.required],
      age: [
        this.age,
        Validators.compose([Validators.required, Validators.minLength(1)])
      ],
      email: [
        this.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [this.password, Validators.required]
    });
  }
}
