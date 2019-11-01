import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private user: any = {};

  constructor() {}

  public setUser(name, age, email, password, role) {
    this.user = {
      name,
      age,
      email,
      password,
      role
    };
    console.log("usuario guardado", this.user);
  }

  public getUser() {
    return this.user;
  }
}
