import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  { path: '', component: ListaVideojuegosComponent },
  { path: 'videojuego/:id', component: DetalleVideojuegoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
