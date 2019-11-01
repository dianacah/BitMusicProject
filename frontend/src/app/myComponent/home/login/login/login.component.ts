import { AppPage } from "./../../../../../../e2e/src/app.po";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConsultaPerfilService } from "./../../../../servicios/consulta-perfil/consulta-perfil.service";
import { StoreService } from "./../../../../servicios/store/store.service";
import { Router } from "@angular/router";
import { V4MAPPED } from "dns";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userLoginInformation: any = {};
  private name;
  private age;
  private email;
  private password;
  private role;

  constructor(
    private builder: FormBuilder,
    private consultaPerfilService: ConsultaPerfilService,
    private router: Router,
    private storeService: StoreService
  ) {}

  ingresoForm: FormGroup = this.builder.group({
    emailLog: ["", Validators.compose([Validators.required, Validators.email])],
    passwordLog: ["", Validators.required]
  });

  obtener(datosIngreso) {
    this.consultaPerfilService
      .getPerfilInformation(datosIngreso.value.emailLog)
      .subscribe(response => {
        console.log(response);
        this.userLoginInformation = response;
        this.name = this.userLoginInformation.name;
        this.age = this.userLoginInformation.age;
        this.email = this.userLoginInformation.email;
        this.password = this.userLoginInformation.password;
        this.role = this.userLoginInformation.role;
        this.storeService.setUser(
          this.name,
          this.age,
          this.email,
          this.password,
          this.role
        );
        if (this.password != datosIngreso.value.passwordLog) {
          console.log("La contraseña es incorrecta");
          this.router.navigate(["/home"]);
        } else {
          this.router.navigate(["/inicio/perfil/informacion"]);
          // console.log(this.userLoginInformation);
        }
      });
  }

  ngOnInit() {}
}
