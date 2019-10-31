import { AppPage } from './../../../../../../e2e/src/app.po';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConsultaPerfilService } from "./../../../../servicios/consulta-perfil/consulta-perfil.service";
import { StoreService } from "./../../../../servicios/store/store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginInformation: any = {};
  private name;
  private age;
  private email;
  private password;


  constructor(
    private builder: FormBuilder,
    private consultaPerfilService: ConsultaPerfilService,
    private router: Router,
    private storeService: StoreService
    ) { }

  ingresoForm: FormGroup = this.builder.group({
    emailLog: ["", Validators.compose([Validators.required, Validators.email])],
    passwordLog: ["", Validators.required],
  });

  obtener(datosIngreso) {
    this.consultaPerfilService.getPerfilInformation(datosIngreso.value.emailLog).subscribe(response => {
        this.userLoginInformation = response;
        this.name = this.userLoginInformation.name
        this.age = this.userLoginInformation.age 
        this.email = this.userLoginInformation.email
        this.password = this.userLoginInformation.password
        this.storeService.setUser(this.name, this.age, this.email, this.password)
         this.router.navigate(['/inicio/perfil/informacion']);
         console.log(this.userLoginInformation);
      });
  }
  
  ngOnInit() {
  }

}
