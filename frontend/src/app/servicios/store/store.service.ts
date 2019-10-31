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
  }

  public getUser() {
    return this.user;
  }


}
