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

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    setTimeout(() => {
      let user = this.storeService.getUser();
      this.role = user.role;
      if (this.role === "admin") {
        this.admin = true;
      }
      //estas variables son las que se pintan en el html
      console.log("role", user);
    }, 1000);
  }

  mostrarHome() {}
}
