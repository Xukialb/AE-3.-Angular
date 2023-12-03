import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarios = [
    { usuario: 'usuario1', contraseña: 'clave1' },
    { usuario: 'usuario2', contraseña: 'clave2' }
  ];

  usuario: string = '';
  contraseña: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  iniciarSesion(): void {
    const usuarioEncontrado = this.usuarios.find(u => u.usuario === this.usuario && u.contraseña === this.contraseña);

    if (usuarioEncontrado) {
      this.router.navigate(['/']);
    } else {
      this.mensajeError = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}

