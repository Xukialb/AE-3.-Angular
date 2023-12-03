// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuarioAutenticado: boolean = false;
  nombreUsuario: string = 'Usuario Ejemplo';
  videojuegos: any[] = [
    { id: 1, titulo: 'Videojuego 1', valoracion: 4.5 },
    { id: 2, titulo: 'Videojuego 2', valoracion: 3.8 },
    // ... más videojuegos
  ];

  constructor(private router: Router) {}

  onLoginSuccess(usuario: string): void {
    this.usuarioAutenticado = true;
    this.nombreUsuario = usuario;
    this.router.navigate(['/']); // Redirigir a la página principal después del inicio de sesión
  }

  onButtonClick(event: any): void {
    // Manejar el evento aquí
  }
  
}