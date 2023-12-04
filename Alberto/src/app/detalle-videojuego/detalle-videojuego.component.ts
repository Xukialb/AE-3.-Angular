import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent {
  // Declaración de variables de clase
  videojuegoId: number;
  videojuego: any;

  // Constructor del componente que recibe una instancia de ActivatedRoute
  constructor(private route: ActivatedRoute) {
    // Inicialización de la variable videojuegoId con un valor predeterminado
    this.videojuegoId = 0;

    // Inicialización de la variable videojuegoId con un valor predeterminado
    this.route.params.subscribe(params => {
      // Actualización de videojuegoId con el valor proporcionado en los parámetros de la ruta
      this.videojuegoId = +params['id'];

      // Llamada a la función para cargar los detalles del videojuego
      this.cargarDetalleVideojuego(this.videojuegoId);
    });
  }

  // Función para cargar los detalles del videojuego
  cargarDetalleVideojuego(id: number) {
    // Condicionales para determinar qué detalles cargar basados en el id proporcionado
    if (id === 1) {
      this.videojuego = {
        id: id,
        titulo: 'Zelda Breath of the Wild',
        compañia: 'Nintendo',
        imagen: 'assets/imagenes/zbotw.jpg',
        valoracion: 4.5
      };
    } else if (id === 2) {
      this.videojuego = {
        id: id,
        titulo: 'The Last of Us',
        compañia: 'Naughty Dog',
        imagen: 'assets/imagenes/tlou.jpg',
        valoracion: 4.8
      };
    } else if (id === 3) {
      this.videojuego = {
        id: id,
        titulo: 'Marvels Spider-man',
        compañia: 'Imsoniac Games',
        imagen: 'assets/imagenes/spiderman.jpg',
        valoracion: 4.5
      };
    } else if (id === 4) {
      this.videojuego = {
        id: id,
        titulo: 'Microsoft Flight Simulator',
        compañia: 'Microsoft Games',
        imagen: 'assets/imagenes/mfs.jpg',
        valoracion: 4.8
      };
    } else if (id === 5) {
      this.videojuego = {
        id: id,
        titulo: 'Red Dead Redemption II',
        compañia: 'Rockstar Games',
        imagen: 'assets/imagenes/rdd2.jpg',
        valoracion: 4.5
      };
    }
  }
}
