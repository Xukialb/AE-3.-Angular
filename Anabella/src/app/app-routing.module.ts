import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juego1Component } from './videojuegos/juego1/juego1.component';
import { Juego2Component } from './videojuegos/juego2/juego2.component';
import { Juego3Component } from './videojuegos/juego3/juego3.component';
import { ListavjComponent } from './videojuegos/listavj/listavj.component';

const routes: Routes = [
  { path: "", component :  ListavjComponent},
  { path: "juego1", component : Juego1Component },
  { path: "juego2", component : Juego2Component },
  { path: "juego3", component :  Juego3Component},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
