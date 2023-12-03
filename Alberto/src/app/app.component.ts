// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videojuegos = [
    { id: 1, titulo: 'Videojuego 1', compañia: 'Compañia 1', imagen: 'url1', valoracion: 4.5 },
    { id: 2, titulo: 'Videojuego 2', compañia: 'Compañia 2', imagen: 'url2', valoracion: 3.8 },
    // ... más videojuegos
  ];

  usuarios = [
    { nombre: 'usuario1', contraseña: 'contraseña1' },
    { nombre: 'usuario2', contraseña: 'contraseña2' },
    // ... más usuarios
  ];
}
