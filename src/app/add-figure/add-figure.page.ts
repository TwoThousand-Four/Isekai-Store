import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FigureService } from '../services/figure.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Figure } from '../models/figure.model';


@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.page.html',
  styleUrls: ['./add-figure.page.scss'],
})
export class AddFigurePage implements OnInit {

  figure:Figure={
    nombre: "",
    altura: "",
    precio: 0,
    foto: "",
    id: 0
  }
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router,
    private afAuth : AngularFireAuth,
    private navCtrl : NavController,
    private figureService : FigureService,) { }

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

  addFigure(){
    this.figureService.addFigure(this.figure).subscribe()
    this.router.navigateByUrl("/home")
  }
  

LogOut(){
  this.afAuth.signOut().then(data => {
    console.log(data);})

    this.navCtrl.navigateRoot("login")
}


}
