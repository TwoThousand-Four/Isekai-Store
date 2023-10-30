import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

interface User{
  
  id: Number,
  nombre: string,
  Apellido: string,
  email: string,
  contrasena: string,
  rut: string,
  tipoUser: UserType,
}

type UserType = 'Cliente' | 'Empleado'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {

   }
   usuario = {
    email:'',
    password:''
  }

  usuarios:  User[] = 
  [ 
    {
      id: 1,
      nombre: "Jeremy",
      Apellido: "Garrido",
      email: "ykzjere@gmail.com",
      contrasena: "jeremy514",
      rut: "21.535.925-5",
      tipoUser: "Empleado",
    },
    
  ]
  login() {

    console.log("email: " + this.usuario.email + " clave: "+ this.usuario.password)
    this.usuarios.forEach(persona => {
      if (this.usuario.email==persona.email && this.usuario.password == persona.contrasena)  {
        this.router.navigate(['/home'])
      }
    });
  }

  ngOnInit() {
  }

  GoToRegister(){
    this.router.navigate(['/register']);
  }
  GoToReset(){
    this.router.navigate(['/reset-pass']);
  }

}
