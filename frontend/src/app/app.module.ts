import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SliderComponent } from "./myComponent/slider/slider.component";
import { HeaderComponent } from "./myComponent/header/header.component";
import { ContentComponent } from "./myComponent/content/content.component";
import { FooterComponent } from "./myComponent/footer/footer.component";
import { PerfilComponent } from "./myComponent/perfil/perfil.component";
import { UsersComponent } from "./myComponent/users/users.component";
import { PerfilUsuarioComponent } from "./myComponent/perfil-usuario/perfil-usuario.component";
import { RegistroUsuariosComponent } from "./myComponent/users/registro-usuarios/registro-usuarios.component";
import { HomeComponent } from "./myComponent/home/home.component";
import { InicioComponent } from "./myComponent/inicio/inicio.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "registro",
    component: RegistroUsuariosComponent
  },
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path: "contenido",
    component: ContentComponent
  },
  {
    path: "usuarios",
    component: UsersComponent
  },
  {
    path: "perfil/:role/:nombre",
    component: PerfilUsuarioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PerfilComponent,
    UsersComponent,
    PerfilUsuarioComponent,
    RegistroUsuariosComponent,
    HomeComponent,
    InicioComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
