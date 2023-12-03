// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  iniciarSesion(): void {
    if (this.loginForm.valid) {
      // Tu lógica de inicio de sesión aquí
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Formulario no válido. Verifica los campos.');
    }
  }
}


