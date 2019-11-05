import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private user: any = {};

  constructor() {}

  public setUser(name, age, email, password, role, image, songs) {
    this.user = {
      name,
      age,
      email,
      password,
      role,
      image,
      songs
    };
    console.log("usuario guardado", this.user);
    /*  localStorage.setItem("usuario", JSON.parse(this.user)); */
  }

  public getUser() {
    return this.user;
  }
}
