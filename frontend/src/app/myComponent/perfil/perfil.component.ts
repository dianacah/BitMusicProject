import { ConsultaPerfilService } from "./../../servicios/consulta-perfil/consulta-perfil.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViewEncapsulation } from "@angular/core";
import { StoreService } from "./../../servicios/store/store.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class PerfilComponent implements OnInit {
  userInformation: any = [];
  public name;
  public email;
  public age;

  constructor(
    private consultaPerfilService: ConsultaPerfilService,
    private storeService: StoreService
  ) {}

  obtener(datosIngreso) {
    this.consultaPerfilService
      .getPerfilInformation(datosIngreso)
      .subscribe(response => {
        this.userInformation = response;
        console.log(this.userInformation);
      });
  }

  ngOnInit() {
    this.obtener("lorena@gmail.com");
    const user = this.storeService.getUser();
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    //estas variables son las que se pintan en el html
  }
}
