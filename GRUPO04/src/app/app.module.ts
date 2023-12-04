import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { HeaderComponent } from './general/header/header.component';
import { NavBarComponent } from './general/navBar/navBar.component';
import { NosotrosComponent } from './general/nosotros/nosotros.component';
import { PiePagComponent } from './general/pie-pag.component';
import { ContactoComponent } from './general/contacto/contacto.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent, ListaVideojuegosComponent, DetalleVideojuegoComponent, HeaderComponent,
      NavBarComponent, NosotrosComponent, PiePagComponent, ContactoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
