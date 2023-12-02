import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from '../../entidades/juego';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  lista : Juego[]=[]
 
  constructor(private router : Router) {   
    let juego =new Juego( "The Last of Us", "Naughty Dog", 9.69)
    this.lista.push(juego);
    juego =new Juego( "Uncharted 4", "Naughty Dog", 9.57)
    this.lista.push(juego);
    juego =new Juego( "Zelda Breath of the Wild", "Nintendo", 9.35)
    this.lista.push(juego);
  } 
 
  public navegar(juego: Juego) {
    console.log("Navegando para el juego:", juego.titulo);
  
    switch (juego.titulo.toLowerCase()) {
      case "elden ring":
        console.log("Condición 1 cumplida");
        this.router.navigate(["/juego1"]);
        break;
      case "baldur's gate 3":
        console.log("Condición 2 cumplida");
        this.router.navigate(["/juego2"]);
        break;
      case "the witcher 3":
        console.log("Condición 3 cumplida");
        this.router.navigate(["/juego3"]);
        break;
      default:
        console.log("Ninguna condición cumplida");
        break;
    }
  }

  ngOnInit(): void {
  }

}