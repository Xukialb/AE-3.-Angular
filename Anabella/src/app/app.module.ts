import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListavjComponent } from './videojuegos/listavj/listavj.component';
import { FormsModule } from '@angular/forms';
import { Juego1Component } from './videojuegos/juego1/juego1.component';
import { Juego2Component } from './videojuegos/juego2/juego2.component';
import { Juego3Component } from './videojuegos/juego3/juego3.component';
import { PiePagComponent } from './general/pie-pag/pie-pag.component';
import { NavBarComponent } from './general/pie-pag/navBar/navBar.component';
import { HeaderComponent } from './general/pie-pag/header/header.component';
import { NosotrosComponent } from './general/pie-pag/nosotros/nosotros.component';



@NgModule({
  declarations: [	
    AppComponent,ListavjComponent, Juego1Component, Juego2Component, Juego3Component, PiePagComponent,
      NavBarComponent, HeaderComponent, NosotrosComponent, 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
