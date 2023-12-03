// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { VideojuegoDetalle } from './videojuego-detalle/videojuego-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'videojuego/:id', component: VideojuegoDetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

