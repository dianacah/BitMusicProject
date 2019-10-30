import { PerfilComponent } from "./../perfil/perfil.component";
import { HomeComponent } from "./../home/home.component";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { observable } from "rxjs";
/* import "rxjs/add/observable/fromEvent";
 */
@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  /*   @ViewChild("child1") childOne: HomeComponent;
  @ViewChild("child2") childTwo: PerfilComponent; */

  mostrarContenido = false;

  constructor() {}

  ngOnInit() {}
}
