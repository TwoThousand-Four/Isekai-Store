import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../models/user.model";
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;
  constructor(private router: Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private afAuth : AngularFireAuth,
    private navCtrl : NavController,) {}

  ngOnInit() {}

  async login(user : User){
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message : "Espere por favor..."
      })
      await loader.present();

      try {
        await this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(data => {
          console.log(data);

          this.navCtrl.navigateRoot("home")
        })

      } catch (error:any) {
        error.message = "Usuario no registrado";
        let errorMsg = error.message || error.getLocalizedMessage();

        this.showToast(errorMsg)
      }
      await loader.dismiss();
    }
  }

  formValidation(){
    if (!this.user.email) {
      this.showToast("Ingrese un correo electrónico");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Ingrese una contraseña");
      return false;
    }
    return true;
  }

  showToast(message : string){
    this.toastCtrl.create({
      message : message,
      duration : 5000 // La duración del mensaje es de 5 segundos
    }).then(toastData => toastData.present());
  }
}
