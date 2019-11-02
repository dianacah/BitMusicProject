import { Component, OnInit } from "@angular/core";
import { StoreService } from "./../../servicios/store/store.service";

@Component({
  selector: "selectorHeader",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userInformation: any = [];
  public role;
  public admin = false;
  public imagen;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    setTimeout(() => {
      let user = this.storeService.getUser();
      this.role = user.role;
      this.imagen = localStorage.getItem("image");
      console.log(this.imagen);
      console.log(this.role);
      if (this.role === "admin") {
        this.admin = true;
        console.log(this.admin);
      }
      //estas variables son las que se pintan en el html
      console.log("role", user);
    }, 2000);
  }

  mostrarHome() {}
}
