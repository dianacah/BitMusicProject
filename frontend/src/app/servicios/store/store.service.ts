import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private user: any = {};

  constructor() {}

  public setUser(name, age, email, password, role, image) {
    this.user.image = null;
    this.user = {
      name,
      age,
      email,
      password,
      role,
      image
    };
    console.log("usuario guardado", this.user);
    /*  localStorage.setItem("usuario", JSON.parse(this.user)); */
  }

  public getUser() {
    return this.user;
  }
}
