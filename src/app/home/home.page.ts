import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { FigureService } from '../services/figure.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Figure } from '../models/figure.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  figuras = [];
  constructor(public firestoreService: FirestoreService,
              private router: Router,
              private afAuth : AngularFireAuth,
              private navCtrl : NavController,
              private loadCtrl : LoadingController,
              private figureService : FigureService
              ) {}

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
  GoDetail(){
    this.router.navigate(['/detail/:id']);
  }

  ngOnInit() {this.loadFigures();}

  async loadFigures(event?:InfiniteScrollCustomEvent){
    const loading=await this.loadCtrl.create({
      message:"Cargando figuras.....",
      spinner:"bubbles"
    });
    await loading.present();
    this.figureService.tolistFigures().subscribe(
      (res)=>{
        loading.dismiss();
        let listString=JSON.stringify(res)
        this.figuras=JSON.parse(listString)
        event?.target.complete();
    },
    (err)=>{
      console.log(err.message)
      loading.dismiss();
    }
    )
    
  }
  LogOut(){
    this.afAuth.signOut().then(data => {
      console.log(data);})

      this.navCtrl.navigateRoot("login")
  }
}
