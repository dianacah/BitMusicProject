import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private user: any = {}

  constructor() { }

  public setUser(name, age, email, password) {
    this.user = {
      name,
      age,
      email,
      password
    }
    return this.user
  }

  public getUser() {
    return this.user;
  }


}
