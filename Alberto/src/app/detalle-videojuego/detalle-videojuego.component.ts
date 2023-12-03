import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent {
  videojuegoId: number;
  videojuego: any; // Puedes usar un modelo si prefieres

  constructor(private route: ActivatedRoute) {
    this.videojuegoId = 0;
    this.route.params.subscribe(params => {
      this.videojuegoId = +params['id'];
      this.cargarDetalleVideojuego(this.videojuegoId);
      // Aquí cargarías los detalles del videojuego directamente, por ejemplo:  
    });
  }
  cargarDetalleVideojuego(id: number) {
    // Aquí deberías implementar la lógica para cargar el videojuego según el ID
    // Por ahora, se proporciona un ejemplo con datos estáticos
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
      compañia: 'Insoniac Games',
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
