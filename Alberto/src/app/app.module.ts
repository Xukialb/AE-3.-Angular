import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { VideojuegoDetalle } from './VideojuegoDetalle/VideojuegoDetalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    VideojuegoDetalleComponent,
    ContactoComponent,
    NosotrosComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
