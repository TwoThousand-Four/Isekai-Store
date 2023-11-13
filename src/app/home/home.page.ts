import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Figure } from '../models/figure.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  figuras: Figure[] = [];
  private path = 'Figuras/';
  
  constructor(public firestoreService: FirestoreService,
              private router: Router,
              private afAuth : AngularFireAuth,
              private navCtrl : NavController,) {this.loadFiguras();}

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

  ngOnInit() {}
  loadFiguras() {
    this.firestoreService.getCollection<Figure>(this.path).subscribe( res => {
          // console.log(res);
          this.figuras = res;
    });
  }

  LogOut(){
    this.afAuth.signOut().then(data => {
      console.log(data);})

      this.navCtrl.navigateRoot("login")
  }
}
