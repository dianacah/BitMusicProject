import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConsultaPerfilService } from "./../../servicios/consulta-perfil/consulta-perfil.service";
import { Component, OnInit } from "@angular/core";
import { StoreService } from "./../../servicios/store/store.service";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css"]
})
export class PerfilComponent implements OnInit {
  userInformation: any = [];
  public name;
  public email;
  public age;
  public user;
  public src;
  public respuesta;
  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder,
    private builder: FormBuilder,
    private consultaPerfilService: ConsultaPerfilService
  ) {}

  cambioFotoForm: FormGroup = this.builder.group({
    image: ["", Validators.required]
  });

  cambiarImagen() {
    let pathImagen: "../../../assets/img/img-usuarios/";
    let nombreImagen = this.cambioFotoForm.value.image.substr(
      12,
      this.cambioFotoForm.value.image.length
    );
    let nuevaImagen = {
      image: "../../../assets/img/img-usuarios/" + nombreImagen
    };
    this.consultaPerfilService
      .actualizarImagen(this.email, nuevaImagen)
      .subscribe(response => {
        console.log("la respuesta es:", response);
        this.respuesta = response;
        this.storeService.setUser(
          this.respuesta.name,
          this.respuesta.age,
          this.respuesta.email,
          this.respuesta.password,
          this.respuesta.role,
          this.respuesta.image,
          this.respuesta.songs
        );
        localStorage.setItem("image", this.respuesta.image);
        const imagenHeader = document.querySelector(".infoPerfil");
        imagenHeader.setAttribute("src", nuevaImagen.image);
        this.ngOnInit();
      });
  }
  ngOnInit() {
    this.user = this.storeService.getUser();
    this.name = this.user.name;
    this.age = this.user.age;
    this.email = this.user.email;
    this.src = this.user.image;
    //estas variables son las que se pintan en el html
  }
}
