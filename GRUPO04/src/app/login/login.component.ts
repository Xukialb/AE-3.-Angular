import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: string= ""

 //Definimos algunos usuarios y contraseñas válidos
 usuariosValidos = [
  { username: 'marta', password: '123' },
  { username: 'pedro', password: '456' },
  { username: 'juan', password: '789' }
];

usuarioObligatorioOculto = true
passwordObligatorioOculto = true


 constructor(private router : Router) {}  

  ngOnInit() {
  }

//Método que porcesa los datos ingresados en el formulario
  login(form: any): void {
    const user = form.value.user;
    const password = form.value.password;

    // Verificar si el usuario y la contraseña coinciden con los válidos
    const usuarioValido = this.usuariosValidos.find(u => u.username === user && u.password === password);

    if (usuarioValido) {
      // Mostramos mensaje de login exitoso
      console.log('Login exitoso');
      this.usuario = user;
      this.router.navigate(['/lista', { usuario: this.usuario }]);
    } else 
      // Mostramos el mensaje de login inválido
      console.log('Login inválido');
      this.ocultarMensajeError(form)
     
    }


    public ocultarMensajeError(form: any) {
      // Oculta el mensaje de error para todos los campos
      this.usuarioObligatorioOculto = true;
      this.passwordObligatorioOculto = true;
  
      // Muestra el mensaje de error solo si no se completa el usuario
      if (!form.value.user) {
        this.usuarioObligatorioOculto = false;
      }
      // Muestra el mensaje de error solo si no se completa el password
      if (!form.value.password) {
        this.passwordObligatorioOculto = false;
      }
    }
  }

  

   



  
   
  
