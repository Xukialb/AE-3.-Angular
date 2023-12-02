import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { ListaVideojuegosComponent } from './videojuegos/lista-videojuegos/lista-videojuegos.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { Vdj1Component } from './videojuegos/vdj1/vdj1.component';
import { Vdj2Component } from './videojuegos/vdj2/vdj2.component';
import { Vdj3Component } from './videojuegos/vdj3/vdj3.component';
import { Vdj4Component } from './videojuegos/vdj4/vdj4.component';
import { Vdj5Component } from './videojuegos/vdj5/vdj5.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    ListaVideojuegosComponent,
    BarraNavegacionComponent,
    NosotrosComponent,
    ContactoComponent,
    Vdj1Component,
    Vdj2Component,
    Vdj3Component,
    Vdj4Component,
    Vdj5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
