import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent {

  videojuegos = [
    { id: 1, titulo: 'Zelda Breath of the Wild', valoracion: 4.5, compañia: 'Nintendo', imagen: 'Alberto\src\assets\imagenes\zbotw.jpg' },
    { id: 2, titulo: 'The Last of Us', valoracion: 4.8, compañia: 'Naughty Dog', imagen: 'Alberto\src\assets\imagenes\tlou.jpg' },
    { id: 3, titulo: 'Marvels Spider-man', valoracion: 4.5, compañia: 'Imsoniac Games', imagen: 'Alberto\src\assets\imagenes\spiderman.jpg' },
    { id: 4, titulo: 'Microsoft Flight Simulator', valoracion: 4.8, compañia: 'Microsoft', imagen: 'Alberto\src\assets\imagenes\mfs.jpg' },
    { id: 5, titulo: 'Red Dead Redemption II', valoracion: 4.5, compañia: 'Rockstar Games', imagen: 'Alberto\src\assets\imagenes\rdd2.jpg' },
  ];

}
