import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { NosotrosComponent } from './general/nosotros/nosotros.component';

const routes: Routes = [
  { path: "",  component : LoginComponent },
  { path: 'lista', component: ListaVideojuegosComponent},
  { path: 'videojuego/:id', component: DetalleVideojuegoComponent },
  { path: "nosotros", component :  NosotrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
