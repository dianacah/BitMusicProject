import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  personas = [];

  constructor() {}

  ngOnInit() {
    this.personas = [
      {
        nombre: "Andres",
        apellido: "Villanueva",
        correo: "andres.vi@gmail.com",
        edad: 24,
        role: "Admin"
      },
      {
        nombre: "JuanFe",
        apellido: "Forero",
        correo: "Juanfeforero@gmail.com",
        edad: 27,
        role: "regularUser"
      }
    ];
  }
}
