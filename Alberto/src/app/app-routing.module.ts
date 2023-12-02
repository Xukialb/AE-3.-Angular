import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVideojuegosComponent } from './videojuegos/lista-videojuegos/lista-videojuegos.component';
import { Vdj1Component } from './videojuegos/vdj1/vdj1.component';
import { Vdj2Component } from './videojuegos/vdj2/vdj2.component';
import { Vdj3Component } from './videojuegos/vdj3/vdj3.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  { path: "", component :  ListaVideojuegosComponent},
  { path: "juego1", component : Vdj1Component },
  { path: "juego2", component : Vdj2Component },
  { path: "juego3", component :  Vdj3Component},
  { path: "nosotros", component :  NosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
