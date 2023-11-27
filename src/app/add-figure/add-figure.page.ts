import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.page.html',
  styleUrls: ['./add-figure.page.scss'],
})
export class AddFigurePage implements OnInit {


  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router,
    private afAuth : AngularFireAuth,
    private navCtrl : NavController,) { }

  ngOnInit() {

  }

  GoHome(){
    this.router.navigate(['/home']);
  }
  GoProfile(){
      this.router.navigate(['/profile']);
  }
  GoAdd(){
      this.router.navigate(['/add-figure']);
  }
  GoAssist(){
      this.router.navigate(['/assistance']);
  }

  

LogOut(){
  this.afAuth.signOut().then(data => {
    console.log(data);})

    this.navCtrl.navigateRoot("login")
}


}
