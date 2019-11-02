import { AdministradorComponent } from "./myComponent/administrador/administrador.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';

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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { ActualizarPerfilComponent } from "./myComponent/actualizar-perfil/actualizar-perfil.component";
import { RegistroComponent } from "./myComponent/home/registro/registro/registro.component";
import { LoginComponent } from "./myComponent/home/login/login/login.component";
import { MatListModule } from "@angular/material/list";
import { ModificarCancionesComponent } from "./myComponent/modificar-canciones/modificar-canciones.component";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material";
import { PopupComponent } from "./myComponent/popup/popup.component";

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
    component: InicioComponent,
    children: [
      {
        path: "perfil",
        children: [
          {
            path: "informacion",
            component: PerfilComponent
          },
          {
            path: "actualizarinfo",
            component: ActualizarPerfilComponent
          }
        ]
      },
      {
        path: "contenido",
        component: ContentComponent
      },
      { path: "administrarCanciones", component: AdministradorComponent }
    ]
  },
  {
    path: "registro",
    component: RegistroUsuariosComponent
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
    InicioComponent,
    ActualizarPerfilComponent,
    RegistroComponent,
    LoginComponent,
    ModificarCancionesComponent,
    AdministradorComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
