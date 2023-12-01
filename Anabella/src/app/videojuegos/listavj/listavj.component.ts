import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from './juego';


@Component({
  selector: 'app-listavj',
  templateUrl: './listavj.component.html',
  styleUrls: ['./listavj.component.css']
})
export class ListavjComponent implements OnInit { 

lista : Juego[]=[]
 
  constructor(private router : Router) {   
    let juego =new Juego( "Elden Ring", "FromSoftware", 9.69)
    this.lista.push(juego);
    juego =new Juego( "Baldur's Gate 3", "Larian Studios", 9.57)
    this.lista.push(juego);
    juego =new Juego( "The Witcher 3", "CD Projekt", 9.35)
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

  ngOnInit() {
  }

}
