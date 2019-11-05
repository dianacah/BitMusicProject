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
  public wrongPass = true;

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
      .subscribe((response = {}) => {

        this.userLoginInformation = response;
        const {
          name,
          age,
          email,
          password,
          role,
          image
        } = this.userLoginInformation;
        let imagenLocal = localStorage.setItem(
          "image",
          this.userLoginInformation.image
        );
        this.storeService.setUser(name, age, email, password, role, image);
        if (
          this.userLoginInformation.password != datosIngreso.value.passwordLog
        ) {
          this.router.navigate([""]);
          this.wrongPass = false;
        } else {
          this.router.navigate(["/inicio/perfil/informacion"]);
        }
      });
  }

  ngOnInit() {}
}
