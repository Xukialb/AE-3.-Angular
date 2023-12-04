import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router : Router) {}  

  ngOnInit() {
  }


login(form: NgForm): any {
    const user = form.value.user;
    const password = form.value.password;

    if (user && password) {
    console.log('Login successful');
    this.router.navigate(['/lista']);

    } else {
      // Handle invalid login attempt
      console.log('Invalid login attempt');
    }
  }
}

