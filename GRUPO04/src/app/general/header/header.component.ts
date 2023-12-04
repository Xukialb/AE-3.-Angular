import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuario: string = "";

  //Definimos un cosntructor con parámetro ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  //Obtenemos el valor del usuario actual
  ngOnInit() {
    this.usuario = this.route.snapshot.paramMap.get("usuario") || '';
    console.log(this.usuario);
  }
  
  }
  



