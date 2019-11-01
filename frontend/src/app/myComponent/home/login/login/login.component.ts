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
        const {name, age, email, password, rol} = this.userLoginInformation
        this.storeService.setUser(name, age, email, password, rol);
        if(response == null){
          console.log("Este usuario no existe");
        }else {
          this.router.navigate(["/inicio/perfil/informacion"]);
          // console.log(this.userLoginInformation);
        }
      });
  }

  ngOnInit() {}
}
