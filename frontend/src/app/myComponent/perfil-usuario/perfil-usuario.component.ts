import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-perfil-usuario",
  templateUrl: "./perfil-usuario.component.html",
  styleUrls: ["./perfil-usuario.component.css"]
})
export class PerfilUsuarioComponent implements OnInit {
  nombreUsuario: string;
  roleUsuario: string;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(parametro => {
      let nombre = parametro.get("nombre");
      let role = parametro.get("role");
      this.nombreUsuario = nombre;
      this.roleUsuario = role;
    });
  }
}
