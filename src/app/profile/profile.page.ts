import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,
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
