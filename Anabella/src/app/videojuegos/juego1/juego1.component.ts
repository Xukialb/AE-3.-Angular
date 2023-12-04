import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../listavj/juego';


@Component({
  selector: 'app-juego1',
  templateUrl: './juego1.component.html',
  styleUrls: ['./juego1.component.css']
})
export class Juego1Component implements OnInit {

  @Input() juego : Juego

 
 
 
 constructor() { }

  ngOnInit() {
   
}
}
