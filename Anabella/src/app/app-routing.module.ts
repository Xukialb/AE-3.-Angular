import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juego1Component } from './videojuegos/juego1/juego1.component';
import { Juego2Component } from './videojuegos/juego2/juego2.component';
import { Juego3Component } from './videojuegos/juego3/juego3.component';
import { ListavjComponent } from './videojuegos/listavj/listavj.component';
import { NosotrosComponent } from './general/pie-pag/nosotros/nosotros.component';
import { Juego4Component } from './videojuegos/juego4/juego4.component';

const routes: Routes = [
  { path: "", component :  ListavjComponent},
  { path: "juego1", component : Juego1Component },
  { path: "juego2", component : Juego2Component },
  { path: "juego3", component :  Juego3Component},
  { path: "juego4", component :   Juego4Component},
  { path: "nosotros", component :  NosotrosComponent},
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
